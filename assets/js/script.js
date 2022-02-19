// Global variables
var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");

// Time display using Moment.js
$("#currentDay").text(moment().format("dddd, MMMM Do"));

$(document).ready(function () {
  saveBtn.on("click", function () {
    // Getting values of content on textarea and time on div
    var text = $(this).siblings(".description").val().trim();
    console.log(text);
    var time = $(this).parent().attr("id");

    // Save to local storage
    localStorage.setItem(time, text);
  });

  // Coloring blocks based on time in comparison to current time
  function colorBlocks() {
    // Get current hour number
    var timeNow = moment().hour();

    // Use the each() method to loop over blocks, parsing integer on id name and removing hour text with split
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);
      console.log(blockHour);

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

  // Getting data from local storage if it exists
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  colorBlocks();
});
