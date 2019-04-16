cursosApp.controller('tablaFondoMutuos', function($scope) {

  $scope.sort = '+';
  $scope.fondom = [

    {
      porcent: "0,1%",
      product: "RETORNO ACCIONARIO",
      mont: "$12.600.000"
    }, {
      porcent: "0,3%",
      product: "RENTA FUTURA D",
      mont: "$5.400.000"
    }

  ];
  $scope.fondomClp = [
    {
      porcent: "0,1%",
      product: "ASIÁTICO ACCIONARIO",
      mont: "$7.200.000"
    }

  ];
  $scope.cuenta = [{
      cuenta: "Cuenta 1"
    }, {
      cuenta: "Cuenta 2"
    }

  ];
});
