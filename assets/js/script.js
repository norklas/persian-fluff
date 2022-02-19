// Global variables
var currentDay = $("#currentDay");

var currentTime = moment();

// Time display using Moment.js
$("#currentDay").text(currentTime.format("dddd, MMMM Do"));

// Time tracker to change block color based on time comparison
function timeTracker() {
  // Get current hour number
  var timeNow = moment().hour();

  // Loop over blocks
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("hour")[1]);

    // Check time and add/remove classes for background colors
    if (blockHour < timeNow) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (blockHour === timeNow) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}

timeTracker();
