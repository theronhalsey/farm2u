$(document).ready(function () {

    let farmersMarkets = [];
    var farmList;
    var farmId;
    var address;
    var googleLink;
    var products;
    var schedule;
    $("#prod_search").on("click", function (event) {
        event.preventDefault();

        var prodSearch = {
            zip: $("#zip").val().trim(),
            prod_type: $("#prod_type").val().trim()
        };
        //search for farmers markets using zipcode       
        zip = prodSearch.zip;

        $("<div class='line1'></div>").appendTo("results");
        $("<h3>" + "List of farms near your location:" + "<h3>").appendTo("#searchTitle");

        $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + zip,
            dataType: 'jsonp'
        }).then(function (response) {
            // console.log(response);
            var results;
            for (var key in response) {
                results = response[key];
                for (var i = 0; i < results.length; i++) {
                    var result = results[i];
                    for (var key in result) {
                        if (i == 0) {}
                    }
                }
            }
            for (var i = 0; i < results.length; i++) {

                 farmId = results[i].id;
                 farmName = results[i].marketname;

                 // take this line and pass it as an argument to get details
                $("<br>" + "<li>" + "Farm ID:" + farmId + "<br>" + "Farm Name:" + farmName + "<br>" + "<div id='more'> </div>" + "<br>" + "</li>").appendTo("#farmDisplay"); 
                
                // add a second argument here, like: 
                 getDetails(farmId, farmInfoString);
         getDetails(farmId);
                // console.log(farmList);
            }
        });
    });


    // expect a second argument farmInfoString
    function getDetails(farmId) {

        $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + farmId,
            dataType: 'jsonp',
            // jsonpCallback: 'detailResultHandler'
        }).then(function (response) {
            // console.log(response);
            var marketdetail;
            for (var key in response) {
                marketdetail = response[key];
                for (var i = 0; i < marketdetail.length; i++) {
                    marketdetail = marketdetail[i];
                    for (var key in marketdetail) {
                        if (i == 0) {}
                    }
                }
            }
            // console.log(marketdetail);

            // console.log(marketdetail);
             address = marketdetail.Address;
             googleLink = marketdetail.GoogleLink;
             products = marketdetail.Products;
             schedule = marketdetail.Schedule;
            // console.log(address);
            // console.log(googleLink);
            // console.log(products);
            // console.log(schedule);
            // console.log(googleLink);
            
            // append farmInfo string to the DOM
          $("<br>" + "Address:" + "<br>" + address + "<br>" + "Google Link" + "<br>"  + googleLink + "<br>" + "Products:" + products + "<br>" + "Schedule:" + schedule).appendTo("#more");

        });

    }
    // end of (document).ready
});
//iterate through the JSON result object.
// function detailResultHandler(detailresults) {
//     console.log("DETAIL RESULTS: " + detailresults)
//     for (var key in detailresults) {
//         alert(key);
//         var results = detailresults[key];
//         alert(results['GoogleLink']);

//     }
// }
// getDetails(myid);
// console.log(zip);
// $.ajax({
//     type: "GET",
//     contentType: "application/json; charset=utf-8",
//     url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + zip,
//     dataType: 'jsonp'
// }).then(
//     function (response) {
//         console.log(response);
//          var results;
//           for (var key in response) {
//             results = response[key];
//             for (var i = 0; i < results.length; i++) {
//                 var result = results[i];
//                 for (var key in result) {
//                     if (i == 0) {
//                     }
//                 }
//             }
//         }
//         $("<div class='line1'></div>").appendTo("");
//         $("<h3>" + "List of farms near your location:" + "<h3>").appendTo("#searchTitle");
//         for (var i = 0; i < results.length; i++) {
//         var farmId = results[i].id;
//         var farmName = results[i].marketname;
//         // console.log(farmId);
//         // console.log(farmName);
//             farmList +=$( "<br>" + "<li>" + "Farm ID:" +  farmId + "<br>"+ "Farm Name:"+ farmName+ "<br>"+  "</li>").appendTo("#farmDisplay");
//         }

//     });




// console.log(prodSearch);
//             //Send the GET request.
//             $.ajax("/api/prod_search", {
//                 type: "GET",
//                 data: prodSearch


//             }).then(
//                 function (response) {
//                     // console.log(farmersMarkets);

//                     // console.log("created new quote");
//                     // console.log(response.id);
//                     // Reload the page to get the updated list
//                     //location.reload();
//                 }
//             );

//         });

// });