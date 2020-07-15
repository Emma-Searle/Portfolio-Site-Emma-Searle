function myFunction() {
  console.log('inside menu toggle')
  var x = document.getElementById('myNavtoggle');
  const width = $(document).width();
  if (x.className === 'navtoggle' && width < 641) {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    $('#header').addClass('active');
  } else {
    $('#header').removeClass('active');
  }
});
