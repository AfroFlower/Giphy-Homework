// extra points for external javascript file

$(document).ready(function (){

    var url = "http://api.giphy.com/v1/gifs/search?";
    var myApiKey = "api_key=BxNABNc8tOV3Dw1Tfz4EBoTbMNH9cBkv";
    var query = "&q=cats";
    var limit = "&limit=3";
    var rating = "&rating=g";

    var queryUrl = url + myApiKey + query + limit + rating + "&lang=en";

    console.log(queryUrl);

    $.ajax({
        url: queryUrl,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        // notes for tomorrow: start creating calling content here

      });



});

// giphy api key link: https://giphy.api-docs.io/1.0/welcome/access-and-api-keys
    // public beta key dc6zaTOxFJmzC
    // my key BxNABNc8tOV3Dw1Tfz4EBoTbMNH9cBkv

    //offical examply from giphy javascript, jQuery

    // var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
    // xhr.done(function(data) { console.log("success got data", data); });