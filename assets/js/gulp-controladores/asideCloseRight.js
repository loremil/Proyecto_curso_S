cursosApp.controller('asideCloseRight', function($scope, $timeout, $mdSidenav, $log, $rootScope) {

  $scope.isDisabled = "";
  $rootScope.fondosAPV = [];
  $scope.close = function() {
    $scope.mostrarActualizarDatos = true;
    // Component lookup should always be available since we are not using `ng-if`
    // reinversion- jorge01
    $mdSidenav('right').close()
      .then(function() {
        $log.debug("close RIGHT is done");
        $scope.showDiv = true;
        angular.element(document.getElementById('solicFondoMCtrl')).scope().mostrarReinversion = true;
        // angular.element(document.getElementById('solicFondoMCtrl')).scope().mostrarCartera = false;
        $rootScope.mostrarReinversionGlobal = true;

        if (!$rootScope.fondoMutuoReinversionSelected) {
          angular.element(document.getElementById('solicFondoMCtrl')).scope().formData.destino = '';
        }
      });
    $mdSidenav('right2').close()
      .then(function() {
        $log.debug("close RIGHT is done");
        $scope.showDiv = true;
        // angular.element(document.getElementById('solicFondoMCtrl')).scope().mostrarCartera = true;
        angular.element(document.getElementById('solicFondoMCtrl')).scope().mostrarReinversion = false;
        $rootScope.fondosAPV[$rootScope.position] = {};
      });
    $mdSidenav('right3').close()
      .then(function() {
        $log.debug("close RIGHT is done");
        $scope.showDiv = true;
        //angular.element(document.getElementById('solicFondoMCtrl')).scope().mostrarReinversion = false;
        // angular.element(document.getElementById('solicFondoMCtrl')).scope().mostrarAlertSeleccionar = tr;
      });
    $mdSidenav('right4').close()
      .then(function() {
        $log.debug("close RIGHT is done");
        $scope.showDiv = true;

        angular.element(document.getElementById('solicFondoMCtrl')).scope().mostrarCartera = true;
        angular.element(document.getElementById('solicFondoMCtrl')).scope().mostrarReinversion = false;
      });


  };
  $scope.links= [{
      "link": '#/buscador-sitio',
    }];

  $scope.data = {
      nombres: "Gissell",
      rut: "96.456.345-k",
      rut2: "94.345.245-k",
      pais: '1',
      region: '1',
      estado: '1',
      ciudad: '1',
      comuna: '1',
      nombreCalle: "Ricardo Lyon",
      numeroCalle: "1206",
      block: "806",
      rrhh: "Javiera Mena",
      fono: "+59 978896065",
      email: "javiera.mena@company.cl",
    };
    $scope.isActive = function () {
      if ($scope.razonSocial == "1") {
        return true;
      } else {
        return false;
      }
    }

});
