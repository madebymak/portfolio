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

  $(".modal, .close-btn, .wiki, .happy, .tweetr").hide();

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
      $(".close-btn, .wiki, .happy, .tweetr").hide();
    });
  });

});
