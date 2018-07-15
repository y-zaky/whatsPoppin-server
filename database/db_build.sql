BEGIN;

DROP TABLE IF EXISTS superheroes cascade;

CREATE TABLE repoTest (
  id SERIAL PRIMARY KEY NOT NULL,
  reponame VARCHAR(200) NOT NULL
);

INSERT INTO repoTest (reponame ) VALUES
  ('testRepo');

COMMIT;
