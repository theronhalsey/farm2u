searchByProductType = function () {
        let productType = $("#product-type").val().trim()
        $.get("/api/product_type/" + productType, function (data) {
        }).then(function (data) {
            $("<div class='line1'></div>").appendTo("results");
            $("<h3>" + "List of farms with " + productType + " near your location:" + "<h3>").appendTo("#searchTitle");
            for (i = 0; i < data.length; i++) {
                farmName = data[i].Farmer.farmName;
                farmContact = data[i].Farmer.farmContact;
                farmZip = data[i].Farmer.farmZip;
                productName = data[i].productName;
                productDescription = data[i].productDescription;
                infoString = $("<h2><li>" + farmName + "</h2>" + "Farm Contact: " + farmContact + "<br>" + "Zip Code: " + farmZip + "<br>" + "Product: " + productName + "<br>" + "Description: " + productDescription + "</li>").appendTo("#farmDisplay")
            }
        })
    };