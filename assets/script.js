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

            // Displaying the rating
            gifDiv.append(p);
            
            // creating a 'For Loop' for the picked item and inputing "i" when needed
            for (var i = 0; i < topics.length; i++){

                // Storing the result item's rating
                var rating = results[i].rating;

                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + rating);
                // Creating an image tag
                var animalImage = $("<img>");

                // Giving the image tag an src attribute of a proprty pulled off the
                // result item
                animalImage.attr("src", results[i].images.original.url);
                // console.log(animalImage)

                // Appending the paragraph and personImage we created to the "gifDiv" div we created
                gifDiv.append(p);
                gifDiv.append(animalImage);

                // Putting the gifabove the previous gifs
                $("#gifs-view").prepend(gifDiv);

                // SECTION FOR PAUSING AND PLAYING GIFS // 
                // var imgSrc = results[i].images.fixed_height_still.url
                // console.log(imgSrc)
            
            };

        });
    };

        // SECTION FOR PAUSING AND PLAYING GIFS 
        for (var i = 0; i < topics.length; i++){

            $("img").on("click", function() {

                var imgSrc = results[i].images.fixed_height_still.url
                console.log(imgSrc)

                // <img src="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" data-still="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" data-animate="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200.gif" data-state="still" class="gif">

                // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
                var state = $(imgSrc).attr("data-state");
                // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                // Then, set the image's data-state to animate
                // Else set src to the data-still value
                if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
                } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
                };
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