

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
    
    
                 /*function checkInput(){
   
    // var storedArray = JSON.parse(localStorage.getItem("occasion"))*/

    /*function getAPIKey (APIKey) {
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
  //});*/
    //console.log(userAPIKey);

    $("#searchBttn").click(function(event){
      event.preventDefault()
      var cityArray = [];
      var cityName = $("#searchBox").val();
  
     if (localStorage.getItem("citySearched") === null){
        cityArray = []}
      else cityArray = JSON.parse(localStorage.getItem("citySearched"));
     cityArray.forEach(function(cityName){  
          if (cityName === "" || cityName === cityArray.entries()){ 
            console.log(cityArray[i]); 
        return }
          else  {cityArray.push(cityName)};               
        localStorage.setItem("citySearched", JSON.stringify(cityArray))});
                

    $("#searchBttn").click(function(event){
    event.preventDefault();
    $(".infoDisplay").empty();
    
    
    var searchCity = $("#searchBox").val();
    var APIKey = "0ef2ac94f5fde5899714a4ccfc6bf24c";
    
   

    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity +"&appid=" + APIKey + "&units=imperial";

    
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      
      .then(function(response1) {
        var iconCode = response1.weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        var iconImage = "<image src=" + iconUrl + ">";
        var p1 = $("<p>").html("<h3><b>" + response1.name +" ("+ todayDate +")" + iconImage + "</b></h3");
        var p2 = $("<p>").html("<h5><b>Temperature: " + response1.main.temp + "&degF</b></h5>");
        var p3 = $("<p>").html("<h5><b>Wind Speed: " + response1.wind.speed + "MPH</b></h5>");
        var p4 = $("<p>").html("<h5><b>Humidity: " + response1.main.humidity + "</b></h5>");
        var cityLat = response1.coord.lat;
        var cityLon = response1.coord.lon;
        var uvIndexURL= "http://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + cityLat + "&lon=" + cityLon;
        
        $("#city").append(p1);
        $("#temp").append(p2);
        $("#wind").append(p3);
        $("#humidity").append(p4);
        console.log(response1);

    $.ajax({
      url: uvIndexURL,
     method: "GET"
    })
      // We store all of the retrieved data inside of an object called "response"
     .then(function(response2) {
      var uvIndexVal = response2.value;
      var p5 = $("<p>").html("<h5><b>UV Index: " + uvIndexVal + "</b></h5>");
      if (uvIndexVal < 3){
      $("#uv-index").append(p5).css("color", "green");}
      else if (uvIndexVal >=3 && uvIndexVal < 6){
        $("#uv-index").append(p5).css("color", "yellow");} 
            else if (uvIndexVal >= 6 && uvIndexVal < 8){
        $("#uv-index").append(p5).css("color", "orange");}
        else if (uvIndexVal >= 8 && uvIndexVal < 11){
          $("#uv-index").append(p5).css("color", "red");} 
          else 
            $("#uv-index").append(p5).css("color", "violet");
          })})
        })})});

    
  


  
             
    
    