// var farm = {
//     farmId: $("#").val().trim(),
// 	farmName: $("#").val().trim(),
//     farmZip: $("#zip").val().trim()
// };



$( document ).ready(function() {
  
    $('.FARMER').on("click", function (event) {
        event.preventDefault();
        var newFarm = {
            farmName: $("#farm-name").val().trim(),
            farmContact: $("#farm-cont").val().trim(),
            farmZip: $("#farm-zip").val().trim()
        };

        console.log(newFarm);
    })

  
    $('#productSubmit').on("click", function () {
                event.preventDefault();
                var newProduct = {
                    productName: $("#product-name").val().trim(),
                    productDescription: $("#product-description").val().trim(),
                    productType: $("#product-type").val().trim()
                };
                console.log(newProduct);
             
                document.getElementById('productForm').reset();
                $('#successMessage').html("Got it - Go ahead and add another product!")
            })
    
    $.post("/api/farms", newFarm, function (data) {

                });
    $.post("/api/products", newProduct, function (data) {

    });
});