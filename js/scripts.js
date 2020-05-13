// Business Logic (back-end)

const leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

// jQuery User Interface Logic

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    const year = parseInt($("input#year").val());
    const result = leapYear(year);
    $("#result").text(result);
  });
});
