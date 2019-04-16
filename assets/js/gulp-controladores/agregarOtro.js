// controlador Agregar otro fomulario
cursosApp.controller('agregarOtro', ["$scope", "$rootScope", function ($scope, $rootScope) {

  /* INICIO VALIDACIONES ENROLAMIENTO */
  $scope.pais = false;
  $scope.region = false;
  $scope.estado = false;
  $scope.ciudad = false;
  $scope.comuna = false;
  $scope.tipo = false;
  $scope.nombre02 = false;
  $scope.numero02 = false;
  $scope.block02 = false;
  $scope.codigo02 = false;
  $scope.clasificicacion02 = false;

  $scope.fono02 = false;
  $scope.tipo02 = false;
  $scope.clasif02 = false;

  $scope.email02 = false;

  $scope.cuenta02 = false;
  $scope.banco02 = false;
  $scope.nacionalidad02 = false;
  $scope.moneda02 = false;
  $scope.tipoCuenta02 = false;

  $scope.checkValue = function (typeCheck) {
    switch (typeCheck) {
      case 'pais':
        $scope.pais = true;
        break;
      case 'region':
        $scope.region = true;
        break;
      case 'estado':
        $scope.estado = true;
        break;
      case 'ciudad':
        $scope.ciudad = true;
        break;
      case 'comuna':
        $scope.comuna = true;
        break;
      case 'tipo':
        $scope.tipo = true;
        break;
      case 'nombre02':
        $scope.tipo = true;
        break;
      case 'numero02':
        $scope.tipo = true;
        break;
      case 'block02':
        $scope.tipo = true;
        break;
      case 'codigo02':
        $scope.tipo = true;
        break;
      case 'clasificicacion02':
        $scope.clasificicacion = true;
        break;

      case 'fono02':
        $scope.tipo2 = true;
        break;
      case 'tipo02':
        $scope.tipo2 = true;
        break;
      case 'clasif02':
        $scope.clasif = true;
        break;

      case 'email02':
        $scope.emailPrincipal = true;
        break;

      case 'cuenta02':
        $scope.banco = true;
        break;
      case 'banco02':
        $scope.banco = true;
        break;
      case 'nacionalidad02':
        $scope.nacionalidad = true;
        break;
      case 'moneda02':
        $scope.moneda = true;
        break;
      case 'tipoCuenta02':
        $scope.tipoCuenta = true;
        break;
    }
  }
  /* FIN VALIDACIONES ENROLAMIENTO */

  $scope.validaCamposServicio = function () {

  }

  $scope.mostrarBoton = false;
  $scope.items = [{
    alias: 'Proveedor de Metales',
    nombre: 'Juan Pérez',
    pais: '2',
    direccion: 'Huérfanos 670',

    nombreBanco: '3',
    direccionBanco: 'Huérfanos 670',
    paisBanco: '2',
    cuenta: '1',
    monedaBanco: '1',
    codigoSwiftBanco: '882349',
    codigoAbaBanco: 'Aba 89234-2424',
    codigoIbanBanco: '12313 IBAN',
    nombreSelect: '2',

    nombreBanco2: 'Banco de Perú',
    direccionBanco2: 'Avenida 670',
    paisBanco2: '1',
    cuenta2: '2',
    monedaBanco2: '2',
    codigoSwiftBanco2: '882349',
    codigoAbaBanco2: 'Aba 89234-2424',
    codigoIbanBanco2: '12313 IBAN',

  }];

  $scope.items2 = [{
  }];

  $scope.items3 = [{
  }];
  $scope.items4 = [{
  }];

  $scope.fondos = [
    {
      fondo: 'Rendimiento Corto Plazo Serie B',
      monto: '200.000',
      uf: '7,32',
      porcentaje: '70',
    },
    {
      fondo: 'Corporate Dollar Serie B',
      monto: '100.000',
      uf: '3,66',
      porcentaje: '30',
    },
  ];




  $scope.fondosAPV = [];

  $scope.$watch(function () {
    return $rootScope.mostrarReinversionGlobal;
  }, function () {
    console.log("entre");
    $scope.mostrarReinversion = $rootScope.mostrarReinversionGlobal;
  });


  $scope.$watch(function () {
    return $rootScope.fondosAPV;
  }, function () {
    $scope.fondosAPV = $rootScope.fondosAPV;
  });

  $scope.setPositionAndOpen = function (position) {
    $rootScope.position = position;
    $scope.toggleRight2();
  };

  $scope.add = function () {
    $scope.items.push({});
  };

  $scope.add2 = function () {
    $scope.apv.push({});
  };

  $scope.add3 = function () {
    $scope.items2.push({});
  };

  $scope.add4 = function () {
    $scope.items3.push({});
  };
  $scope.add5 = function () {
    $scope.items4.push({});
  };

  $scope.remove = function (index) {
    $scope.items.splice(index, 1);
  };
  $scope.remove2 = function (index) {
    $scope.items2.splice(index, 1);
  };
  $scope.remove3 = function (index) {
    $scope.items3.splice(index, 1);
  };
  $scope.remove4 = function (index) {
    $scope.items4.splice(index, 1);
  };

  $scope.removeFondosAPV = function (index) {
    $rootScope.fondosAPV.splice(index, 1);
  };

  $scope.removerSeleccionado = function () {

    $rootScope.mostrarReinversionGlobal = false;
  };

  $scope.isActive = function () {
    if ($scope.pagarDesde == "1") {
      return true;
    } else {
      return false;
    }
  }
  $scope.closeMarco = function() {
    $scope.mostrarMarcoActuacion = true;
  }
  $scope.showHints = true;

  $scope.actualizar = {
      nombres: "Gissell",
      rut: "23.456.789-k",
      paterno: "Aguilar",
      materno: "Porras",
      sexo: '2',
      nacionalidad: '1',
      apellido: "Porras",
      pais: '1',
      region: '1',
      estado: '1',
      ciudad: '1',
      comuna: '1',
      calle: '1',
      nombreCalle: "Ricardo Lyon",
      numeroCalle: "1206",
      block: "806",
      clasificicacion: '1',
      emailPrincipal: "",


    };
  $scope.nameIsError= true;


}]);
