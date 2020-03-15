

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

$("#inputBox").modal();