$(window).load(function(){
	initCarousel();
	//script dat bij load functie de hele site met opacity inlaad
});

function initCarousel() {
	var arrPortfolioItems = $('ul.carrousel li');
	if (arrPortfolioItems.length == 0) return false;
	
	var elCarousel = $('ul.carrousel');
		
	//calculate total width	of Carousel
	var intTotalWidth = arrPortfolioItems.outerWidth() * arrPortfolioItems.length;
	var intItemWidth = (intTotalWidth / arrPortfolioItems.length) * (-1);

	//init width's & heights
	elCarousel.css('width', intTotalWidth);
	
	var arrPortfolioThumbs = $('ul.portfolio_details li');
	
	arrPortfolioThumbs.each(function(i, elThumb) {
		//get X position of current item
		var	intXPosition = $(arrPortfolioItems[i]).position().left;	

		$(elThumb).click(function() {
			showImage(i, intXPosition);
			arrPortfolioThumbs.removeClass('active');
			$(elThumb).addClass('active');
		});
	});
	
	//scrolls to the image
	function showImage(i, intXPosition) {		
		elCarousel.animate({
			left: intXPosition * -1
		});
	}
	
}