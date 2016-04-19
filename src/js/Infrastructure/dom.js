(function(){
  // DOMcumentLoad
  angular.element(document).ready(function () {
    console.log('dom loaded1');
    // Your document is ready, place your code here
  });

  //Window Load
  angObj.run(['$window', function($window) {
    $window.onload = function() {
        console.log("window load");
    };
  }]);
})();
