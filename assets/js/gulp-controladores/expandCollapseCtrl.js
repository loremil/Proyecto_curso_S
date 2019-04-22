// menu expandible
cursosApp.controller('expandCollapseCtrl', function($scope) {
  $scope.active = true;
  $scope.active1 = true;
  $scope.active2 = true;
  $scope.active3 = true;
  $scope.active4 = true;
  $scope.active5 = true;
  $scope.active6 = true;
  $scope.menuMovil = true;
  $scope.mouseClickN = function(position) {
    $scope.activo[position] = "";
    $scope.visible[position] = true;
  }

});
// fin menu expandible
