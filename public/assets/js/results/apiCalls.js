// makes an get API call to get products by type and their assoicated farms
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

// makes a post API call to add new product to the database
postNewProduct = function (product) {
    $.post("/api/products", product, function (data) {
        console.log(data);
        $("<h2><li>" + data.productName + "</h2>" + "Product Type: " + data.productType + "<br>" + "Description: " + data.productDescription + "</li>").prependTo("#inventory")
    });
    document.getElementById('productForm').reset();
    $('#successMessage').html("Got it - Go ahead and add another product!")
};