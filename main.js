
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

$(document).ready(function(){
	$.getJSON('https://api.sheety.co/cb4073ac-9473-4af7-9921-9e38120ab1f0', function(data) {
		var template = Handlebars.compile($('#list').html())
		$('.wrap').html(template(data))
	})
})
