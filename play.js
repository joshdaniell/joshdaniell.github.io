$(window).load(function() {

  var infiniteRotator = {
    init: function () {
      // Initial fade in time in milliseconds
      var initialFadeIn = 1000;
      // Interval between items
      var itemInterval = 5000;
      // Cross-fade time
      var fadeTime = 2500;
      // Count number of items
      var numberOfItems = $(".rotating-item").length;
      // Set current item
      var currentItem = 0;
      // Show first item
      $(".rotating-item").eq(currentItem).fadeIn(initialFadeIn);
      // Loop through the items
      var infiniteLoop = setInterval(function() {
        $(".rotating-item").eq(currentItem).fadeOut(fadeTime);

        if(currentItem == numberOfItems - 1) {
          currentItem = 0;
        } else {
          currentItem ++;
        }
        $(".rotating-item").eq(currentItem).fadeIn(fadeTime);

      }, itemInterval);
    }
  };
  infiniteRotator.init();
});
