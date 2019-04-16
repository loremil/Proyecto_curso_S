/// INICIO Patrimonio
cursosApp.controller('tablaPatrimonioCartolaWealth', function ($scope) {
  $scope.patrimonioClpTotal = [
    {
      producto: "Total nacional",
      saldoInicial: "$1.008.850.000",
      saldoFinal: "$1.010.000.000",
      rentabilidad: "3,00%",
    },
  ];
  $scope.patrimonioClp = [
    {
      producto: "Caja",
      saldoInicial: "$200.000",
      saldoFinal: "$100.000",
      rentabilidad: "0,00%",
    },
    {
      producto: "Acciones Locales",
      saldoInicial: "$310.00",
      saldoFinal: "$1.500.000",
      rentabilidad: "1,00%",
    },
    {
      producto: "Fondos Mutuos",
      saldoInicial: "$1.400.900.000",
      saldoFinal: "$1.500.000.000",
      rentabilidad: "0,50%",
    },
    {
      producto: "Fondos de Inversión",
      saldoInicial: "$90.000",
      saldoFinal: "$200.000",
      rentabilidad: "0,50%",
    },
    {
      producto: "Cartera Activa",
      saldoInicial: "$2.900.000",
      saldoFinal: "$3.000.000",
      rentabilidad: "0,50%",
    },
    {
      producto: "Renta Fija",
      saldoInicial: "$90.00",
      saldoFinal: "$100.000",
      rentabilidad: "1,50%",
    },
  ];
  $scope.patrimonioClpCuentas = [
    {
      cuenta: "Cuenta 98",
      saldoInicial: "$200.000",
      saldoFinal: "$100.000",
      rentabilidad: "0,00%",
    },
    {
      cuenta: "Cuenta 99",
      saldoInicial: "$310.000",
      saldoFinal: "$1.500.000",
      rentabilidad: "1,00%",
    },
    {
      cuenta: "Cuenta 100",
      saldoInicial: "$1.004.900.000",
      saldoFinal: "$1.005.000",
      rentabilidad: "0,50%",
    },
  ];
  $scope.patrimonioCuentaTotal = [
    {
      producto: "Total nacional",
      saldoInicial: "$1.008.850.000",
      saldoFinal: "$1.010.000.000",
      rentabilidad: "3,00%",
    },
    {
      producto: "Total APV",
      saldoInicial: "$1.017.850.000",
      saldoFinal: "$1.020.000.000",
      rentabilidad: "0,80%",
    },
    {
      producto: "Total Internacional",
      saldoInicial: "USD 100.300,00",
      saldoFinal: "USD 100.200,00",
      rentabilidad: "0,50%",
    },
  ];
  $scope.patrimonioUsdNacional = [
    {
      producto: "Fondos Mutuos",
      saldoInicial: "USD 100.300,00",
      saldoFinal: "USD 100.200,00",
      rentabilidad: "0,30%",
    },
  ];
  $scope.patrimonioUsdInternacional = [
    {
      producto: "Acciones Internacionales",
      saldoInicial: "USD 100.200,00",
      saldoFinal: "USD 100.700,00",
      rentabilidad: "0,10%",
    },
    {
      producto: "Pershing",
      saldoInicial: "USD 100.100,00",
      saldoFinal: "USD 100.300,00",
      rentabilidad: "1,75%",
    },
  ];
  $scope.patrimonioResumenPeriodo = [
    {
      producto: "Aportes / Compras",
      saldo: "$1.750.000",
    },
    {
      producto: "Rescates / Ventas",
      saldo: "$250.000",
    },
    {
      producto: "Variación del período",
      saldo: "1.150.000",
    },
  ];
  $scope.patrimonioResumenSaldo = [
    {
      producto: "Saldo al 30/10/2017",
      saldo: "$1.020.000.000",
    },
  ];
  $scope.patrimonioResumenTotal = [
    {
      producto: "Inversión neta",
      saldo: "$5.154.256.255",
    },
  ];
  $scope.patrimonioResumenProceso = [
    {
      producto: "Aportes / Compras",
      saldo: "$1.750.000",
    },
    {
      producto: "Rescates / Ventas",
      saldo: "$250.000",
    },
  ];
  $scope.patrimonioResumenDerivados = [
    {
      producto: "Simultáneas",
      saldo: "$8.000.3000",
    },
    {
      producto: "Venta Corta",
      saldo: "$5.340.000",
    },
    {
      producto: "Forward",
      saldo: "$2.015.025",
    },
  ];
  $scope.patrimonioResumenGarantias = [
    {
      producto: "Simultáneas",
      saldo: "$8.000.3000",
    },
    {
      producto: "Venta Corta",
      saldo: "$5.340.000",
    },
    {
      producto: "Forward",
      saldo: "$2.015.025",
    },
  ];
});
