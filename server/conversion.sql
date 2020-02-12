DROP DATABASE IF EXISTS calc_conversion;
DROP TABLE IF EXISTS conversion.length;
DROP SCHEMA IF EXISTS conversion CASCADE;

CREATE DATABASE calc_conversion;
CREATE SCHEMA conversion;
SET  search_path TO conversion, public;

DO
$$
  BEGIN
    CREATE ROLE user0 LOGIN  CREATEDB ;
    EXCEPTION WHEN DUPLICATE_OBJECT THEN
    RAISE NOTICE 'username user0 already exists';
  END
$$;

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

ALTER DATABASE calc_conversion OWNER TO user0;
ALTER TABLE conversion.length OWNER TO user0;
ALTER SCHEMA conversion OWNER TO user0;


INSERT INTO conversion.length (type, mm, m, cm, km, um, nm, mile, yard, foot, inch, naut_mile)
VALUES ('mm',1, 1e3, 1e-1, 1e-6, 1e3, 1e6, 6.2137e-7, 0.00109361, 0.00328084, 0.0393701, 5.3996e-7 );