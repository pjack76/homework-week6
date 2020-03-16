

var todayDate = moment().format("dddd, MMMM Do YYYY");
var showClock= $("#currentTime");
var showDate = $("#currentDay");


showDate.html(todayDate);

function liveTime() {
var clock = moment().format("HH:mm:ss");
showClock.html(clock);
};
setInterval(liveTime, 1000);
liveTime();
currentHour = moment().hour();

$(document).ready(function(){
    
   /* var cityArray = [];
    var eventList = $(".plannedEvent");
     
     
 
   
         
        
         //checkInput();
         for (var i=0; i< eventList.length; i++){
             var activity = $(this).val();
             
             if (activity === "") {
                 return } 
             else  eventArray.push(activity);
                 localStorage.setItem("occasion", JSON.stringify(eventArray))}})}});

                 /*function checkInput(){
   if (localStorage.getItem("occasion") === null){
       eventArray = []}
    else eventArray = JSON.parse(localStorage.getItem("occasion"));};
    // var storedArray = JSON.parse(localStorage.getItem("occasion"))*/

    function getAPIKey (APIKey) {
      var defaultAPIKey = "0ef2ac94f5fde5899714a4ccfc6bf24c";
      
      $("#apiKeyBttn").click(function(event){
        event.preventDefault();
        var userAPIKey = $("#inputBox").val();
        console.log(userAPIKey);
        if (userAPIKey === "") {
          APIKey = defaultAPIKey;
        }
        else 
         APIKey = userAPIKey;

        })
 
        return(APIKey);
      
    };
  //});
    //console.log(userAPIKey);
    $("#searchBttn").click(function(event){
    event.preventDefault();
    $(".infoDisplay").empty();
    getAPIKey(APIKey);
    
    var searchCity = $("#searchBox").val();
    
    
   

    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity +"&appid=" + APIKey + "&units=imperial";

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // We store all of the retrieved data inside of an object called "response"
      .then(function(response1) {
        var iconCode = response1.weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        var iconImage = "<image src=" + iconUrl + ">";
        var p1 = $("<p>").html("<h3><b>" + response1.name +" ("+ todayDate +")" + iconImage + "</b></h3");
        var p2 = $("<p>").html("<h5><b>Temperature: " + response1.main.temp + "&degF</b></h5>");
        var p3 = $("<p>").html("<h5><b>Humidity: " + response1.main.humidity + "</b></h5>");
        var cityLat = response1.coord.lat;
        var cityLon = response1.coord.lon;
        var uvIndexURL= "http://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + cityLat + "&lon=" + cityLon;
        // Transfer content to HTML
        $("#city").append(p1);
        $("#temp").append(p2);
        $("#humidity").append(p3);
         
    $.ajax({
      url: uvIndexURL,
     method: "GET"
    })
      // We store all of the retrieved data inside of an object called "response"
     .then(function(response2) {
      var p4 = $("<p>").html("<h5><b>UV Index: " + response2.value + "</b></h5>");
     $("#uv-index").append(p4);
    
    });

    //console.log(response2);

    })})});
    
    