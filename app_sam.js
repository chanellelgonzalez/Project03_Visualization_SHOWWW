/*
NEW CHANGES: In all instances with the layer group I added an "Other" layer so events that were caterogized outside of the regular layers can still be displayed.
Those changes are in "layers","map","overlays", "icons", and "eventCount".
----------------------------------------------------------------------------
The style.css file has been updated so make sure we are working with the new one
----------------------------------------------------------------------------
The .html file will have to be updated with the new Awesome Markers Icons:
NOTE: This is funky but it works
 ---------------------------------------------------------------------------
<!-- Awesome Markers Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.css">
  <link rel="stylesheet" href="css/leaflet.awesome-markers.css">
  <script src="js/leaflet.awesome-markers.js"></script>
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.js"></script>
 ---------------------------------------------------------------------------

 Also grab "leaflet.awesome-markers.js" from js and "leaflet.awesome-markers.css" from css
*/

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
    World: new L.LayerGroup(),
    Other: new L.LayerGroup(),
};
// There are 17 layers for the genres

// Create and add the layers to the map
// This is also where we center the map and set the zoom level (right now the view covers Oxnard to San Bernardino going to keep it here)
// note that how we connect to HTML will be through "map-id" I kept it the same as we use in class.
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
    layers.World,
    layers.Other
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
    "World Music": layers.World,
    "Other Genres": layers.Other
  };

// Create a control for our layers, and add our overlays to it. (This allows us to select which layers we want to see)
//Get rid of this when we filter from the dropdown menu
L.control.layers(null, overlays).addTo(map);


// Legends for the map Might not be needed (doesn't look amazing anyway)
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
Initialize a dictionary that contains icons for each layer group. use shape:
"star" for outside shape and icon: "ion-settings" for the inside icon. 
Come back to these later to pick colors but for now just make them all different.
---------------------------------------------------------------------- */

/*------------------------------------------
NEW CHANGES: Delete old icons dictionary and add the stuff below
------------------------------------------*/
//Define colors in a var
var icon_colors = ['red', 'blue', 'green', 'purple', 'orange', 'darkred', 'lightred', 'beige', 'darkblue', 'darkgreen', 'cadetblue', 'darkpurple', 'white', 'pink', 'lightblue', 'lightgreen', 'gray', 'black', 'lightgray'];

let icons = {
    Alternative: L.AwesomeMarkers.icon({
        markerColor: icon_colors[0],
    }),
    Ballads_or_Romantic: L.AwesomeMarkers.icon({
      markerColor: icon_colors[4],
    }),
    Blues: L.AwesomeMarkers.icon({
      markerColor: icon_colors[2],
    }),
    Country: L.AwesomeMarkers.icon({
      markerColor: icon_colors[1],
    }),
    Folk: L.AwesomeMarkers.icon({
      markerColor: icon_colors[3],
    }),
    HipHop_or_Rap: L.AwesomeMarkers.icon({
        markerColor: icon_colors[5],
    }),
    Jazz: L.AwesomeMarkers.icon({
        markerColor: icon_colors[6],
    }),
    Latin: L.AwesomeMarkers.icon({
        markerColor: icon_colors[7],
    }),
    Metal: L.AwesomeMarkers.icon({
        markerColor: icon_colors[8],
    }),
    New_Age: L.AwesomeMarkers.icon({
        markerColor: icon_colors[9],
    }),
    Pop: L.AwesomeMarkers.icon({
        markerColor: icon_colors[10],
    }),
    R_and_B: L.AwesomeMarkers.icon({
        markerColor: icon_colors[11],
    }),
    Reggae: L.AwesomeMarkers.icon({
        markerColor: icon_colors[12],
    }),
    Religious: L.AwesomeMarkers.icon({
        markerColor: icon_colors[13],
    }),
    Rock: L.AwesomeMarkers.icon({
        markerColor: icon_colors[14],
    }),
    World: L.AwesomeMarkers.icon({
        markerColor: icon_colors[15],
    }),
    Other: L.AwesomeMarkers.icon({
        markerColor: icon_colors[16],
    })
  };

/* ----------------------------------------------------------------------
Call the API and set markers on their apropriate genre layer. A lot of the calls
to the API and then to the "event" object are stand ins and will have to be adjusted
---------------------------------------------------------------------- */

// Perform an API call to our API made with flask to get the information endpoint for events.
var url_events = "http://localhost:5000"
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
        console.log("genres success")

        /* ----------------------------------------------------------------------
        NEW CHANGES: The joins below were why we were only getting Alternative genres. Just copy and paste these new ones and they should work.
        ---------------------------------------------------------------------- */
        //Joining the tables "events", "venues"
        var joinedRes = eventRes.map(event => {
            const venue = venueRes.find(venue => venue.venue_id === event.venue_id);
            return {...event, ...venue}
        });
        //Joining the the combined table above with the table "genre"
        var doubleJoinedRes = joinedRes.map(res => {
            const genre = genreRes.find(genre => genre.genre_id === res.genre_id);
            return {...res, ...genre}
        });
        
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
                  // Check to see if this event is Alternative
                if (doubleJoinedRes[i].genre_name == "Alternative") {
                    GenreCode = "Alternative";
                }
                // Check to see if this event is Ballads_or_Romantic
                else if (doubleJoinedRes[i].genre_name == "Ballads_or_Romantic") {
                    GenreCode = "Ballads_or_Romantic";
                }
                // Check to see if this event is Blues
                else if (doubleJoinedRes[i].genre_name == "Blues") {
                    GenreCode = "Blues";
                }
                // Check to see if this event is Country
                else if (doubleJoinedRes[i].genre_name == "Country") {
                    GenreCode = "Country";
                }
                // Check to see if this event is Folk
                else if (doubleJoinedRes[i].genre_name == "Folk") {
                    GenreCode = "Folk";
                }
                // Check to see if this event is HipHop_or_Rap
                else if (doubleJoinedRes[i].genre_name == "HipHop_or_Rap") {
                    GenreCode = "HipHop_or_Rap";
                }
                // Check to see if this event is Jazz
                else if (doubleJoinedRes[i].genre_name == "Jazz") {
                    GenreCode = "Jazz";
                }
                // Check to see if this event is Latin
                else if (doubleJoinedRes[i].genre_name == "Latin") {
                    GenreCode = "Latin";
                }
                // Check to see if this event is Metal
                else if (doubleJoinedRes[i].genre_name == "Metal") {
                    GenreCode = "Metal";
                }
                // Check to see if this event is New_Age
                else if (doubleJoinedRes[i].genre_name == "New_Age") {
                    GenreCode = "New_Age";
                }
                // Check to see if this event is Pop
                else if (doubleJoinedRes[i].genre_name == "Pop") {
                    GenreCode = "Pop";
                }
                // Check to see if this event is R_and_B
                else if (doubleJoinedRes[i].genre_name == "R_and_B") {
                    GenreCode = "R_and_B";
                }
                // Check to see if this event is Reggae
                else if (doubleJoinedRes[i].genre_name == "Reggae") {
                    GenreCode = "Reggae";
                }
                // Check to see if this event is Religious
                else if (doubleJoinedRes[i].genre_name == "Religious") {
                    GenreCode = "Religious";
                }
                // Check to see if this event is Rock
                else if (doubleJoinedRes[i].genre_name == "Rock") {
                    GenreCode = "Rock";
                }
                // Check to see if this event is World
                else if (doubleJoinedRes[i].genre_name == "World") {
                    GenreCode = "World";
                }
                // Otherwise there is either no genre or the genre is outside of our list so put it in other
                else {
                    GenreCode = "Other";
                }

                //GenreCode = doubleJoinedRes[i].genre_name
        
                /* -------------------------------------------------------
                Create the marker for i
                ------------------------------------------------------- */
                // Update the event count.
                eventCount[GenreCode]++;
                // Create a new marker with the appropriate icon and coordinates.
                let newMarker = L.marker([doubleJoinedRes[i].latitude, doubleJoinedRes[i].longtitude], {
                icon: icons[GenreCode]
                });

                // Add the new marker to the appropriate layer.
                newMarker.addTo(layers[GenreCode]);

                /*-------------------------------------------------------
                NEW CHANGES: Everything below this is new: 
                1st: markerData saves the current marker data into the options of newMarker
                2nd: The popup now works. It is fairly messy but it should show [event_name, event_url, venue_name, event_date]
                -------------------------------------------------------*/
                // Save info about the marker within itself so it can be pulled to the console when clicked on (Here is where you would want to decide what gets sent to the other dashboard objects).
                let markerData = doubleJoinedRes[i]
                newMarker.options.markerData = markerData;

                // Bind a popup to the marker that will  display on being clicked. This will be rendered as HTML.
                newMarker.bindPopup("<b>" + doubleJoinedRes[i].event_name + "</b><br> Event: <a href =" + doubleJoinedRes[i].event_url + " target=_blank" + ">" + "More info </a><br>Venue: " + doubleJoinedRes[i].venue_name  + "<br> Event Date: " + doubleJoinedRes[i].event_date + " <br> ");
                
                /*###################################################
                NEW CHANGES: IMPORTANT FOR SENDING INFO ABOUT THE SELECTED MARKER TO THE OTHER OBJECTS IN THE DASHBOARD
                ###################################################*/
                // on click we access the stored info about the marker.
                newMarker.on('click', function (info) {
                    // Retrieve the data associated with the marker. (This will be in a dictionary of dictionaries)
                    var oneMarkerData = newMarker.options.markerData;
                    // make a log of the data being stored every time you click a marker. (So we can see if it is pulling the correct info)
                    console.log(oneMarkerData);
                    // Do something with the data? I don't know what info and how to have other dashboard objects access it.
                    
                  });
        }
        
        // NEW CHANGES: For the legend to work we update the count everytime
        // Call the updateLegend function, which will update the legend! 
        updateLegend(eventCount);
    });
  });
});

/*---------------------------------------------------------------
NEW CHANGES: This function will create the html for the legend to the map!!
---------------------------------------------------------------*/
// Update the legend's innerHTML with the last updated time and station count.
function updateLegend(eventCount) {
    document.querySelector(".legend").innerHTML = [
      "<p class='Alternative'>Alternative: " + eventCount.Alternative + "</p>",
      "<p class='Ballads_or_Romantic'>Ballads_or_Romantic: " + eventCount.Ballads_or_Romantic + "</p>",
      "<p class='Blues'>Blues: " + eventCount.Blues + "</p>",
      "<p class='Country'>Country: " + eventCount.Country + "</p>",
      "<p class='Folk'>Folk: " + eventCount.Folk + "</p>",
      "<p class='HipHop_or_Rap'>HipHop_or_Rap: " + eventCount.HipHop_or_Rap + "</p>",
      "<p class='Jazz'>Jazz: " + eventCount.Jazz + "</p>",
      "<p class='Latin'>Latin: " + eventCount.Latin + "</p>",
      "<p class='Metal'>Metal: " + eventCount.Metal + "</p>",
      "<p class='New_Age'>New_Age: " + eventCount.New_Age + "</p>",
      "<p class='Pop'>Pop: " + eventCount.Pop + "</p>",
      "<p class='R_and_B'>R_and_B: " + eventCount.R_and_B + "</p>",
      "<p class='Reggae'>Reggae: " + eventCount.Reggae + "</p>",
      "<p class='Religious'>Religious: " + eventCount.Religious + "</p>",
      "<p class='Rock'>Rock: " + eventCount.Rock + "</p>",
      "<p class='World'>World: " + eventCount.World + "</p>",
      "<p class='Other'>Other: " + eventCount.Other + "</p>"
    ].join("");
  }
