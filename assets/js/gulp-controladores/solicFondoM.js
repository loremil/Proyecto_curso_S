//solicitud aporte fondos mutuos-- Reinversión--jorge01
cursosApp.controller('solicFondoM', function($scope, $timeout, $mdSidenav, $log, $mdMedia, $mdComponentRegistry, $rootScope) {
  $scope.formData = {};
  $scope.sort = '+';
  $scope.solicfm = [{
    fondo: "Disponible",
    ncuenta: "$30.985,0979",
    moneda: "Pesos Chilenos",
    monto: "No tiene"
  }];




  $scope.$watch(function () {
    return $rootScope.fondoMutuoReinversionSelected;
  }, function(){
    $scope.fondoMutuoReinversionSelected = $rootScope.fondoMutuoReinversionSelected;
  }, true);


  $scope.showHints = true;

  $scope.rProgramado = function (clicked) {
       $scope.rProgramadoShow = clicked == true ? false : true;
   };

  $scope.ctrl = {};

  $scope.crearBeneficiarioMostar = false;
  $scope.crearBeneficiarioOcultar = false;
  $scope.botonOcultar = false;


  $scope.toggleLeft = buildDelayedToggler('left');
  $scope.toggleRight = buildDelayedToggler('right');
  // $scope.toggleRight = buildToggler('right');
  $scope.toggleRight2 = buildToggler('right2');
  $scope.toggleRight3 = buildToggler('right3');
  $scope.toggleRight4 = buildToggler('right4');



  $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };


  $scope.mostrarReinversion = false;

  $scope.mostrarCartera = false;
  $scope.aporte = {
      monto: '$'
    };

  // $scope.mostrarAlertSeleccionar = false;
  $scope.miVariable = false;

  $scope.mostarOcultar = function () {
      $scope.miVariable = !$scope.mivariable;
  };

  $scope.$watch('formData.destino', function() {
    console.log($scope.formData.destino);
    // $scope.mostrarReinversion = false;
    $scope.mostrarCartera = false;
    // $scope.$apply();
  },true);

  $scope.openSideNavRight = function () {

      $mdComponentRegistry.when( 'right' ).then( function () {
        $mdSidenav('right').toggle();
        $mdSidenav('right').open();
      });

      $mdSidenav('right').toggle();
      $mdSidenav('right').open();
  }

  $scope.databeneficiarioFunc = function() {
        $scope.crearBeneficiarioMostrar=true;
        $scope.crearBeneficiarioOcultar=true;
        $scope.botonOcultar=true;
  };


  /**
   * Supplies a function that will continue to operate until the
   * time is up.
   */
  function debounce(func, wait, context) {
    var timer;

    return function debounced() {
      var context = $scope,
        args = Array.prototype.slice.call(arguments);
      $timeout.cancel(timer);
      timer = $timeout(function() {
        timer = undefined;
        func.apply(context, args);
      }, wait || 10);
    };
  }

  /**
   * Build handler to open/close a SideNav; when animation finishes
   * report completion in console
   */
  function buildDelayedToggler(navID) {
    return debounce(function() {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav(navID)
        .toggle()
        .then(function() {
          $log.debug("toggle " + navID + " is done");
        });
    }, 200);
  }

  function buildToggler(navID) {
    return function() {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav(navID)
        .toggle()
        .then(function() {
          $log.debug("toggle " + navID + " is done");
        });
    };
  }
  $scope.data = {
      group1 : '',
      group2 : '',
      group3 : ''
    };
  $scope.radioData = [
      { label: 'Régimen A' },
      { label: 'Régimen B' }
    ];
    $scope.radioData4 = [
        { label: 'Único', value: 0 },
        { label: 'Sistemático', value: 0 }
      ];
    $scope.radioData3 = [
        { label: 'Si', value: 1 },
        { label: 'No', value: 2 }
      ];
    $scope.dataAPV = {
      email: 'ipsum@lorem.com',
      nombreRazon: 'Software Company',
      rut: '91.445.543-k',
      estado: 'Santiago',
      estado2: 'Arica',
      estado3: 'Iquique',
      ciudad: 'Santiago',
      comuna: 'Providencia',
      calle: 'José Miguel Claro',
      numero: '340',
      block: '72A',
      rrhh: 'Sofía Contreras',
      fono: '9 87674356',
      email: 'scontreras@software.cl',
      monto1: '200.000',
      uf: '7,36',
      porcentaje: '50',
      monto3: '1.700.000',
      dependiente: 'Dependiente',
      Empleador:"Empleador",
    };
    $scope.dataBeneficiario = {
      beneficiario1: 'FREYA CASA',
      beneficiario2: 'ALL_MIGHT',
      bancoCuenta1: 'Banco Chile 123456789',
      bancoCuenta2: 'Banco Chile 123456789',
      bancoCuenta3: 'Banco Chile 123456789',
      pago1: '20470 - Comisiones por actividad',
      pago2: '20470 - Comisiones por actividad',
      pago3: '20470 - Comisiones por actividad',
      pais1: 'Argentina',
      pais2: 'Perú',
      pais3: 'Chile',
      pais3: 'Dinamarca',
    };
    $scope.activated= false;

    $scope.$watch('activated', function(){
        $scope.activatedText = $scope.activated ? 'Guardar' : 'Agregar ';
    })

    $scope.activar = function() {
        $scope.activated = true;
        return false;
    }

  $scope.data = {
    group1 : '1',
    group2 : '2',
    group3 : '1'
  };
$scope.radioData = [
    { label: 'Régimen A', value: 1 },
    { label: 'Régimen B', value: 2 }
  ];
  $scope.radioData2 = [
      { label: 'Régimen B', value: 2 }
    ];
  $scope.radioData3 = [
      { label: 'Si', value: 1 },
      { label: 'No', value: 2 }
    ];

  $scope.activated= false;

  $scope.civil= true;

$scope.show= true;
$scope.disabled= false;

  $scope.apvShow = true;

  $scope.addAPV= function() {
    $scope.apvShow = false;

  };
  $scope.descuento = "Empleador";


});
