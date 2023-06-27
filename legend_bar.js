
/* access in html using:
---------------------------------
add test.css to our main style css
---------------------------------

<div id="chart-container"></div>
<script src="https://fastly.jsdelivr.net/npm/echarts@5.4.2/dist/echarts.min.js"></script>
  
<script type="text/javascript" src="legend_bar.js"></script>

*/

/*
This pulls the data from the API but we already do that with the map section of our java script. Is there anyway we can access that data easily?
*/
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
                // Update the event count.
                eventCount[GenreCode]++;
        }
        //IMPORTANT!!!!
        //Call the function here so we can access the data (will have to do the same when we put this within our html file)
        makeBar(eventCount);
    });
  });
});

/* -------------------------------
Barchart to act as a legend.
------------------------------- */
//
function makeBar(eventCount) {
    console.log(eventCount)
    var dom = document.getElementById('chart-container');
    var myChart = echarts.init(dom, {
    renderer: 'canvas',
    useDirtyRect: false
    });

    var option;

    option = {
    
    xAxis: {
        type: 'category',
        data: ['Alt', 'Ballads','Blues', 'Country', 'Folk', 'HipHop', 'Jazz', 'Latin','Metal','New_Age',
                'Pop','R&B','Reggae','Religious','Rock','World','Other'],
        nameTextStyle: {
            fontSize: 2
          },
          boundaryGap: true
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [{
                    value: eventCount.Alternative ,
                    itemStyle: {
                      color: '#a0353a'
                    }
                  },
                  {
                    value: eventCount.Ballads_or_Romantic,
                    itemStyle: {
                      color: '#f7b32c'
                    }
                  },
                  {
                    value: eventCount.Blues,
                    itemStyle: {
                      color: '#1b904f'
                    }
                  },
                  {
                    value: eventCount.Country,
                    itemStyle: {
                      color: '#007dff'
                    }
                  },
                  {
                    value: eventCount.Folk,
                    itemStyle: {
                      color: '#ae00ff'
                    }
                  },
                  {
                    value: eventCount.HipHop_or_Rap,
                    itemStyle: {
                      color: '#8d0000'
                    }
                  },
                  {
                    value: eventCount.Jazz,
                    itemStyle: {
                      color: '#f64747'
                    }
                  },
                  {
                    value: eventCount.Latin,
                    itemStyle: {
                      color: '#e4dca7'
                    }
                  },
                  {
                    value: eventCount.Metal,
                    itemStyle: {
                      color: '#003874'
                    }
                  },
                  {
                    value: eventCount.New_Age,
                    itemStyle: {
                      color: '#096900'
                    }
                  },
                  {
                    value: eventCount.Pop,
                    itemStyle: {
                      color: '#2e4b4c'
                    }
                  },
                  {
                    value: eventCount.R_and_B,
                    itemStyle: {
                      color: '#5f0138'
                    }
                  },
                  {
                    value: eventCount.Reggae,
                    itemStyle: {
                      color: '#acacac'
                    }
                  },
                  {
                    value: eventCount.Religious,
                    itemStyle: {
                      color: '#fe50d6'
                    }
                  },
                  {
                    value: eventCount.Rock,
                    itemStyle: {
                      color: '#5ca8f9'
                    }
                  },
                  {
                    value: eventCount.World,
                    itemStyle: {
                      color: '#45e400'
                    }
                  },
                  {
                    value: eventCount.Other,
                    itemStyle: {
                      color: '#444444'
                    }
                  }],
            type: 'bar',
        showBackground: true,
        }
    ]
    };
    console.log(option)

    if (option && typeof option === 'object') {
    myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
}