# Hand load 185gr Juggernaut

### Summary
Initial load testing of 185gr Berger Juggernauts with VihtaVuori N150. Used VihtaVuori reloading data
https://www.vihtavuori.com/reloading-data/rifle-reloading/?cartridge=30 to sample. 

This is a new powder for me, so testing low charge weights initially to see how it groups.


### Initial Load

| **Powder**      | **Primer**          |         **Brass**         | **COAL (inch)** | **CBTO (inch)** | **Start Charge (gr)** | **End Charge (gr)** |
|-----------------|---------------------|:-------------------------:|-----------------|-----------------|-----------------------|---------------------|
| VihtaVuori N150 | Magtech Small Rifle | Lapua Palma SR (LPT03781) | 2.8430          | 2.1765          | 37.5                  | 41                  |

**Special notes:** The COAL below is greater than VVihtaVuori's load data of 2.795". Max charge from VihtaVuori data is 40.6gr, but I tested to 41gr.

There were no pressure signs observed, and there is still plenty of case capacity. More testing is needed since velocity is not where I'd like (looking for ~2750fps or greater).

Testing performed at 200 yards with 0 minutes of windage.


### Estimates of initial charges using Gordons Reloading Tool

![](../static/img/estimated-velocity-initial-308-185-jugg.svg)


### Initial charges - actual results 
<iframe width="1095px" height="676" allowfullscreen seamless frameborder="0" scrolling="yes" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTFMKHhDcDzsQDlmwa-mD2elzSC--_cCadlnEzu8eoXY7zuA92of0Jw13v45P6yEjE0R_zFsyBwk0qw/pubchart?oid=931640145&amp;format=interactive"></iframe>


### Raw data

| **Charge Weight (gr)** | **Shot 1** | **Shot 2** | **Shot 3** | **Shot 4** | **Shot 5** | **Average (FPS)** | **Extreme Spread (FPS)** | **Standard Deviation** | **Group (MOA)** |
|------------------------|------------|------------|------------|------------|------------|-------------------|--------------------------|------------------------|-----------------|
| 37.5                   | 2334.2     | 2329.1     | 2344.9     | 2319.5     | 2315.4     | 2328.6            | 29.5                     | 11.8                   | 0.95            |
| 37.8                   | 2355.1     | 2357.4     | 2331.7     | 2337.8     | 2337.3     | 2343.9            | 25.7                     | 11.6                   | 0.24            |
| 38.1                   | 2357.5     | 2380.9     | 2372.1     | 2358.8     | 2388.4     | 2371.5            | 30.9                     | 13.5                   | 0.33            |
| 38.4                   | 2388.3     | 2384.7     | 2388.6     | 2378.7     | 2388.3     | 2385.7            | 9.9                      | 4.2                    | 0.68            |
| 38.7                   | 2393.2     | 2409.7     | 2392.3     | 2404       | 2419.1     | 2403.7            | 26.8                     | 11.3                   | 0.53            |
| 39                     | 2416.1     | 2437.2     | 2433.7     | 2423.9     | 2449.7     | 2432.1            | 33.6                     | 12.9                   | 0.31            |
| 39.3                   | 2439.3     | 2436.2     | 2428.7     | 2429.9     | 2449.2     | 2436.7            | 20.5                     | 8.3                    | 0.69            |
| 39.6                   | 2441.7     | 2457.4     | 2461.7     | 2469.4     | 2448.3     | 2455.7            | 27.7                     | 10.9                   | 0.92            |
| 40                     | 2472       | 2484.8     | 2491.1     | 2484.2     | 2468.6     | 2480.1            | 22.5                     | 9.5                    | 0.72            |
| 40.3                   | 2499.4     | 2509.8     | 2505.9     | 2508.4     | 2499.6     | 2504.6            | 10.4                     | 4.9                    | 0.67            |
| 40.6                   | 2531.4     | 2525.5     | 2513.5     | 2538.9     | 2534.6     | 2528.8            | 25.4                     | 9.8                    | 0.59            |
| 40.8                   | 2531.7     | 2534.6     | 2531.1     | 2540.7     | 2536.1     | 2534.8            | 9.6                      | 3.9                    | 0.46            |
| 41                     | 2529.2     | 2563.2     | 2550.5     | 2550.1     | 2554.2     | 2549.4            | 34.0                     | 12.5                   | 0.54            |

Initial load testing grouped well, with some low SD/ES numbers in places. Comparing to Gordons Reloading Tool, real numbers appear to be ~30fps slower on average. Velocity is not high enough for me to be happy at 1000 yards, so will next perform a single shot ladder test to determine velocity nodes and max pressure.

### Berger example ballistics data

|    **Bullet Diameter**    | 0.308 inches |    **Zero Range**   |    100 yards   |
|:-------------------------:|:------------:|:-------------------:|:--------------:|
|     **Bullet Weight**     |  185 grains  |   **Sight Height**  |     1.50 in    |
| **Ballistic Coefficient** |     0.284    | **Muzzle Velocity** |    2750 fps    |
|      **Temperature**      |     59 F     |    **Wind Speed**   |    0.00 mph    |
|        **Altitude**       |    0 feet    |  **Wind Direction** |    9 o'clock   |
|      **Inclination**      |   0 degrees  |  **Berger Bullets** | Copyright 2013 |

| **Range (y)** | **Velocity (fps)** | **Energy (ft-lbs)** | **Elevation (moa)** | **Windage (moa)** | **TOF (s)** |
|:-------------:|:------------------:|:-------------------:|:-------------------:|:-----------------:|:-----------:|
| 100           | 2588               | 2752                | -0.00               | 0.00              | 0.11        |
| 200           | 2432               | 2430                | -1.76               | 0.00              | 0.23        |
| 300           | 2281               | 2138                | -4.22               | 0.00              | 0.36        |
| 400           | 2136               | 1874                | -7.05               | 0.00              | 0.49        |
| 500           | 1996               | 1637                | -10.21              | 0.00              | 0.64        |
| 600           | 1861               | 1423                | -13.70              | 0.00              | 0.79        |
| 700           | 1730               | 1230                | -17.57              | 0.00              | 0.96        |
| 800           | 1604               | 1057                | -21.85              | 0.00              | 1.14        |
| 900           | 1482               | 902                 | -26.62              | 0.00              | 1.33        |
| 1000          | 1365               | 765                 | -31.95              | 0.00              | 1.54        |

Goal is for projectile to be above transonic speeds (1340-890fps) at 1000 yards for the best chance of a good group.

### Estimates of ladder charges using Gordons Reloading Tool

The estimates below will sill not yield the FPS I am looking for. We'll likely be lower than this with the chronograph based on our average of 30fps less from initial testing.

![](../static/img/estimated-velocity-ladder-308-185-jugg.svg)

### Ladder testing - actual results

<iframe width="1095px" height="676" allowfullscreen seamless frameborder="0" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTFMKHhDcDzsQDlmwa-mD2elzSC--_cCadlnEzu8eoXY7zuA92of0Jw13v45P6yEjE0R_zFsyBwk0qw/pubchart?oid=2062122451&format=interactive"></iframe>
