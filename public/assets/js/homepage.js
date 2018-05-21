$(document).ready(function () {
    console.log("hi!!");

    let farmersMarkets = [];

    $("#prod_search").on("click", function (event) {
        event.preventDefault();

        var prodSearch = {
            zip: $("#zip").val().trim(),
            prod_type: $("#prod_type").val().trim()
        };
//search for farmers markets        
        zip = prodSearch.zip;
        console.log(zip);
        $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + zip,
            dataType: 'jsonp'
        }).then(
            function (response) {
                for (var key in response) {
                    var results = response[key];
                    for (var i = 0; i < results.length; i++) {
                        var result = results[i];
                        for (var key in result) {
                            if (i == 0) {
                            }
                        }
                    }
                }
                farmersMarkets = results
                console.log(farmersMarkets)
            });
        console.log(prodSearch);
//Send the GET request.
        $.ajax("/api/prod_search", {
            type: "GET",
            data: prodSearch


        }).then(
            function (response) {
                console.log(response);

                console.log("created new quote");
                // Reload the page to get the updated list
                //location.reload();
            }
        );

    });

})