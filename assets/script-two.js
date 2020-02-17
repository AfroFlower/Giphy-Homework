$(document).ready(function (){
    // these elements are in the global scope, meaning everything can access them
    var animalCat = "cat";  
    
    //first, create and api key
    var myApiKey = "&api_key=BxNABNc8tOV3Dw1Tfz4EBoTbMNH9cBkv"; 
    // locate the url for the api
    var queryUrl = "http://api.giphy.com/v1/gifs/random?&tag=" + animalCat + "&rating=&limit=10&lang=en" + myApiKey;

    console.log(queryUrl)

    $("#catButton").on("click", function(){
                
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