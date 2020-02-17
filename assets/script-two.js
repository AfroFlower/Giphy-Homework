$(document).ready(function (){

    var topics = ["cat", "dog", "bird", "mouse"];

    function displayGifs() {

        // In this case, the "this" keyword refers to the button that was clicked
        var animal = $(this).attr("data-animal");

        // Constructing a URL to search Giphy for the name of the person who said the quote
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=BxNABNc8tOV3Dw1Tfz4EBoTbMNH9cBkv&limit=10";

        console.log(queryURL)
        console.log(animal)
            
        // Creating an AJAX call for the specific gif button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {

            var results = response.data;
            console.log(results)

            // Creating a div for the gif
            var gifDiv = $("<div class='animals'>");

            // Storing the result item's rating
            var rating = results.rating;

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + rating);

            // Displaying the rating
            gifDiv.append(p);

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
    };

    function renderButtons() {

        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the array of animals
        for (var i = 0; i < topics.length; i++){

          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of movie-btn to our button
          a.addClass("gif-btn");
          // Adding a data-attribute
          a.attr("data-animal", topics[i]);
          // Providing the initial button text
          a.text(topics[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);  

        };
    };

    // This function handles events where a movie button is clicked
    $("#add-gif").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var animal = $("#gif-input").val().trim();

        // Adding movie from the textbox to our array
        topics.push(animal);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
    });

      // Adding a click event listener to all elements with a class of "movie-btn"
      $(document).on("click", ".gif-btn", displayGifs);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();
});