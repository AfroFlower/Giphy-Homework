// extra points for external javascript file

$(document).ready(function (){

    var myApiKey = "api_key=BxNABNc8tOV3Dw1Tfz4EBoTbMNH9cBkv";
    var query = "&q=";
    var limit = "&limit=";
    var rating = "&rating=";


    var queryUrl = "http://api.giphy.com/v1/gifs/search?" + myApiKey + query + limit + rating + "&lang=en";

    console.log(queryUrl)


}

// giphy api key link: https://giphy.api-docs.io/1.0/welcome/access-and-api-keys
    // public beta key dc6zaTOxFJmzC
    // my key BxNABNc8tOV3Dw1Tfz4EBoTbMNH9cBkv

    //offical examply from giphy javascript, jQuery

    // var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
    // xhr.done(function(data) { console.log("success got data", data); });