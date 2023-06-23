-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "events" (
    "event_id" VARCHAR(100)   NOT NULL,
    "event_name" VARCHAR(2000)   NOT NULL,
    "venue_id" VARCHAR(2000)   NOT NULL,
    "event_url" VARCHAR(2000)   NOT NULL,
    "image_url" VARCHAR(2000)   NOT NULL,
    "startDate" date   NOT NULL,
    "localTime" date   NOT NULL,
    "genre_id" VARCHAR(2000)   NOT NULL,
    "subgenre_id" VARCHAR(2000)   NOT NULL,
    "min_price" NUMERIC(5,2)   NOT NULL,
    "max_price" NUMERIC(5,2)   NOT NULL,
    CONSTRAINT "pk_events" PRIMARY KEY (
        "event_id"
     )
);

CREATE TABLE "genre" (
    "genre" VARCHAR(100)   NOT NULL,
    "genre_id" VARCHAR(100)   NOT NULL,
    "subgenre" VARCHAR(100)   NOT NULL,
    "subgenre_id" VARCHAR(100)   NOT NULL,
    CONSTRAINT "pk_genre" PRIMARY KEY (
        "genre_id"
     )
);

CREATE TABLE "seatmap" (
    "venue_id" VARCHAR(100)   NOT NULL,
    "SeatMap" VARCHAR(2000)   NOT NULL
);

CREATE TABLE "venues" (
    "venue_id" VARCHAR(100)   NOT NULL,
    "venue_name" VARCHAR(2000)   NOT NULL,
    "postalCode" int   NOT NULL,
    "city" VARCHAR(2000)   NOT NULL,
    "state" VARCHAR(2000)   NOT NULL,
    "address" VARCHAR(2000)   NOT NULL,
    "latitude" NUMERIC(5,2)   NOT NULL,
    "longtitude" NUMERIC(5,2)   NOT NULL,
    CONSTRAINT "pk_venues" PRIMARY KEY (
        "venue_id"
     )
);

ALTER TABLE "events" ADD CONSTRAINT "fk_events_venue_id" FOREIGN KEY("venue_id")
REFERENCES "venues" ("venue_id");

ALTER TABLE "events" ADD CONSTRAINT "fk_events_genre_id" FOREIGN KEY("genre_id")
REFERENCES "genre" ("genre_id");

ALTER TABLE "seatmap" ADD CONSTRAINT "fk_seatmap_venue_id" FOREIGN KEY("venue_id")
REFERENCES "venues" ("venue_id");

