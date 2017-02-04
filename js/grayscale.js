/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
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
    $(this).closest('.collapse').collapse('toggle');
});

function initialize() {

  var season = new google.maps.LatLng(41.3946042,2.1936353);

  var mapOptions = {
    zoom: 17,
    center: season,
    disableDefaultUI: true

  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var image = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.5/images/marker-icon.png';

  var beachMarker = new google.maps.Marker({
      position: season,
      map: map,
      icon: image
  });

  // Resize snipper
  google.maps.event.addDomListener(window, "resize", function() {
     var center = map.getCenter();
     google.maps.event.trigger(map, "resize");
     map.setCenter(center);
  });

}

google.maps.event.addDomListener(window, 'load', initialize);
