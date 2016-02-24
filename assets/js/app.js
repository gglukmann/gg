$('.goto').click(function(e) {
	e.preventDefault();

	var to = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(to).offset().top
    }, 1000);
});