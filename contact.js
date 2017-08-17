$(function() {
	$('#contact').validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			surname: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			subject: {
				required: true
			}
			message: {
				required: true
			}
		},
		messages: {
			name: {
				required: "come on, you have a name don't you?",
				minlength: "your name must consist of at least 2 characters"
			},
			surname: {
				required: "am sure you do have a surname as well, don't you?",
				minlength: "it must consist of at least 2 characters"
			},
			email: {
				required: "no email, no message"
			},
			subject: {
				required: "need to know why your writing?",
				minlength: "make it brief and to the point"
			},
			message: {
				required: "um...yea, you have to write something to send this form.",
				minlength: "thats all? really?"
			}
		},
		submitHandler: function(form) {
			$(form).ajaxSubmit({
				type: "POST",
				data: $(form).serialize(),
				url: "php/contact.php",
				success: function() {
					$('#contact :input').attr('disabled', 'disabled');
					$('#contact').fadeTo("slow", 0.15, function() {
						$(this).find(':input').attr('disabled', 'disabled');
						$(this).find('label').css('cursor', 'default');
						$('#success').fadeIn();
					});
				},
				error: function() {
					$('#contact').fadeTo("slow", 0.15, function() {
						$('#error').fadeIn();
					});
				}
			});
		}
	});
});