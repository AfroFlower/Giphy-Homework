// extra points for external javascript file

$(document).ready(function (){

    $("button").on("click", function(){
        // the button that was clicked in the html
        // var btn = $(this).attr("button");

        var myApiKey = "&api_key=BxNABNc8tOV3Dw1Tfz4EBoTbMNH9cBkv";
       
        var queryUrl = "http://api.giphy.com/v1/gifs/search?&q=" + userInput +"&rating=&limit=10&lang=en" + myApiKey;

        console.log(queryUrl)

        //the .then fucntion calls the object (data) being called
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response) {
            // console.log(response.data);

            var results = response.data
            // console.log(results[2].images.original.url);

            

            


        });
    });

    



});

// giphy api key link: https://giphy.api-docs.io/1.0/welcome/access-and-api-keys
    // public beta key dc6zaTOxFJmzC
    // my key BxNABNc8tOV3Dw1Tfz4EBoTbMNH9cBkv

    //offical examply from giphy javascript, jQuery

    // var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
    // xhr.done(function(data) { console.log("success got data", data); });