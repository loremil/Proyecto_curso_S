///// CONTROLADORES DEL MENU DE NAVEGACION PRIVADO Y PUBLICO, HOME, RESUMEN THIAGO SOARES //////
cursosApp.controller('menuLoginCtrl', function($scope, $mdPanel) {
  $scope.active6 = false;
  $scope._mdPanel = $mdPanel;
  $scope.showMenuLogin = function(event) {
    // var position = $scope._mdPanel.newPanelPosition()
    //      .relativeTo('.menuLogin--despliegue')
    //      .addPanelPosition($scope._mdPanel.xPosition.ALIGN_START, // $scope._mdPanel.yPosition.BELOW);
    var position = $scope._mdPanel.newPanelPosition()
      .absolute()
      .right('-300px')
      .top();
    var animation = $scope._mdPanel.newPanelAnimation();
    animation.withAnimation({
      open: 'login--open',
      close: 'login--close '
    });
    var config = {
      attachTo: angular.element(document.body),
      templateUrl: 'menuLogin.tmpl.html',
      position: position,
      animation: animation,
      clickOutsideToClose: true,
      escapeToClose: true,
      focusOnOpen: false,
      zIndex: 200,
      controller: MenuLoginPopUpCtrl
    };
    $scope._mdPanel.open(config);
  };

  function MenuLoginPopUpCtrl($scope) {
    $scope.active1 = true;
    $scope.active2 = true;
    $scope.active3 = true;
    $scope.clickMenu = function(itemMenu) {
      if (itemMenu == 1) {
        $scope.active1 = !$scope.active1;
        $scope.active2 = true;
        $scope.active3 = true;
      } else if (itemMenu == 2) {
        $scope.active1 = true;
        $scope.active2 = !$scope.active2;
        $scope.active3 = true;
      } else if (itemMenu == 3) {
        $scope.active1 = true;
        $scope.active2 = true;
        $scope.active3 = !$scope.active3;
      }
    };
  };
});
