$(document).ready(function () {
    console.log("hi!!");


    $("#prod_search").on("click", function (event) {
        event.preventDefault();


        var prodSearch = {
            zip: $("#zip").val().trim(),
            prod_type: $("#prod_type").val().trim()
        };
        console.log(prodSearch);
        //Send the POST request.
        $.ajax("/api/prod_search", {
            type: "POST",
            data: prodSearch

        }).then(
            function (response) {
                console.log(data);

                data.name
                data.picture.
                    console.log("created new quote");
                // Reload the page to get the updated list
                //location.reload();
            }
        );

    });

})