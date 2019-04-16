cursosApp.controller('progress', function($scope, $interval) {
  $scope.progressval = 0;
  $scope.stopinterval = null;

  $scope.updateProgressbar = function() {
    startprogress();
  }

  function startprogress() {
    $scope.progressval = 0;

    if ($scope.stopinterval) {
      $interval.cancel($scope.stopinterval);
    }

    $scope.stopinterval = $interval(function() {
      $scope.progressval = $scope.progressval + 5;
      if ($scope.progressval >= 40) {
        $interval.cancel($scope.stopinterval);
        return;
      }
    }, 100);
  }
  startprogress();
});
