// extra points for external javascript file

$(document).ready(function (){
    // these elements are in the global scope, meaning everything can access them
    var animalCat = "cat";  
    var animalDog = "dog";  
    var animalBird = "bird"; 
    
    //first, create and api key
    var myApiKey = "&api_key=BxNABNc8tOV3Dw1Tfz4EBoTbMNH9cBkv"; 
    // locate the url for the api
    var queryUrl = "http://api.giphy.com/v1/gifs/random?&tag=" + animalCat + "&rating=&limit=10&lang=en" + myApiKey;

    console.log(queryUrl)

    $("#catButton").on("click", function(){
        
        // //first, create and api key
        // var myApiKey = "&api_key=BxNABNc8tOV3Dw1Tfz4EBoTbMNH9cBkv"; 
        // // locate the url for the api
        // var queryUrl = "http://api.giphy.com/v1/gifs/random?&tag=" + animalCat + "&rating=&limit=10&lang=en" + myApiKey;

        // console.log(queryUrl)
        
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

    $("#dogButton").on("click", function(){
        
        var queryUrl = "http://api.giphy.com/v1/gifs/random?&tag=" + animalDog + "&rating=&limit=10&lang=en" + myApiKey;

        // console.log(queryUrl)
        
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
            var dogImage = $("<img>");

            // Setting the catImage src attribute to imageUrl
            dogImage.attr("src", imageUrl);
            dogImage.attr("alt", "dog image");

            // Prepending the catImage to the images div
            $("#gifs-here").prepend(dogImage);

        });
    });

    $("#birdButton").on("click", function(){
        
        var queryUrl = "http://api.giphy.com/v1/gifs/random?&tag=" + animalBird + "&rating=&limit=10&lang=en" + myApiKey;

        // console.log(queryUrl)
        
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
            var birdImage = $("<img>");

            // Setting the catImage src attribute to imageUrl
            birdImage.attr("src", imageUrl);
            birdImage.attr("alt", "dog image");

            // Prepending the catImage to the images div
            $("#gifs-here").prepend(birdImage);

        });
    });
});

// giphy api key link: https://giphy.api-docs.io/1.0/welcome/access-and-api-keys
    // public beta key dc6zaTOxFJmzC
    // my key BxNABNc8tOV3Dw1Tfz4EBoTbMNH9cBkv

    //offical examply from giphy javascript, jQuery

    // var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
    // xhr.done(function(data) { console.log("success got data", data); });