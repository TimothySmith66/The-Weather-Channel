$(function () {
    // API_KEY 
    var apiKey = "9d90fe7e3caef49ff4cad4f9f583b612";
    $(document).on("click", ".city", function () {
      // get the name of the city
      var city = $(this).attr("data-city");
  
      // construct a url to search OpenWeatherAPI for the current weather in the
      // city
      var queryUrl =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        apiKey;
        
      // send ajax request 
      $.ajax({
        url: queryUrl,
        method: "GET",
      }).then(function (data) {
        // log the data from the api to the console
        console.log(data);
  
        // set the text of the #city-name h2 element using the city name in the
        // response
        $("#city-name").text(data.name + " Weather");
  
        // display the temperature, wind, and humidity in text
        
        $("#temp").text(data.main.temp + "°");
        $("#wind").text(data.wind.speed + " mph");
        $("#humidity").text(data.main.humidity + " %");

        var temp5 = (data.main.temp - 273.15) * 1.8 + 32;
        
        
        $("#temp").text("Temperature (F) " + tempF.toFixed(2));
      });
    });
  
    // listen for "submit" event on the #search-form
    $("#search-form").on("submit", function (event) {
      
  
      // prevent the default form behavior
      event.preventDefault();
      // store value of form input in a variable named search.
      var search = $("#search-input").val().trim()
      // do nothing if search has no characters (empty string)
      if( search=== ""){
        return;
  
  
      }
      // construct a url to search OpenWeatherAPI for the current weather in the
      // city
      var queryUrl = "https://api.openweathermap.org/data/2.5/weather?" +
      "q=" + search + "&appid=" + apiKey;
      
      // ==================================================================
  
      // send ajax request for current weather 
      $.ajax({
        url: queryUrl,
        method: "GET",
      }).then(function (data) {
        // log the data from the api to the console
        console.log(data);
  
       
  
        // display the city name, temperature, wind, and humidity in the elements
        
        $("#city-name").text(data.name + " Weather");
  
        $("#temp").text(data.main.temp + "°");
        $("#wind").text(data.wind.speed + " mph");
        $("#humidity").text(data.main.humidity + " %");
        // Clear  search input
  $("search-input").val("")
        // ==================================================================
      });
    });
  });


  $(function () {
    // API_KEY 
    var apiKey = "9d90fe7e3caef49ff4cad4f9f583b612";
    $(document).on("click", ".city", function () {
      // get the name of the city
      var city = $(this).attr("data-city");
  
      // construct a url to search OpenWeatherAPI for the current weather in the
      // city
      var queryUrl =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        apiKey;
        
      // send ajax request 
      $.ajax({
        url: queryUrl,
        method: "GET",
      }).then(function (data) {
        // log the data from the api to the console
        console.log(data);
  
        // set the text of the #city-name h2 element using the city name in the
        // response
        $("#city-name").text(data.name + " Weather");
  
        // display the temperature, wind, and humidity in text
        
        $("#temper").text(data.main.temp + "°");
        $("#windy").text(data.wind.speed + " mph");
        $("#humidity4").text(data.main.humidity + " %");

        var temp5 = (data.main.temp - 273.15) * 1.8 + 32;
        
        
        $("#temper").text("Temperature (F) " + tempF.toFixed(2));
      });
    });
  
    // listen for "submit" event on the #search-form
    $("#search-form").on("submit", function (event) {
      
  
      // prevent the default form behavior
      event.preventDefault();
      // store value of form input in a variable named search.
      var search = $("#search-input").val().trim()
      // do nothing if search has no characters (empty string)
      if( search=== ""){
        return;
  
  
      }
      // construct a url to search OpenWeatherAPI for the current weather in the
      // city
      var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?" +
      "q=" + search + "&appid=" + apiKey;
      
      // ==================================================================
  
      // send ajax request for current weather 
      $.ajax({
        url: queryUrl,
        method: "GET",
      }).then(function (data) {
        // log the data from the api to the console
        console.log(data);
  
       
  
        // display the city name, temperature, wind, and humidity in the elements
        
        $("#city-name").text(data.name + " Weather");
  
        $("#temper").text(data.main.temp + "°");
        $("#windy").text(data.wind.speed + " mph");
        $("#humidity4").text(data.main.humidity + " %");
        // Clear  search input
  $("search-input").val("")
        // ==================================================================
      });
    });
  });
  

  