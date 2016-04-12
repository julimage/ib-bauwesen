/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

//$(document).ready(function () {

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('.page-scroll a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 150
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // PREVENTING SCROLL on GoogleMap
    // https://github.com/kylelam/kylelam.github.io/blob/master/iframe.html

    // set the mouse events to none when doc is ready
    $('#map').addClass('scrolloff');

    // when mouse down, set the mouse events free
    $('#overlay').on("mousedown",function(){
        console.log("removed");     
        $('#map').removeClass('scrolloff');
    });

    // becuase the mouse up doesn't work...
    $("#map").mouseleave(function () {
      // set the pointer events to none when mouse leaves the map area             
      $('#map').addClass('scrolloff');            
    });
//});