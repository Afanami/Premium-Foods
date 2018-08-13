$(document).ready(function() {
  /* For sticky navigation */
  $(".js--section-features").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px"
    }
  );

  /* Scroll on buttons */
  $(".js--scroll-to-plans").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });

  $(".js--scroll-to-start").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  /* Navigation scrolling */

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  /* Animations on scroll */
  $(".js--wp-1").waypoint(
    function(direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "70%"
    }
  );

  $(".js--wp-2").waypoint(
    function(direction) {
      $(".js--wp-2").addClass("animated fadeInUp");
    },
    {
      offset: "70%"
    }
  );

  $(".js--wp-3").waypoint(
    function(direction) {
      $(".js--wp-3").addClass("animated fadeIn");
    },
    {
      offset: "70%"
    }
  );

  $(".js--wp-4").waypoint(
    function(direction) {
      $(".js--wp-4").addClass("animated pulse");
    },
    {
      offset: "70%"
    }
  );

  /* Mobile Navigation */
  $(".js--nav-icon").click(function() {
    let logoBlackResize = $(".logo-black");
    let logoResize = $(".logo");
    let icon = $(".js--nav-icon i");
    $(".js--main-nav").slideToggle(200);
    if (icon.hasClass("ion-md-menu")) {
      icon.addClass("ion-md-close");
      logoBlackResize.addClass("logo-black-resize");
      icon.removeClass("ion-md-menu");
      if (logoResize.hasClass("logo-resize")) {
        return;
      } else {
        logoResize.addClass("logo-resize");
      }
    } else {
      icon.removeClass("ion-md-close");
      logoBlackResize.removeClass("logo-black-resize");

      icon.addClass("ion-md-menu");
    }
    //
  });

  $(document).ready(function() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: new google.maps.LatLng(-36.8661133, 174.7591394)
    });

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-36.8599015, 174.7313281),
      map: map,
      title: "Premium Foods Main Branch"
    });
  });
});
