$(function () {
  // defines today as dayjs variable
  var today = dayjs();
  // displays current day in current-day element
  $('#current-day').text(today.format('MMM D, YYYY'));
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // interval for 1000ms; allows to update while browser is displaying page
  setInterval(function () {
    // declare variable that is assigned current hour (24hr clock)
    var currentHour = dayjs().hour();
    // for/each loop to compare each hour block to currentHour
    $('.time-block').each(function () {
      // declares and parses value assigned to data-hour in html so it can be used in comparison with num currentHour
      var hourBlock = parseInt($(this).data('hour'));
      // conditionally adds/changes CSS properties based on currentHour
      if (currentHour > hourBlock) {
        $(this).addClass('past');
      } else if (currentHour == hourBlock) {
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      };
    });
  }, 1000)
  var saveBtn = $('.saveBtn');
  saveBtn.click(function () {
  var container = $('this').siblings('textarea').val();
  localStorage.setItem($(this).)
  });
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});
