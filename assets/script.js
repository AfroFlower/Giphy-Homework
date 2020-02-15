// extra points for external javascript file

$(document).ready(function (){

    $("button").on("click", function(){

        var myApiKey = "&api_key=BxNABNc8tOV3Dw1Tfz4EBoTbMNH9cBkv";
       
        var queryUrl = "http://api.giphy.com/v1/gifs/search?&q=" + animals +"&rating=&limit=10&lang=en" + myApiKey;

        // Grabbing and storing the data-animal property value from the button
        // var animal = $(this).attr("data-animal");

        //array
        var animals = ["cats", "dogs", "birds"];

        console.log(queryUrl);

        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response) {
            console.log(response.data);
            
            


        });
    });

    



});

// giphy api key link: https://giphy.api-docs.io/1.0/welcome/access-and-api-keys
    // public beta key dc6zaTOxFJmzC
    // my key BxNABNc8tOV3Dw1Tfz4EBoTbMNH9cBkv

    //offical examply from giphy javascript, jQuery

    // var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
    // xhr.done(function(data) { console.log("success got data", data); });