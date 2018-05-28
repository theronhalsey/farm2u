// var farm = {
//     farmId: $("#").val().trim(),
// 	farmName: $("#").val().trim(),
//     farmZip: $("#zip").val().trim()
// };



$(document).ready(function () {

    $.getScript("assets/js/results/apiCalls.js", function (data) {

        let farmKey;

        // makes a post API call to add a new farm to the database
        postNewFarm = function (farm) {
            $.post("/api/farms", farm, function (data) {
                farmKey = data.id
                console.log(data);
            });
        };

        $('.FARMER').on("click", function (event) {
            event.preventDefault();
            var newFarm = {
                farmName: $("#farm-name").val().trim(),
                farmContact: $("#farm-cont").val().trim(),
                farmZip: $("#farm-zip").val().trim()
            };
            postNewFarm(newFarm)
        });

        $('#productSubmit').on("click", function () {
            var newProduct = {
                productName: $("#product-name").val().trim(),
                productDescription: $("#product-description").val().trim(),
                productType: $("#product-type").val().trim(),
                productAvailable: 1,
                FarmerId: farmKey
            };
            event.preventDefault();
            postNewProduct(newProduct);
        });
    });
});