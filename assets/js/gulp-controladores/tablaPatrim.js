/// INICIO Patrimonio
cursosApp.controller('tablaPatrim', function($scope) {
  $scope.sort = '+';
  $scope.patrimonio = [
    {
      producto: "90% Fondos Mutuos en CLP",
      monto: "$36.000.000"
    }, {
      producto: "5% Fondos Mutuos en USD",
      monto: "USD $5.000,00"
    }, {
      producto: "5% Fondos Mutuos en EUR",
      monto: "€ 30.000,00"
    }
  ];
  $scope.acciones = [
    {
      porcent: "7%",
      producto: "AGUAS-A",
      monto: "$121.623,000",
      ingresos: "$0,000",
      egresos: "$0,000",
      cambio: "$12.600,000",
      saldo: "134.223,000"
    },
    {
      porcent: "14%",
      producto: "SALFACORP",
      monto: "$790.500,000",
      ingresos: "$59.500,000",
      egresos: "$170.000,000",
      cambio: "$2.439,010",
      saldo: "677.560,990"
    },
    {
      porcent: "12%",
      producto: "CONCHATORO",
      monto: "$593.340,030",
      ingresos: "$53.940,000",
      egresos: "$0,000",
      cambio: "$8.930,080",
      saldo: "638.349,950"
    }
  ];
  $scope.rentaf = [

    {
      porcent: "15%",
      producto: "Renta Fija en CLP",
      monto: "$6.000.000"
    }

  ];
  $scope.totalclp1 = [

    {
      producto: "Fondos Mutuos",
      monto: "$36.000.000"
    }

  ];
  $scope.totalclp2 = [

    {
      producto: "Acciones",
      monto: "$18.000.000"
    }

  ];
  $scope.totalclp3 = [

    {
      producto: "Renta Fija",
      monto: "$6.000.000"
    }

  ];
  $scope.fondom = [

    {
      porcent: "1%",
      producto: "Balanceado",
      monto: "$12.600.000"
    }, {
      porcent: "1%",
      producto: "Deuda de largo plazo",
      monto: "$5.400.000"
    }, {
      porcent: "0,5%",
      producto: "Deuda de largo plazo",
      monto: "$7.200.000"
    }, {
      porcent: "0,5%",
      producto: "Money market",
      monto: "$10.800.000"
    }

  ];
  $scope.fondopay = [

    {
      porcent: "",
      producto: "Money Market",
      monto: ""
    }

  ];
  $scope.carteraActiva = [{
      cartera: "Cartera Protegida",
      monto: "$18.000.000",
      porcent: "15%"
    },
    {
      cartera: "Cartera Defensiva",
      monto: "$5.400.000",
      porcent: "25%"
    },
    {
      cartera: "Cartera Controlada",
      monto: "$5.400.000",
      porcent: "65%"
    }
  ];

});
