// extra points for external javascript file

$(document).ready(function (){

    $("#catButton").on("click", function(){
        
        
        //first, create and api key
        var myApiKey = "&api_key=BxNABNc8tOV3Dw1Tfz4EBoTbMNH9cBkv"; 
        // the var object we will search for our input
        var animal = "cat";       
        // locate the url for the api
        var queryUrl = "http://api.giphy.com/v1/gifs/random?&tag=" + animal + "&rating=&limit=10&lang=en" + myApiKey;

        console.log(queryUrl)
        
        //the .then fucntion calls the object (data) being called
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response) {
            // console.log(response.data[2].images.original.url);

            // Saving the image_original_url property
            var imageUrl = response.data.images.original.url;
            console.log(imageUrl)

            // Creating and storing an image tag
            var catImage = $("<img>");

            // Setting the catImage src attribute to imageUrl
            catImage.attr("src", imageUrl);
            catImage.attr("alt", "cat image");

            // Prepending the catImage to the images div
            $("#gifs-here").prepend(catImage);

        });
    });
});

// giphy api key link: https://giphy.api-docs.io/1.0/welcome/access-and-api-keys
    // public beta key dc6zaTOxFJmzC
    // my key BxNABNc8tOV3Dw1Tfz4EBoTbMNH9cBkv

    //offical examply from giphy javascript, jQuery

    // var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
    // xhr.done(function(data) { console.log("success got data", data); });