BEGIN;

DROP TABLE IF EXISTS superheroes cascade;

CREATE TABLE repos (
  id SERIAL,
  reponame VARCHAR(200) NOT NULL
);

INSERT INTO repoTest (reponame ) VALUES
  ('testRepo');

COMMIT;
