$(document).ready(function() {

  $(function() {
    $.scrollify({
  		section:".section",
   		after:function() {
      },
      scrollSpeed: 1000,
  	});

    $(".arrow").click(function(e){
       e.preventDefault();
       $.scrollify.move(1);
   });

});

  $(".modal, .close-btn, .pie, .budget, .shopify, .wiki, .happy, .tweetr").hide();

  $(".pie-chart-btn").click(function() {
    $(".modal").fadeToggle( function() {
      $(".close-btn, .pie").show();
    });
  });

  $(".budget-btn").click(function() {
    $(".modal").fadeToggle( function() {
      $(".close-btn, .budget").show();
    });
  });

  $(".shopify-btn").click(function() {
    $(".modal").fadeToggle( function() {
      $(".close-btn, .shopify").show();
    });
  });

  $(".wiki-btn").click(function() {
    $(".modal").fadeToggle( function() {
      $(".close-btn, .wiki").show();
    });
  });

  $(".happy-btn").click(function() {
    $(".modal").fadeToggle( function() {
      $(".close-btn, .happy").show();
    });
  });

  $(".tweetr-btn").click(function() {
    $(".modal").fadeToggle( function() {
      $(".close-btn, .tweetr").show();
    });
  });

  $(".close-btn").click(function() {
    $(".modal").fadeToggle("slow", function() {
      $(".close-btn, .pie, .budget, .shopify, .wiki, .happy, .tweetr").hide();
    });
  });

});
