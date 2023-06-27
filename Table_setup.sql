
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
    "genre_id" VARCHAR(100)   NOT NULL,
    "genre_name" VARCHAR(100)   NOT NULL,
    CONSTRAINT "pk_genre" PRIMARY KEY (
        "genre_id"
     )
);

CREATE TABLE "subgenre" (
    "subgenre_id" VARCHAR(100)   NOT NULL,
    "subgenre_name" VARCHAR(100)   NOT NULL,
    "genre_id" VARCHAR(100)   NOT NULL,
    CONSTRAINT "pk_subgenre_id" PRIMARY KEY (
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

CREATE TABLE "genre_price_average" (
    "genre_id" VARCHAR(100)   NOT NULL,
    "max_price" FLOAT,
    "min_price" FLOAT
);

ALTER TABLE "events" ADD CONSTRAINT "fk_events_venue_id" FOREIGN KEY("venue_id")
REFERENCES "venues" ("venue_id");

ALTER TABLE "events" ADD CONSTRAINT "fk_events_genre_id" FOREIGN KEY("genre_id")
REFERENCES "genre" ("genre_id");

ALTER TABLE "events" ADD CONSTRAINT "fk_events_subgenre_id" FOREIGN KEY("subgenre_id")
REFERENCES "subgenre" ("subgenre_id");

ALTER TABLE "seatmap" ADD CONSTRAINT "fk_seatmap_venue_id" FOREIGN KEY("venue_id")
REFERENCES "venues" ("venue_id");

ALTER TABLE "genre_price_average" ADD CONSTRAINT "fk_genre_price_average_genre_id" FOREIGN KEY("genre_id")
REFERENCES "genre" ("genre_id");
