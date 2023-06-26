
// Create the tile layer with leaflet (If there is more time look into how to change the visual representation of the map)
let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});


// Initialize all the LayerGroups (i.e. genre groups)
// Note there are a few genres that are unlikley to have any events and I have determined should be skipped such as:
// Chanson Francaise, Children's Music,Holiday,Medieval/Renaissance, Other, Undefined.
let layers = {
    Alternative: new L.LayerGroup(),
    Ballads_or_Romantic: new L.LayerGroup(),
    Blues: new L.LayerGroup(),
    Country: new L.LayerGroup(),
    Folk: new L.LayerGroup(),
    HipHop_or_Rap: new L.LayerGroup(),
    Jazz: new L.LayerGroup(),
    Latin: new L.LayerGroup(),
    Metal: new L.LayerGroup(),
    New_Age: new L.LayerGroup(),
    Pop: new L.LayerGroup(),
    R_and_B: new L.LayerGroup(),
    Religious: new L.LayerGroup(),
    Rock: new L.LayerGroup(),
    Reggae: new L.LayerGroup(),
    World: new L.LayerGroup()
};
// There are 16 layers for the genres

// Create and add the layers to the map
// This is also where we center the map and set the zoom level (right now the view covers Oxnard to San Bernardino going to keep it here)
// note that how we connect to HTML will be through "map-id" I kept it the same as we use in class.

// This needs to be told the lon and lan of the postal code entered by the user
let mapCenter = []

let map = L.map("map-id", {
    center: [34.0522, -118.2437],
    zoom: 10,
    layers: [
    layers.Alternative,
    layers.Ballads_or_Romantic,
    layers.Blues,
    layers.Country,
    layers.Folk,
    layers.HipHop_or_Rap,
    layers.Jazz,
    layers.Latin,
    layers.Metal,
    layers.New_Age,
    layers.Pop,
    layers.R_and_B,
    layers.Reggae,
    layers.Religious,
    layers.Rock,
    layers.World
    ]
});

// Add our "streetmap" tile layer to the map.
streetmap.addTo(map);


/*----------------------------------------------------------------------
Over lapping Marker Spiderfier code
----------------------------------------------------------------------*/ 

// Create a layer for the Over lapping Marker Spiderfier
// This allows the user to click on overlapping markers and it spreads them out
// var oms = new OverlappingMarkerSpiderfier(map);



// Create an overlays object to add to the layer control.
let overlays = {
    "Alternative Music": layers.Alternative,
    "Ballads/Romantic Music": layers.Ballads_or_Romantic,
    "Blues Music": layers.Blues,
    "Country Music": layers.Country,
    "Folk Music": layers.Folk,
    "HipHop/Rap Music": layers.HipHop_or_Rap,
    "Jazz Music": layers.Jazz,
    "Latin Music": layers.Latin,
    "Metal Music": layers.Metal,
    "New_Age Music": layers.New_Age,
    "Pop Music": layers.Pop,
    "R&B Music": layers.R_and_B,
    "Reggae Music": layers.Reggae,
    "Religious Music": layers.Religious,
    "Rock Music": layers.Rock,
    "World Music": layers.World
  };

// Create a control for our layers, and add our overlays to it. (This allows us to select which layers we want to see)
L.control.layers(null, overlays).addTo(map);

// Legends for the map
//-------------------------
// Create a legend to display information about our map.
let info = L.control({
    position: "bottomright"
  });

// When the layer control is added, insert a div with the class of "legend".
info.onAdd = function() {
    let div = L.DomUtil.create("div", "legend");
    return div;
  };
  // Add the info legend to the map.
  info.addTo(map);
//-------------------------



/* ----------------------------------------------------------------------
Initialize an object that contains icons for each layer group. use shape:
"star" for outside shape and icon: "ion-settings" for the inside icon. 
Come back to these later to pick colors but for now just make them all different.
---------------------------------------------------------------------- */

let icons = {
    Alternative: L.ExtraMarkers.icon({
      icon: "ion-android-bicycle",
      iconColor: "red",
      markerColor: "pink",
      shape: "star"
    }),
    Ballads_or_Romantic: L.ExtraMarkers.icon({
      icon: "ion-android-bicycle",
      iconColor: "blue",
      markerColor: "red",
      shape: "circle"
    }),
    Blues: L.ExtraMarkers.icon({
      icon: "ion-minus-circled",
      iconColor: "white",
      markerColor: "blue-dark",
      shape: "penta"
    }),
    Country: L.ExtraMarkers.icon({
      icon: "ion-android-bicycle",
      iconColor: "white",
      markerColor: "orange",
      shape: "circle"
    }),
    Folk: L.ExtraMarkers.icon({
      icon: "ion-android-bicycle",
      iconColor: "white",
      markerColor: "green",
      shape: "circle"
    }),
    HipHop_or_Rap: L.ExtraMarkers.icon({
        icon: "ion-android-bicycle",
        iconColor: "white",
        markerColor: "yellow",
        shape: "circle"
    }),
    Jazz: L.ExtraMarkers.icon({
        icon: "ion-android-bicycle",
        iconColor: "white",
        markerColor: "grey",
        shape: "circle"
    }),
    Latin: L.ExtraMarkers.icon({
        icon: "ion-android-bicycle",
        iconColor: "white",
        markerColor: "blue",
        shape: "circle"
    }),
    Metal: L.ExtraMarkers.icon({
        icon: "ion-android-bicycle",
        iconColor: "white",
        markerColor: "black",
        shape: "circle"
    }),
    New_Age: L.ExtraMarkers.icon({
        icon: "ion-android-bicycle",
        iconColor: "white",
        markerColor: "purple",
        shape: "circle"
    }),
    Pop: L.ExtraMarkers.icon({
        icon: "ion-android-bicycle",
        iconColor: "white",
        markerColor: "white",
        shape: "circle"
    }),
    R_and_B: L.ExtraMarkers.icon({
        icon: "ion-android-bicycle",
        iconColor: "white",
        markerColor: "cyan",
        shape: "circle"
    }),
    Reggae: L.ExtraMarkers.icon({
        icon: "ion-android-bicycle",
        iconColor: "white",
        markerColor: "violet",
        shape: "circle"
    }),
    Religious: L.ExtraMarkers.icon({
        icon: "ion-android-bicycle",
        iconColor: "white",
        markerColor: "green-dark",
        shape: "circle"
    }),
    Rock: L.ExtraMarkers.icon({
        icon: "ion-android-bicycle",
        iconColor: "white",
        markerColor: "green-light",
        shape: "circle"
    }),
    World: L.ExtraMarkers.icon({
        icon: "ion-android-bicycle",
        iconColor: "white",
        markerColor: "orange-dark",
        shape: "circle"
    })
  };


  /* ----------------------------------------------------------------------
Call the API and set markers on their apropriate layer. A lot of the calls
to the API and then to the "event" object are stand ins and will have to be adjusted
---------------------------------------------------------------------- */

// Perform an API call to our API made with flask to get the information endpoint for events.
var url_events = "http://localhost:5000/index"
var url_venues = "http://localhost:5000/venues"
var url_genres = "http://localhost:5000/genres"


d3.json(url_events).then(function(eventRes) {
    console.log("eventres success")
  // When the first API call completes, perform another call to the endpoint for venue.
  d3.json(url_venues).then(function(venueRes) {
    console.log("venueres success")
    
    d3.json(url_genres).then(function(genreRes) {
        // Note due to there being multiple tables in our SQL database (events,venue,seatmap, and genre) depending on how we setup our API there may need to be extra calls that we then combine.
        //Create variables to pull the information from the api (this is sample text for now. It depends on how we set up in the JSON)
        console.log("genreres success")

        var joinedRes = eventRes.map(event => {
            const venue = venueRes.find(venue => venue.venue_id === event.venue_id);
            return {...event, ...venue}
        });

        var doubleJoinedRes = joinedRes.map(res => {
            const genre = genreRes.find(genre => genre.genre_id === genre.genre_id);
            return {...res, ...genre}
        });

        // doubleJoinedRes = JSON.stringify(doubleJoinedRes)

        // console.log(doubleJoinedRes)
        
        // Create an object to keep the number of markers in each layer.
        let eventCount = {
            Alternative: 0,
            Ballads_or_Romantic: 0,
            Blues: 0,
            Country: 0,
            Folk: 0,
            HipHop_or_Rap: 0,
            Jazz: 0,
            Latin: 0,
            Metal: 0,
            New_Age: 0,
            Pop: 0,
            R_and_B: 0,
            Reggae: 0,
            Religious: 0,
            Rock: 0,
            World: 0,
            Other: 0
        };

        // Initialize GenreCode, which will be used as a key to access the appropriate layers, icons, and event count for the layer group.
        let GenreCode;

        // Loop through the events.
        for (let i = 0; i < doubleJoinedRes.length; i++) {
                console.log(doubleJoinedRes[i])
                  // Check to see if this event is Alternative
                if (doubleJoinedRes[i].genre_name == "Alternative") {
                    GenreCode = "Alternative";
                    console.log("alt")
                }
                // Check to see if this event is Ballads_or_Romantic
                else if (doubleJoinedRes[i].genre_name == "Ballads_or_Romantic") {
                    GenreCode = "Ballads_or_Romantic";
                    console.log("bor")

                }
                // Check to see if this event is Blues
                else if (doubleJoinedRes[i].genre_name == "Blues") {
                    GenreCode = "Blues";
                    console.log("blu")

                }
                // Check to see if this event is Country
                else if (doubleJoinedRes[i].genre_name == "Country") {
                    GenreCode = "Country";
                    console.log("cou")

                }
                // Check to see if this event is Folk
                else if (doubleJoinedRes[i].genre_name == "Folk") {
                    GenreCode = "Folk";
                    console.log("folk")

                }
                // Check to see if this event is HipHop_or_Rap
                else if (doubleJoinedRes[i].genre_name == "HipHop_or_Rap") {
                    GenreCode = "HipHop_or_Rap";
                    console.log("hhr")

                }
                // Check to see if this event is Jazz
                else if (doubleJoinedRes[i].genre_name == "Jazz") {
                    GenreCode = "Jazz";
                    console.log("jaz")

                }
                // Check to see if this event is Latin
                else if (doubleJoinedRes[i].genre_name == "Latin") {
                    GenreCode = "Latin";
                    console.log("lat")

                }
                // Check to see if this event is Metal
                else if (doubleJoinedRes[i].genre_name == "Metal") {
                    GenreCode = "Metal";
                    console.log("met")

                }
                // Check to see if this event is New_Age
                else if (doubleJoinedRes[i].genre_name == "New_Age") {
                    GenreCode = "New_Age";
                    console.log("nage")

                }
                // Check to see if this event is Pop
                else if (doubleJoinedRes[i].genre_name == "Pop") {
                    GenreCode = "Pop";
                    console.log("pop")

                }
                // Check to see if this event is R_and_B
                else if (doubleJoinedRes[i].genre_name == "R_and_B") {
                    GenreCode = "R_and_B";
                    console.log("rb")

                }
                // Check to see if this event is Reggae
                else if (doubleJoinedRes[i].genre_name == "Reggae") {
                    GenreCode = "Reggae";
                    console.log("reg")

                }
                // Check to see if this event is Religious
                else if (doubleJoinedRes[i].genre_name == "Religious") {
                    GenreCode = "Religious";
                    console.log("rel")

                }
                // Check to see if this event is Rock
                else if (doubleJoinedRes[i].genre_name == "Rock") {
                    GenreCode = "Rock";
                    console.log("rock")

                }
                // Check to see if this event is World
                else if (doubleJoinedRes[i].genre_name == "World") {
                    GenreCode = "World";
                    console.log("world")

                }
                // Otherwise there is either no genre or the genre is outside of our list so put it in other (this will not be shown on the map due to clutter)
                else {
                    GenreCode = "Other";
                    console.log("other")
                }

                // GenreCode = doubleJoinedRes[i].genre_name
        
                // Update the station count.
                eventCount[GenreCode]++;
                // Create a new marker with the appropriate icon and coordinates.
                let newMarker = L.marker([doubleJoinedRes[i].latitude, doubleJoinedRes[i].longtitude], {
                icon: icons[GenreCode]
                });
        
            
                // Add the new marker to the appropriate layer.
                newMarker.addTo(layers[GenreCode]);
        
                // Bind a popup to the marker that will  display on being clicked. This will be rendered as HTML.
                //newMarker.bindPopup(doubleJoinedRes[i].event_name + "<br> More Info: " + doubleJoinedRes[i].url + "<br>Venue: " + doubleJoinedRes[i].venue_name  + "<br> Event Date: " + doubleJoinedRes[i].date + " <br> ");
                }    
    });
  });
});

var sample_event1 = 
    {
        "name": "Day Trip Festival Long Beach",
        "type": "event",
        "id": "vvG1iZ9Pm9OvzQ",
        "test": false,
        "url": "https://on.fgtix.com/trk/R4TZ",
        "locale": "en-us",
        "lat": 34.0522,
        "lon": -118.2437,
        
        "dates": {
            "start": {
                "localDate": "2023-06-24",
                "dateTBD": false,
                "dateTBA": false,
                "timeTBA": false,
                "noSpecificTime": true
            },
            "end": {
                "localDate": "2023-06-25",
                "approximate": false,
                "noSpecificTime": true
            },
            "timezone": "America/Los_Angeles",
            "status": {
                "code": "offsale"
            },
            "spanMultipleDays": false
        },
        "classifications": [
            {
                "primary": true,
                "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                },
                "genre": {
                    "id": "KnvZfZ7vAe6",
                    "name": "Undefined"
                },
                "subGenre": {
                    "id": "KZazBEonSMnZfZ7v6JI",
                    "name": "Undefined"
                },
                "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                },
                "subType": {
                    "id": "KZFzBErXgnZfZ7vA6E",
                    "name": "Festival"
                },
                "family": false
            }
        ],

        "_links": {
            "self": {
                "href": "/discovery/v2/events/vvG1iZ9Pm9OvzQ?locale=en-us"
            },
            "attractions": [
                {
                    "href": "/discovery/v2/attractions/K8vZ917hu-f?locale=en-us"
                }
            ],
            "venues": [
                {
                    "href": "/discovery/v2/venues/KovZ917AihI?locale=en-us"
                }
            ]
        }
    }
        





var marker = L.marker([sample_event1.lat, sample_event1.lon]).addTo(map);
marker.bindPopup(sample_event1.name 
                + "<br><a href =" + sample_event1.url + " target=_blank" + ">" + "More info </a>" 
                + "<br>Venue: "  + sample_event1.dates.start.localDate  
                + "<br> Event Date: " + sample_event1.dates.start.localDate  + " <br> ");


// Update the legend's innerHTML with the last updated time and station count.
function updateLegend(time, eventCount) {
    document.querySelector(".legend").innerHTML = [
      "<p>Updated: " + moment.unix(time).format("h:mm:ss A") + "</p>",
      "<p class='alternative'>Alternative music: " + eventCount.Alternative + "</p>",
      "<p class='ballads/romantic'>Ballads_or_Romantic music: " + eventCount.Ballads_or_Romantic + "</p>",
      "<p class='blues'>Blues music: " + eventCount.Blues + "</p>",
      "<p class='country'>Country music: " + eventCount.Country + "</p>",
      "<p class='folk'>Folk music: " + eventCount.Folk + "</p>",
      "<p class='hipHop/rap'>HipHop_or_Rap music: " + eventCount.HipHop_or_Rap + "</p>",
      "<p class='jazz'>Jazz music: " + eventCount.Jazz + "</p>",
      "<p class='latin'>Latin music: " + eventCount.Latin + "</p>",
      "<p class='metal'>Metal music: " + eventCount.Metal + "</p>",
      "<p class='new-age'>New_Age music: " + eventCount.New_Age + "</p>",
      "<p class='pop'>Pop music: " + eventCount.Pop + "</p>",
      "<p class='r&b'>R_and_B music: " + eventCount.R_and_B + "</p>",
      "<p class='reggae'>Reggae music: " + eventCount.Reggae + "</p>",
      "<p class='religious'>Religious music: " + eventCount.Religious + "</p>",
      "<p class='rock'>Rock music: " + eventCount.Rock + "</p>"
    ].join("");
  }



