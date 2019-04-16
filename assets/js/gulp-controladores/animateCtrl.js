/* Inicio scroll animación */
cursosApp.controller('animateCtrl', function($scope) {
  $scope.a_fadein = function($el) {
    $el.removeClass('no_visible');
    $el.addClass('a_fadein');
  };
  $scope.a_fadeup1 = function($el) {
    $el.removeClass('no_visible');
    $el.addClass('a_fadeup1');
  };
  $scope.a_fadeup2 = function($el) {
    $el.removeClass('no_visible');
    $el.addClass('a_fadeup2');
  };
  $scope.a_fadeup3 = function($el) {
    $el.removeClass('no_visible');
    $el.addClass('a_fadeup3');
  };
  $scope.a_fadeup4 = function($el) {
    $el.removeClass('no_visible');
    $el.addClass('a_fadeup4');
  };
  $scope.a_fadeleft1 = function($el) {
    $el.removeClass('no_visible');
    $el.addClass('a_fadeleft1');
  };
  $scope.a_fadeleft2 = function($el) {
    $el.removeClass('no_visible');
    $el.addClass('a_fadeleft2');
  };
  $scope.a_fadeleft3 = function($el) {
    $el.removeClass('no_visible');
    $el.addClass('a_fadeleft3');
  };

//Buscador
  $scope.show = [];
  $scope.toggleClick = function(view) {
     $scope.show[view] = !$scope.show[view] ;
  }
  var self = this;
    self.simulateQuery = false;
    self.isDisabled    = false;
    //fin buscador

});



/* Fin scroll animación */
