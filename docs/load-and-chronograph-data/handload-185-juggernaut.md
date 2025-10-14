# Hand load 185gr Juggernaut

### Summary
Initial load testing of 185gr Berger Juggernauts with VihtaVuori N150. Used VihtaVuori reloading data
https://www.vihtavuori.com/reloading-data/rifle-reloading/?cartridge=30 to sample. 

This is a new powder for me, so testing low charge weights initially to see how it groups.

#

### Initial Load

| **Powder**      | **Primer**          |         **Brass**         | **COAL (inch)** | **CBTO (inch)** | **Start Charge (gr)** | **End Charge (gr)** |
|-----------------|---------------------|:-------------------------:|-----------------|-----------------|-----------------------|---------------------|
| VihtaVuori N150 | Magtech Small Rifle | Lapua Palma SR (LPT03781) | 2.8430          | 2.1765          | 37.5                  | 41                  |

**Special notes:** The COAL below is greater than VihtaVuori's load data of 2.795". Max charge from VihtaVuori data is 40.6gr, but I tested to 41gr.

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

### Ladder testing - raw data

The VihtaVuori load data appears to be quite conservative maxing out at 40.6 which averages 2530fps. This doesn't yield enough velocity for FTR shooting for me to be comfortable. I decided to seat the bullet longer (ogive 0.005" off the lands) which allows for much more case fill.

I ran all the way up to 44.4gr excepting to see pressure signs before then. There was a small amount of room left in the case - I do not want to compress loads. 

No pressure signs were observed throughout all the testing, surprisingly. Ambient temperature was ~28°C with two minutes of pause left between each round.

| **Charge Weight (gr)** | **Velocity (FPS)** |
|------------------------|--------------------|
|                   37.5 |             2395.2 |
|                   37.8 |             2375.2 |
|                   38.1 |             2426.4 |
|                   38.4 |             2461.5 |
|                   38.7 |             2444.5 |
|                   39.0 |             2499.6 |
|                   39.3 |             2516.3 |
|                   39.6 |             2520.3 |
|                   39.9 |             2538.7 |
|                   40.2 |             2544.6 |
|                   40.5 |             2550.4 |
|                   40.8 |             2568.0 |
|                   41.1 |             2584.3 |
|                   41.4 |             2580.6 |
|                   41.7 |             2590.2 |
|                   42.0 |             2619.3 |
|                   42.3 |             2615.1 |
|                   42.6 |             2634.8 |
|                   42.9 |             2645.9 |
|                   43.2 |             2688.1 |
|                   43.5 |             2691.7 |
|                   43.8 |             2707.0 |
|                   44.1 |             2723.0 |
|                   44.4 |             2741.2 |

All shots were aimed at dead centre with no modifications or allowances made to elevation or windage throughout.

![](../static/img/ladder_charge_shotview.png)

Showing cases after firing. No pressure signs were observed throughout this test. Cases and primers look same all the way through from lowest to highest charge.

![](../static/img/powder_charge_ladder_case_view.jpg)

### Final charges - actual results

<iframe width="1095px" height="676" allowfullscreen seamless frameborder="0" scrolling="yes" src="https://docs.google.com/spreadsheets/d/1EIFL3sjQG2u4RIoVZ40C5YfDsK5RfOSZLNslx3T83dI/pubchart?oid=1460961615&format=interactive"></iframe>


### 10 shot tests - raw data

During this range trip, I loaded 10 rounds of 44.1gr, 44.4gr, 44.6gr and 44.8gr. No pressure signs were observed again. These strings were shot at 200 yards again. All shots were aimed dead centre target, with no allowances made for wind. This trip had wind gusts of up to 20mph.

| **Charge Weight (gr)** | **Shot 1** | **Shot 2** | **Shot 3** | **Shot 4** | **Shot 5** | **Shot 6** | **Shot 7** | **Shot 8** | **Shot 9** | **Shot 10** | **Average (FPS)** | **Extreme Spread (FPS)** | **Standard Deviation** | **Group (MOA)** |
|------------------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|-------------|-------------------|--------------------------|------------------------|-----------------|
|                   44.1 |     2725.6 |     2716.1 |     2725.4 |     2713.9 |     2721.2 |     2713.2 |     2718.6 |     2717.3 |     2716.6 |      2715.8 |            2718.4 |                     12.4 |                    4.4 |            0.62 |
|                   44.4 |     2733.9 |     2733.3 |     2739.2 |     2738.5 |     2740.6 |     2736.7 |     2737.6 |     2733.8 |     2740.6 |      2733.8 |            2736.8 |                      7.3 |                    2.9 |            0.62 |
|                   44.6 |       2745 |     2751.2 |     2755.4 |     2754.6 |     2757.8 |     2749.2 |     2747.4 |     2746.3 |     2753.6 |      2746.1 |            2750.7 |                     12.8 |                    4.5 |            0.59 |
|                   44.8 |     2766.3 |     2768.2 |       2776 |     2758.7 |     2780.5 |     2765.3 |     2754.9 |       2776 |     2783.1 |      2781.7 |            2771.1 |                     28.2 |                    9.9 |            0.85 |



44.1 grains. 0.62 MOA group. Unfortunately, I didn't grab a screenshot of this.

![](../static/img/ladder_charge_shotview_44-4.png)
44.4 grains. 0.62 MOA group

![](../static/img/ladder_charge_shotview_44-6.png)
44.6 grains. 0.59 MOA group

![](../static/img/ladder_charge_shotview_44-8.png)
44.8 grains. 0.85 MOA group

### Max Pressure testing

I wanted to see how much more velocity I could achieve here. I wasn't far off max case fill, so I pushed it till I saw pressure signs, without compressing the powder.

I recently changed my bipod to a Seb Joypod-X, which gives me a much better, stable position. I wanted to discount some of the movement in my previous tests to poor positioning.

As previous, these were aimed dead centre, and not making any allowance for wind.

| **Charge Weight (gr)** | **Shot 1** | **Shot 2** | **Shot 3** | **Average (FPS)** | **Extreme Spread (FPS)** | **Standard Deviation** | **Group (MOA)** |
|------------------------|------------|------------|------------|-------------------|--------------------------|------------------------|-----------------|
| 44.6                   | 2757.3     | 2755.5     | 2748.4     | 2753.7            | 8.9                      | 3.8                    | 0.19            |
| 44.8                   | 2770.4     | 2779       | 2753.3     | 2767.5            | 25.7                     | 10.6                   | 0.33            |
| 45                     | 2782.2     | 2779.2     | 2778.7     | 2780              | 3.5                      | 1.5                    | 0.24            |
| 45.2                   | 2797.5     | 2797.4     | 2792.3     | 2795.7            | 5.2                      |  2.4                   | 0.3             |
| 45.4                   | 2800.1     | 2809.3     | 2810.7     | 2806.7            | 10.6                     | 4.7                    | 0.74            |

I received a heavy bolt on 45.4 grains and it grouped terribly even in just these three shots.

44.6 grains still looks like a good contender, but 45 grains also looks like it should receive some more testing with its group not being much more than 44.6, but also receiving a better SD and ES.

![](../static/img/ladder_charge_shotview_44-6-second.jpeg)
44.6 grains. 0.19 MOA group

![](../static/img/ladder_charge_shotview_44-8-second.jpeg)
44.8 grains. 0.33 MOA group

![](../static/img/ladder_charge_shotview_45-second.jpeg)
45 grains. 0.24 MOA group

![](../static/img/ladder_charge_shotview_45-2-second.jpeg)
45.2 grains. 0.3 MOA group

![](../static/img/ladder_charge_shotview_45-4-second.jpeg)
45.4 grains. 0.74 MOA group

I'll load up 10-15 rounds of 44.6 and 45 grains to do a better assessment.

### Match results

Using 44.6gr seems to be a really nice load for up to 600 yards. I won the FTR 300 yard match at the Imperial Meeting 2025:

![](../static/img/185-juggernaut-imperial-2025-300yd.jpg)

Also club match out to 600 yards yielded a 50.6:
![](../static/img/185-juggernaut-sep-2025-600yd-1.jpg)
![](../static/img/185-juggernaut-sep-2025-600yd-2.jpg)

#
### Once fired brass
Initial testing of once fired brass. Bumped back .002" and still with a 2.2850" CBTO.

I did have a two flyers througout this testing, so I will need to go back and verify. Since there were only two flyers, I have decided to discount these since they were way off.

| **Charge Weight (gr)** | **Shot 1** | **Shot 2** | **Shot 3** | **Shot 4** | **Shot 5** | **Average (FPS)** | **Extreme Spread (FPS)** | **Standard Deviation** | **Group (MOA) (without flyers)** | **Group (MOA) (with flyers)** |
|------------------------|------------|------------|------------|------------|------------|-------------------|--------------------------|------------------------|----------------------------------|-------------------------------|
|                   43.8 |     2750.8 |     2738.1 |     2736.1 |     2735.3 |     2733.9 |            2738.8 |                     16.9 |                    6.9 |                             0.19 |                          0.41 |
|                     44 |     2755.5 |     2746.3 |     2743.4 |       2742 |     2737.4 |            2744.9 |                     18.1 |                    6.7 |                              0.4 |                           0.4 |
|                   44.2 |       2751 |       2761 |     2749.6 |       2749 |     2740.6 |            2750.2 |                     20.4 |                    7.3 |                             0.32 |                          0.32 |
|                   44.4 |     2763.5 |     2759.4 |     2747.4 |     2767.1 |     2749.9 |            2757.5 |                     19.7 |                    8.5 |                             0.13 |                          0.43 |
|                   44.6 |     2768.7 |     2771.4 |       2774 |     2764.4 |       2765 |            2768.7 |                      9.6 |                    4.1 |                             0.52 |                          0.52 |

<iframe width="1095px" height="676" allowfullscreen seamless frameborder="0" scrolling="yes" src="https://docs.google.com/spreadsheets/d/1EIFL3sjQG2u4RIoVZ40C5YfDsK5RfOSZLNslx3T83dI/pubchart?oid=1460961615&format=interactive&headers=false"></iframe>

Unfortunately, these groups were shot at 300 yards, instead of 200 yards. Therefore, it is difficult to get an accurate representation on any improvements.

Average velocity appears to have increased ~20fps between new and once fired brass. My previous "winning" load was 44.6gr, and this now appears to be 44.4gr, based on group size, if I discount the flyer on this test. My previous best group with 44.6 was 0.59 MOA at 200 yards (1.2357"), and my new best so far is 0.13 MOA (0.4084"). Initially, this appears to be a drastic improvement!

No pressure signs were observed throughout this test.

#### Screenshots

43.8gr showed promise, despite the flyer. Discounting this resulted in a sub quarter MOA group. Based on the vertical spread, I suspect the flyer to the left was the wind - keeping the same aim point at 300 yards will show this.
![](../static/img/185_juggernaut_shotview_once_fired_43_8_with_flyer.png)
![](../static/img/185_juggernaut_shotview_once_fired_43_8_without_flyer.png)

44gr was ok, nothing great. A bit more vertical spread than I'd like.
![](../static/img/185_juggernaut_shotview_once_fired_44.png)

44.2gr an ok group. Nothing fantastic, but nothing to complain about here. Reasonable amount of vertical though.
![](../static/img/185_juggernaut_shotview_once_fired_44_2.png)

44.4gr was another good group - I suspect the flyer was the wind based on the elevation being relatively consistent. Both groups shown with and without the flyer below.
![](../static/img/185_juggernaut_shotview_once_fired_44_4_with_flyer.png)
![](../static/img/185_juggernaut_shotview_once_fired_44_4_without_flyer.png)

44.6gr opened up a little on the vertical. Discounting shot 5, we'd be roughly quarter MOA.
![](../static/img/185_juggernaut_shotview_once_fired_44_6.png)

Based on this, the groups have definitely improved over new brass. Will need to repeat the tests again to get some extra validation. It would appear that my previous 44.4gr and 44.6gr charge weights can remain. I'd also like to work up to 45gr to see if the node continues.