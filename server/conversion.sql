DROP DATABASE IF EXISTS calc_conversion;
DROP TABLE IF EXISTS conversion.length;
DROP TABLE IF EXISTS conversion.area;
DROP TABLE IF EXISTS conversion.mass;


DROP SCHEMA IF EXISTS conversion CASCADE;
CREATE DATABASE calc_conversion;
CREATE SCHEMA conversion;

DO
$$
  BEGIN
    CREATE ROLE user0 LOGIN  CREATEDB ;
    EXCEPTION WHEN DUPLICATE_OBJECT THEN
    RAISE NOTICE 'username user0 already exists';
  END
$$;

ALTER DATABASE calc_conversion OWNER TO user0;
ALTER TABLE conversion.length OWNER TO user0;
ALTER TABLE conversion.area OWNER TO user0;
ALTER TABLE conversion.mass OWNER TO user0;

ALTER SCHEMA conversion OWNER TO user0;

CREATE TABLE conversion.length (
  type text,
  mm float,
  m float,
  cm float,
  km float,
  um float,
  nm float,
  mile float,
  yard float,
  foot float,
  inch float,
  naut_mile float
);
INSERT INTO conversion.length (type, m, mm, cm, km, um, nm, mile, yard, foot, inch, naut_mile)
VALUES ('m',1, 1e3, 1e2, 1e-3, 1e6, 1e9, 62e-5, 1.09361, 3.28 , 39.4, 54e-5);


CREATE TABLE conversion.area (
  type text,
  sq_m float,
  sq_k float,
  sq_y float,
  sq_ft float,
  sq_inch float,
  hectare float,
  acre float
);

INSERT INTO conversion.area (type, sq_m, sq_k, sq_y, sq_ft, sq_inch, hectare, acre)
VALUES ('sq_m', 1, 1e-6, 1.12, 10.77, 1550, 1e-4, 0.000247105);

CREATE TABLE conversion.mass (
  type text,
  gram float,
  kgram float,
  mgram float,
  ugram float,
  imperial_ton float,
  metric_ton float,
  us_ton float,
  stone float,
  pound float,
  ounce float
);

INSERT INTO conversion.mass (type, gram, kgram, mgram, ugram, imperial_ton, metric_ton, us_ton, stone, pound, ounce)
VALUES ('gram', 1, 1e-3, 1e3, 1e6, 9.8e-7, 1e-6, 1.1e-6, 157e-6, 22e-4,  35274e-6);