$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

$(".nav-links a").click(function () {
  $("#nav-check").prop('checked', false);
  $(".btn-close").css({"display": "none"});
});
$(".nav-btn").click(function () {
  $(".btn-close").css({"display": "block"});
});
$(".btn-close").click(function () {
  $("#nav-check").prop('checked', false);
  $(".btn-close").css({"display": "none"});
});
