

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
    
    $("#searchBttn").click(function(event){
    event.preventDefault();
    
    var searchCity = $("#searchBox").val();
    var APIKey = "0ef2ac94f5fde5899714a4ccfc6bf24c";
    
   

    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity +"&appid=" + APIKey + "&units=imperial";

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // We store all of the retrieved data inside of an object called "response"
      .then(function(response) {
        var iconCode = response.weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        var iconImage = "<image src=" + iconUrl + ">";
        
        console.log (iconUrl);
        
        // Transfer content to HTML
        $("#city").html(response.name +"("+ todayDate +")" + iconImage);
        $("#temp").html("Temperature: " + response.main.temp + "&degF");
        $("#humidity").html("Humidity: " + response.main.humidity);
        console.log(response);
    })})});
    
    