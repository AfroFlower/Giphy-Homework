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
            console.log(response.data);
            // Creating a div for the gif
            var gifDiv = $("<div>");

            var results = response.data

            // // // Storing the result item's rating
            var rating = results.rating;

            // // // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + rating);

            // Creating and storing an image tag
            var catImage = $("<img>");

            // Saving the image_original_url property
            var imageUrl = results.images.original.url;
            // console.log(imageUrl)

            // Setting the catImage src attribute to imageUrl
            catImage.attr("src", imageUrl);
            catImage.attr("alt", "cat image");

            // Appending the paragraph and personImage we created to the "gifDiv" div we created
            gifDiv.append(p);
            gifDiv.append(catImage);

            // Prepending the catImage to the gif div
            $("#gifs-here").prepend(gifDiv);

        });
    });

});