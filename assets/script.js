// extra points for external javascript file

$(document).ready(function (){

    $("button").on("click", function(){
        // the button that was clicked in the html
        // var btn = $(this).attr("#animal-button");

        var myApiKey = "&api_key=BxNABNc8tOV3Dw1Tfz4EBoTbMNH9cBkv";
       
        var queryUrl = "http://api.giphy.com/v1/gifs/search?&q=" + animals +"&rating=&limit=10&lang=en" + myApiKey;

        console.log(queryUrl);

        //array
        var animals = ["cats", "dogs", "birds"];

        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response) {
            console.log(response.data);

            var imageUrl = response.data.images;
            console.log(imageUrl);

        
            // //the image url
            // var imageUrl = results;
            // //create an image tag to be appended to the end
            // var animalImg = $("<img>")



            // After everything is done THEN Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            // $("#gifs-appear-here").prepend(gifDiv);
        });
    });

    



});

// giphy api key link: https://giphy.api-docs.io/1.0/welcome/access-and-api-keys
    // public beta key dc6zaTOxFJmzC
    // my key BxNABNc8tOV3Dw1Tfz4EBoTbMNH9cBkv

    //offical examply from giphy javascript, jQuery

    // var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
    // xhr.done(function(data) { console.log("success got data", data); });