$(document).ready(function (){

    $("button").on("click", function(){

        // In this case, the "this" keyword refers to the button that was clicked
        var animal = $(this).attr("data-animal");

        // Constructing a URL to search Giphy for the name of the person who said the quote
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=BxNABNc8tOV3Dw1Tfz4EBoTbMNH9cBkv&limit=10";
        
        console.log(queryURL)
        console.log(animal)
        
        //the .then fucntion calls the object (data) being called
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            // console.log(response.data);

            // Storing an array of results in the results variable
            var results = response.data;
            // console.log(results)


                // Looping over every result item (the results are in an object array from it's api data file)
                for (var i = 0; i < results.length; i++) {

                // Only taking action if the photo has an appropriate rating
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    // Creating a div for the gif
                    var gifDiv = $("<div>");

                    // Storing the result item's rating
                    var rating = results[i].rating;

                    // Creating a paragraph tag with the result item's rating
                    var p = $("<p>").text("Rating: " + rating);

                    // Creating an image tag
                    var animalImage = $("<img>");

                    // Giving the image tag an src attribute of a proprty pulled off the
                    // result item
                    animalImage.attr("src", results[i].images.fixed_height.url);

                    // Appending the paragraph and personImage we created to the "gifDiv" div we created
                    gifDiv.append(p);
                    gifDiv.append(animalImage);

                    // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                    $("#gifs-here").prepend(gifDiv);

                };
            };

        });

    });

});
   

