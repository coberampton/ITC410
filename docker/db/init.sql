CREATE TABLE "accounts" (
  "account_id" varchar(36) NOT NULL,
  "username" varchar(40) NOT NULL,
  "name" varchar(80) NOT NULL,
  "password" varchar(80) NOT NULL,
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
  "character_id" varchar(36) NOT NULL,
  "account_id" varchar(36) NOT NULL,
  "name" varchar(25) NOT NULL,
  "race" varchar(25) NOT NULL,
  "description" text NOT NULL,
  "favoredattribute" varchar(20) NOT NULL,
  "unfavoredattribute" varchar(20) NOT NULL,
  PRIMARY KEY ("character_id")
);

CREATE INDEX "characters_account_id" ON "characters" ("account_id");