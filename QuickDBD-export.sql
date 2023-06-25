-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "events" (
    "event_id" VARCHAR(100)   NOT NULL,
    "event_name" VARCHAR(2000)   NOT NULL,
    "venue_id" VARCHAR(2000)   NOT NULL,
    "event_url" VARCHAR(2000)   NOT NULL,
    "image_url" VARCHAR(2000)   NOT NULL,
    "startDate" date ,
    "startTime" time ,
    "genre_id" VARCHAR(2000)   NOT NULL,
    "subgenre_id" VARCHAR(2000)   NOT NULL,
    "min_price" FLOAT , 
    "max_price" FLOAT ,
    CONSTRAINT "pk_events" PRIMARY KEY (
        "event_id"
     )
);

CREATE TABLE "genre" (
    "subgenre_id" VARCHAR(100)   NOT NULL,
    "subgenre" VARCHAR(100)   NOT NULL,
    "genre_id" VARCHAR(100)   NOT NULL,
    "genre_name" VARCHAR(100)   NOT NULL,
    CONSTRAINT "pk_subgenre" PRIMARY KEY (
        "subgenre_id"
     )
);

CREATE TABLE "seatmap" (
    "venue_id" VARCHAR(100)   NOT NULL,
    "SeatMap" VARCHAR(2000)   
);

CREATE TABLE "venues" (
    "venue_id" VARCHAR(100)   NOT NULL,
    "venue_name" VARCHAR(2000)   NOT NULL,
    "postalCode" INTEGER NOT NULL,
    "city" VARCHAR(2000)   NOT NULL,
    "state" VARCHAR(2000)   NOT NULL,
    "address" VARCHAR(2000)   NOT NULL,
    "latitude" FLOAT   NOT NULL,
    "longtitude" FLOAT   NOT NULL,
    CONSTRAINT "pk_venues" PRIMARY KEY (
        "venue_id"
     )
);





ALTER TABLE "events" ADD CONSTRAINT "fk_events_venue_id" FOREIGN KEY("venue_id")
REFERENCES "venues" ("venue_id");

ALTER TABLE "events" ADD CONSTRAINT "fk_events_subgenre_id" FOREIGN KEY("subgenre_id")
REFERENCES "genre" ("subgenre_id");

ALTER TABLE "seatmap" ADD CONSTRAINT "fk_seatmap_venue_id" FOREIGN KEY("venue_id")
REFERENCES "venues" ("venue_id");

