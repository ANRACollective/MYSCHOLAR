-- KELLY Area Cleanup — find centres whose coordinates sit far from their tagged area
-- Run this in Supabase SQL editor to identify mis-tagged centres.
-- Updated Apr 16 2026: thresholds now match per-area radii in tuition.html AREA_MAX_KM.
--
-- Step 1: AUDIT — see which centres are physically outside their tagged area's boundary.
-- Threshold per area mirrors the frontend AREA_MAX_KM object.

WITH area_centroids(area, lat, lng, max_km) AS (
  VALUES
    ('Kuala Lumpur City Centre', 3.1478, 101.6953,  7.0),
    ('Bangsar',                  3.1289, 101.6740,  6.0),
    ('Cheras Kuala Lumpur',      3.0985, 101.7487, 10.0),
    ('Kepong',                   3.2127, 101.6359,  8.0),
    ('Setapak',                  3.1953, 101.7128,  8.0),
    ('Wangsa Maju',              3.2046, 101.7302,  8.0),
    ('Sri Hartamas',             3.1657, 101.6571,  7.0),
    ('Petaling Jaya',            3.1073, 101.6067,  9.0),
    ('Subang Jaya',              3.0553, 101.5841,  9.0),
    ('Shah Alam',                3.0733, 101.5185,  9.0),
    ('Kota Kemuning',            2.9990, 101.5384,  8.0),
    ('Puchong',                  3.0273, 101.6203,  9.0),
    ('Ampang',                   3.1481, 101.7564, 10.0),
    ('Klang Selangor',           3.0449, 101.4497, 12.0),
    ('Damansara',                3.1546, 101.6246,  8.0)
),
distances AS (
  SELECT
    c.id,
    c.name,
    c.area           AS tagged_area,
    c.address,
    c.latitude,
    c.longitude,
    a.max_km,
    -- Haversine distance in km
    6371 * 2 * ASIN(SQRT(
      POWER(SIN(RADIANS(c.latitude  - a.lat) / 2), 2) +
      COS(RADIANS(a.lat)) * COS(RADIANS(c.latitude)) *
      POWER(SIN(RADIANS(c.longitude - a.lng) / 2), 2)
    )) AS dist_km
  FROM tuition_centres c
  JOIN area_centroids a ON a.area = c.area
  WHERE c.latitude IS NOT NULL AND c.longitude IS NOT NULL
)
SELECT
  id,
  name,
  tagged_area,
  address,
  ROUND(dist_km::numeric, 1)  AS km_from_centroid,
  max_km                       AS threshold_km,
  ROUND((dist_km - max_km)::numeric, 1) AS km_over_threshold
FROM distances
WHERE dist_km > max_km
ORDER BY tagged_area, dist_km DESC;


-- Step 2: FIX — null out the area for each mis-tagged centre so it stops
-- polluting the area filter. You can re-tag correctly once you have better data.
--
-- UPDATE tuition_centres
-- SET area = NULL
-- WHERE id IN (/* paste IDs from audit above */);
--
-- Or re-tag directly if you know the correct area:
-- UPDATE tuition_centres
-- SET area = 'Petaling Jaya'   -- example
-- WHERE id IN (/* paste IDs */);


-- Step 3: PERMANENT FIX — KELLY must extract area from address_components, not search grid.
-- In the Places Detail response, look at address_components for types = ['locality'] or
-- ['sublocality_level_1']. Map the locality string to the area enum:
--
--   locality → area value
--   "Shah Alam"       → 'Shah Alam'
--   "Petaling Jaya"   → 'Petaling Jaya'
--   "Subang Jaya"     → 'Subang Jaya'
--   "Klang"           → 'Klang Selangor'
--   "Cheras"          → 'Cheras Kuala Lumpur'  (check administrative_area_level_1 = Selangor vs KL)
--   "Puchong"         → 'Puchong'
--   etc.
--
-- If locality does not match any area in the enum → set area = NULL.
-- Do NOT fall back to the search grid cell name.
-- This is the only reliable way to tag area correctly.
