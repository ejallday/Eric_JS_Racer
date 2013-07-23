$(document).ready(function() {
	$('#join').on('click', function(event){
		event.preventDefault();
		var url = $(this).attr('href');
		$(this).hide();
		$('#main_content').fadeOut(1000);
		$.get(url, function(form_data){
			$('#sign_up_form').append(form_data).hide().fadeIn(1000);



		});
	});

});
