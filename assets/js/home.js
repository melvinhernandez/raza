$(document).ready(function(){
	$('#voto-latino').hover(
		function() {
			$(this).slideUp("slow");
		},
		function() {
			$(this).slideDown("slow");
		}
	);
});