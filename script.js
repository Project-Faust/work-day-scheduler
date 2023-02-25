// document-ready function; only fires after document has loaded
$(function () {
  // interval for 1000ms; allows to update while browser is displaying page
  setInterval(function () {
    // defines today as dayjs variable
    var today = dayjs();
    // displays current day in current-day element
    $('#current-day').text(today.format('dddd MMM D, YYYY hh:mmA'));
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
  // declare variable assigned to html object
  var saveBtn = $('.saveBtn');
  // click handler for saveBtn
  saveBtn.click(function () {
    // declare savedText and assign to content of textarea when click handler fires
    var savedText = $(this).siblings('textarea').val();
    // stores savedText value to key of 'hour-#' ID in local storage
    localStorage.setItem($(this).parent().attr('id'), savedText);
  });
});
// retrieves data from local storage and displays in corresponding hour block
$('.description').each(function () {
    $(this).val(localStorage.getItem($(this).parent().attr('id')));
});