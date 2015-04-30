/*!
 * main.js
 */

// collapse navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// page scrolling - requires jQuery Easing plugin (included in footer)
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Soundcloud API
$(document).ready(function() {
	// init
	SC.initialize({
	  client_id: '2880be10afa0a3fa61b8825c547b2511'
	});
	
   SC.get("/tracks", {
      // api.soundcloud.com/users/{user_id}/tracks.json?client_id={client_id}
      user_id: 39090345 

   },function (tracks) {
  
  		for (var i = 0; i < 11; i++) { 
  		  var title = tracks[i].title;
  		  var recentTrack = tracks[0].title;
  		  
  		  	if (i == 0) { //most recent track
	  		  $('#about h2').html(recentTrack);
  		  	} else {
	  		  $('#about p').html("<li>" + title + "</li>");
  		  	}
  		  	
  		}
  		
  			
  		
  		
  	
  		
  	});// end .get
	
	
	
});// end .ready

