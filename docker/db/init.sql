CREATE TABLE "accounts" (
  "account_id" character(36) NOT NULL,
  "username" character(40) NOT NULL,
  "name" character(80) NOT NULL,
  "password" character(80) NOT NULL,
  PRIMARY KEY ("account_id")
);

ALTER TABLE "accounts"
ADD CONSTRAINT "accounts_username" UNIQUE ("username");

CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
  "sess" json NOT NULL,
  "expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);

ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;
CREATE INDEX "IDX_session_expire" ON "session" ("expire");

CREATE TABLE "characters" (
  "character_id" character(36) NOT NULL,
  "account_id" character(36) NOT NULL,
  "name" character(25) NOT NULL,
  "race" character(25) NOT NULL,
  "description" text NOT NULL,
  "favoredAttribute" character(20) NOT NULL,
  "unfavoredAttribute" character(20) NOT NULL,
  PRIMARY KEY ("character_id")
);

CREATE INDEX "characters_account_id" ON "characters" ("account_id");