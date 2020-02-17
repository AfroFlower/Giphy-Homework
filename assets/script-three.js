$(document).ready(function (){
    // these elements are in the global scope, meaning everything can access them

    var animal = " "; 
    
    //first, create and api key
    var myApiKey = "&api_key=BxNABNc8tOV3Dw1Tfz4EBoTbMNH9cBkv"; 
    // locate the url for the api
    var queryUrl = "http://api.giphy.com/v1/gifs/random?&tag=" + animal + "&rating=&limit=10&lang=en" + myApiKey;

    console.log(queryUrl)

    $("#catButton").on("click", function(){
        //the .then fucntion calls the object (data) being called
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response) {
            console.log(response.data);
        });
    });

});
   

