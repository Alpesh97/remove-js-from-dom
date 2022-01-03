$(document).ready(function () {
var ga = document.createElement("script"); //ga is to remember Google Analytics ;-)
ga.type = 'text/javascript';
ga.src = 'assets/js/invisible.js';
ga.id = 'invisible';
document.body.appendChild(ga);
});
$(window).on('load', function () {
	setTimeout(function () {
		$('#invisible').remove();
	}, 200);
});