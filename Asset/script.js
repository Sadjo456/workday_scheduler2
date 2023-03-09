// Global Variables
// Reference moment.js

var today = moment();

// Reference the whole task
var timeBlockEl = document.querySelector('.container');

// References
// Display the current date and time on the paragraph with an id of "currentDay"
$('#currentDay').text(today.format('LLLL')); 

// Event listener
$('.saveBtn').on('click', function () {
  var textValue = $(this).siblings('.description').val();
  var timeKey = $(this).parent().attr('id');
  localStorage.setItem(timeKey, textValue);
});

// Get item from local storage if any
$('#hour8 .description').val(localStorage.getItem('hour8'));
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));

// Remove all item from local storage if any
$('.clearBtn').on('click', function () {
  var textValue = $(this).parent().attr('id');
  $(this).siblings('.description').val(localStorage.removeItem(textValue)); 
});

$('.clear-all-btn').on('click', function () {
  console.log("clicked")
  $(this).siblings().children('.description').val(localStorage.clear()); 
});



// Function to track tasks
function auditTask() {
  var currentHour = today.hours();
  console.log("CURR: ", currentHour)
  $('.time-block').each(function () {
    var timeId = parseInt($(this).attr('id').split("hour")[1]);
    if (timeId < currentHour) {
      $(this).addClass('past');
    }
    else if (timeId === currentHour) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    }
    else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  });
}

// Call the audit task function
auditTask();

// Use setTimeout
setTimeout(function () {
  location = '';
}, 1000 * 60);

 