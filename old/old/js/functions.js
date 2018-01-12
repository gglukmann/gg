$(function(){
	$('.second-row').hide();
	$('.view-less').hide();
});
$(".goto").click(function(e) {
	e.preventDefault();

	var to = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(to).offset().top
    }, 1500);
});

$('.up').click(function(e) {
    e.preventDefault();

    $('html, body').animate({scrollTop: 0}, 1000);
    return false;
});

$('.view-more').click(function(e){
	e.preventDefault();
	$(this).hide();
	$('.view-less').show();
	$('.second-row').toggle('slow');
	$('.portfolio-more').attr('data-lightbox', 'portfolio');
});

$('.view-less').click(function(e){
	e.preventDefault();
	$(this).hide();
	$('.view-more').show();

	$('.second-row').toggle('slow');
	$('.portfolio-more').removeAttr('data-lightbox', 'portfolio');
});