$(document).ready(function (){

    var animals = ["cat", "dog", "bird", "mouse"];

    // In this case, the "this" keyword refers to the button that was clicked
    var animal = $(this).attr("data-animal");

    // Constructing a URL to search Giphy for the name of the person who said the quote
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=BxNABNc8tOV3Dw1Tfz4EBoTbMNH9cBkv&limit=10";
    
    console.log(queryURL)
    console.log(animal)

    function displayGifs() {

        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {

            var results = response.data;

            // Creating a div to hold the movie
            var animalDiv = $("<div class='animal'>");

            // Storing the result item's rating
            var rating = results.rating;

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + rating);

            // Displaying the rating
            animalDiv.append(p);

            // Creating an image tag
            var animalImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item
            animalImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and personImage we created to the "gifDiv" div we created
            gifDiv.append(p);
            gifDiv.append(animalImage);


          // Putting the entire movie above the previous movies
          $("#gifs-view").prepend(animalDiv);
        });

      }
});