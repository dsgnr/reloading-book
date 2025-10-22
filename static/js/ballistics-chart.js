// Common helpers
function validateParams(params, requiredKeys = []) {
  const missing = requiredKeys.filter(key => !params[key]);
  if (missing.length) {
    console.error(`Missing required parameters: ${missing.join(', ')}`);
    return false;
  }
  return true;
}

function fetchCsvData({ csvUrl, onSuccess, onError }) {
  Papa.parse(csvUrl, {
    download: true,
    header: true,
    dynamicTyping: true,
    complete: onSuccess,
    error: onError
  });
}

function getRange(arr, padding = 0.4) {
  const nums = arr.filter(v => typeof v === 'number' && !isNaN(v));
  if (!nums.length) return [0, 1];
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const pad = (max - min) * padding;
  return [Math.max(0, Math.floor(min - pad)), Math.ceil(max + pad)];
}

function linearRegression(x, y) {
  const n = x.length;
  const sumX = x.reduce((a, b) => a + b, 0);
  const sumY = y.reduce((a, b) => a + b, 0);
  const sumXY = x.reduce((acc, xi, i) => acc + xi * y[i], 0);
  const sumX2 = x.reduce((acc, xi) => acc + xi * xi, 0);
  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;
  return x.map(xi => slope * xi + intercept);
}

function getBaseLayout({ xKey, yKey, y2 = false, y2Range = [] }) {
  const layout = {
    font: { family: 'Roboto, sans-serif', size: 12, color: '#333' },
    margin: { t: 30, b: 40, l: 60, r: y2 ? 60 : 40 },
    legend: { x: 0, y: -0.3, xanchor: 'left', orientation: 'h', font: { color: '#333' } },
    hovermode: 'x unified',
    xaxis: {
      title: { text: xKey },
      linecolor: '#333',
      tickfont: { color: '#333' },
      titlefont: { color: '#333' },
      tickmode: 'array'
    },
    yaxis: {
      title: { text: yKey },
      linecolor: '#333',
      tickfont: { color: '#333' },
      titlefont: { color: '#333' }
    }
  };

  if (y2) {
    layout.yaxis2 = {
      title: { text: 'SD / ES (FPS)' },
      overlaying: 'y',
      side: 'right',
      linecolor: 'rgba(0,0,0,0)',
      zerolinecolor: 'rgba(0,0,0,0)',
      showgrid: false,
      range: y2Range,
      tickfont: { color: '#333' },
      titlefont: { color: '#333' }
    };
  }

  return layout;
}

function createShotTraces(shotKeys, shotsData, xData) {
  const shotColors = [
    '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
    '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'
  ];

  return shotsData.map((shotArr, i) => ({
    x: xData,
    y: shotArr,
    mode: 'markers',
    name: shotKeys[i],
    marker: { color: shotColors[i % shotColors.length], symbol: 'x-thin-open', size: 6 },
    yaxis: 'y1',
    hoverinfo: 'x+y+name'
  }));
}

// Helper to update tick info without overwriting axis titles etc.
function updateXAxisTicks(layout, xData) {
  layout.xaxis.tickvals = xData;
  layout.xaxis.ticktext = xData.map(String);
}

function renderSimpleLineGraph({ csvUrl, chartId }) {
  if (!validateParams({ csvUrl, chartId }, ['csvUrl', 'chartId'])) return;

  fetchCsvData({
    csvUrl,
    onSuccess: results => {
      const { data, meta: { fields: headers } } = results;

      if (headers.length < 2) {
        document.getElementById(chartId).innerHTML = '<p><strong>Error:</strong> CSV must contain at least two columns.</p>';
        return;
      }

      const xKey = headers[0];
      const yKeys = headers.slice(1);
      const xData = data.map(row => row[xKey]);

      const traces = yKeys.map(key => ({
        x: xData,
        y: data.map(row => row[key]),
        mode: 'lines+markers',
        name: key,
        line: { width: 2 },
        marker: { size: 6 }
      }));

      const layout = getBaseLayout({ xKey, yKey: yKeys[0] });
      updateXAxisTicks(layout, xData);

      Plotly.newPlot(chartId, traces, layout, { displayModeBar: false });
    },
    onError: err => {
      console.error('CSV loading error:', err);
      document.getElementById(chartId).innerHTML = `<p><strong>Error:</strong> ${err.message}</p>`;
    }
  });
}

function renderBallisticsChart({ csvUrl, chartId }) {
  if (!validateParams({ csvUrl, chartId }, ['csvUrl', 'chartId'])) return;

  fetchCsvData({
    csvUrl,
    onSuccess: results => {
      const { data, meta: { fields: headers } } = results;

      const xKey = headers[0];
      const shotKeys = headers.filter(h => /^Shot \d+$/i.test(h));
      const avgKey = headers.find(h => /Average/i.test(h));
      const esKey = headers.find(h => /Extreme Spread/i.test(h));
      const sdKey = headers.find(h => /Standard Deviation/i.test(h));

      if (!avgKey || !esKey || !sdKey || !xKey || shotKeys.length === 0) {
        document.getElementById(chartId).innerHTML = `<p><strong>Error:</strong> Required columns missing in CSV.</p>`;
        return;
      }

      const xData = data.map(d => d[xKey]);
      const shotsData = shotKeys.map(k => data.map(d => d[k]));
      const avgData = data.map(d => d[avgKey]);
      const esData = data.map(d => d[esKey]);
      const sdData = data.map(d => d[sdKey]);

      const trendAvg = linearRegression(xData, avgData);
      const trendES = linearRegression(xData, esData);
      const trendSD = linearRegression(xData, sdData);

      const shotTraces = createShotTraces(shotKeys, shotsData, xData);

      const traces = [
        ...shotTraces,
        {
          x: xData,
          y: avgData,
          mode: 'lines+markers',
          name: avgKey,
          line: { color: 'red', width: 2 },
          marker: { color: 'red', size: 6, symbol: 'diamond' },
          yaxis: 'y1',
          hoverinfo: 'x+y+name'
        },
        {
          x: xData,
          y: trendAvg,
          mode: 'lines',
          line: { color: 'red', width: 2, dash: 'dot' },
          showlegend: false,
          hoverinfo: 'skip',
          yaxis: 'y1'
        },
        {
          x: xData,
          y: esData,
          mode: 'lines+markers',
          name: esKey,
          line: { color: 'black', width: 2 },
          marker: { color: 'black', size: 6, symbol: 'circle' },
          yaxis: 'y2',
          hoverinfo: 'x+y+name'
        },
        {
          x: xData,
          y: trendES,
          mode: 'lines',
          line: { color: 'black', width: 2, dash: 'dot' },
          showlegend: false,
          hoverinfo: 'skip',
          yaxis: 'y2'
        },
        {
          x: xData,
          y: sdData,
          mode: 'lines+markers',
          name: sdKey,
          line: { color: 'orange', width: 2 },
          marker: { color: 'orange', size: 6, symbol: 'circle' },
          yaxis: 'y2',
          hoverinfo: 'x+y+name'
        },
        {
          x: xData,
          y: trendSD,
          mode: 'lines',
          line: { color: 'orange', width: 2, dash: 'dot' },
          showlegend: false,
          hoverinfo: 'skip',
          yaxis: 'y2'
        }
      ];

      const layout = getBaseLayout({
        xKey,
        yKey: avgKey,
        y2: true,
        y2Range: getRange([...esData, ...sdData])
      });

      layout.yaxis.range = getRange(avgData);

      updateXAxisTicks(layout, xData);

      Plotly.newPlot(chartId, traces, layout, { displayModeBar: false });
    },
    onError: err => {
      console.error('CSV loading error:', err);
      document.getElementById(chartId).innerHTML = `<p><strong>Error:</strong> ${err.message}</p>`;
    }
  });
}

function renderCsvMarkdownTable({ csvUrl, targetId }) {
  if (!validateParams({ csvUrl, targetId }, ['csvUrl', 'targetId'])) return;

  function toMarkdownTable(headers, data) {
    let md = `| ${headers.join(' | ')} |\n| ${headers.map(() => '---').join(' | ')} |\n`;
    data.forEach(row => {
      md += `| ${headers.map(h => row[h] ?? '').join(' | ')} |\n`;
    });
    return md;
  }

  fetchCsvData({
    csvUrl,
    onSuccess: results => {
      const { meta: { fields: headers }, data } = results;
      const mdTable = toMarkdownTable(headers, data);
      document.getElementById(targetId).innerHTML = marked.parse(mdTable);
    },
    onError: err => {
      console.error('CSV loading error:', err);
      document.getElementById(targetId).innerHTML = `<p><strong>Error:</strong> ${err.message}</p>`;
    }
  });
}
