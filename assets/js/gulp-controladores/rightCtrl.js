cursosApp.controller('RightCtrl', function($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function() {
    // Component lookup should always be available since we are not using `ng-if`
    $mdSidenav('rights').close()
      .then(function() {
        $log.debug("close RIGHTs is done");
      });
  };
});
