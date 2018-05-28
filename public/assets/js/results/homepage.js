$(document).ready(function () {

    $.getScript("assets/js/results/apiCalls.js", function (data) {

        var farmList;
        var farmId;
        var address;
        var googleLink;
        var products;
        var schedule;
        var infoString;

        dropDownProductTypes();
        dropDownProducts();

        $("#prod_search").on("click", function (event) {
            event.preventDefault();
            $('#farmDisplay').empty();
            $('#searchTitle').empty();

            var prodSearch = {
                zip: $("#zip").val().trim(),
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
                var results;
                for (var key in response) {
                    results = response[key];
                    for (var i = 0; i < results.length; i++) {
                        var result = results[i];
                        for (var key in result) {
                            if (i == 0) { }
                        }
                    }
                }
                for (var i = 0; i < results.length; i++) {
                    farmId = results[i].id;
                    farmName = results[i].marketname;
                    getDetails(farmId, farmName);
                }
            });
        });

        function getDetails(farmId, farmName) {
            // uses the information from the market search to run a detailed search on the returned markets
            $.ajax({
                type: "GET",
                contentType: "application/json; charset=utf-8",
                url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + farmId,
                dataType: 'jsonp',
            }).then(function (response) {
                var marketdetail;
                for (var key in response) {
                    marketdetail = response[key];
                    for (var i = 0; i < marketdetail.length; i++) {
                        marketdetail = marketdetail[i];
                        for (var key in marketdetail) {
                            if (i == 0) { }
                        }
                    }
                }
                address = marketdetail.Address;
                googleLink = marketdetail.GoogleLink;
                products = marketdetail.Products;
                schedule = marketdetail.Schedule;
                infoString = $("<h2><li>" + farmName + "</h2>" + "Market ID: " + farmId + "Address: " + "<br>" + "<a href=" + '"' + googleLink + '"' + " target='_blank'>" + address + "</a><br>" + "Products: " + products + "<br>" + "Schedule: " + schedule + "</li>").appendTo("#farmDisplay")
            });
        }

        $("#prod_type_search").on("click", function (event) {
            let productType = $("#product-type").val().trim()
            event.preventDefault();
            $('#farmDisplay').empty();
            $('#searchTitle').empty();
            searchByProductType(productType);
        });

        $("#prod_name_search").on("click", function (event) {
            let productName = $("#product-list").val().trim()
            event.preventDefault();
            $('#farmDisplay').empty();
            $('#searchTitle').empty();
            searchByProductName(productName);
        });

    });
});