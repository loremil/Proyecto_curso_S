/// INICIO Patrimonio
cursosApp.controller('tablaPatrimonioCartola-detalleFFMM', function ($scope) {
  $scope.sort = '+';
  $scope.saldoInicial = [
    {
      resumen: "Saldo inicial",
      saldoInicial: "$817.563.318",
    },
  ];

  // Fondo Corporativo A
  $scope.fondoCorpA = [
    {
      fondo: "Corporativo A",
      saldo: "$500.036.355",
    },
  ];
  $scope.corpASaldoInicial = [
    {
      resumen: "Saldo inicial",
      saldoInicial: "$0",
    },
  ];
  $scope.corpAResumen = [
    {
      fecha: "12/12/2017",
      fondo: "Corporativo A",
      operacion: "Aporte - Cta. 3",
      noCuotas: "9.365,7530",
      valCuotas: "$30.168,6942",
      movimiento: "$282.552.538",
      saldo: "$282.552.538",
    },
    {
      fecha: "13/12/2017",
      fondo: "Corporativo A",
      operacion: "Aporte - Cta. 3",
      noCuotas: "6.240,6446",
      valCuotas: "$30.169,9114",
      movimiento: "$188.279.692",
      saldo: "$470.832.230",
    },
    {
      fecha: "14/12/2017",
      fondo: "Corporativo A",
      operacion: "Rescate - Cta. 3",
      noCuotas: "497,1442",
      valCuotas: "$30.172,3353",
      movimiento: "- $15.000.002",
      saldo: "$455.832.228",
    },
    {
      fecha: "15/12/2017",
      fondo: "Corporativo A",
      operacion: "Aporte - Cta. 3",
      noCuotas: "1.465,0549",
      valCuotas: "$30.172,3353",
      movimiento: "$44.204.127",
      saldo: "$500.036.355",
    },
    {
      fecha: "20/12/2017",
      fondo: "Corporativo A",
      operacion: "Rescate - Cta. 3",
      noCuotas: "16.574,3083",
      valCuotas: "$30.179,6128",
      movimiento: "- $500.206.207",
      saldo: "$0",
    },
  ];
  $scope.corpATotalIngreso = [
    {
      resumen: "Total Ingresos",
      totalIngreso: "$515.036.357",
    },
  ];
  $scope.corpATotalEgreso = [
    {
      resumen: "Total Egresos",
      totalEgreso: "- $515.206.209",
    },
  ];
  $scope.corpAVariacion = [
    {
      resumen: "Variación de Inversión",
      variacion: "$169.852",
    },
  ];
  $scope.corpASaldoFinal = [
    {
      resumen: "Saldo final",
      saldoFinal: "$0",
    },
  ];

  $scope.corpDollarResumen = [
    {
      fecha: "30/12/2017",
      fondo: "Corporate Dollar",
      operacion: "Aporte",
      noCuotas: "4,4283",
      valCuotas: "USD 1.218,76",
      movimiento: "USD 5.397,04",
      saldo: "USD 5.397,04",
    },
  ];

  // Fondo Disponible A
  $scope.fondoDispA = [
    {
      fondo: "Disponible A",
      saldo: "$1.105.001",
    },
  ];
  $scope.dispASaldoInicial = [
    {
      resumen: "Saldo inicial",
      saldoInicial: "$1.331.799",
    },
  ];
  $scope.dispAResumen = [
    {
      fecha: "15/12/2017",
      fondo: "Disponible A",
      operacion: "Aporte Pago David - Cta 8",
      noCuotas: "9,4040",
      valCuotas: "$39.104,6072",
      movimiento: "$367.738",
      saldo: "$1.699.537",
    },
    {
      fecha: "20/12/2017",
      fondo: "Disponible A",
      operacion: "Rescate - Cta. 8",
      noCuotas: "43,4735",
      valCuotas: "$39.110,2631",
      movimiento: "- $1.700.260",
      saldo: "$0",
    },
    {
      fecha: "22/12/2017",
      fondo: "Disponible A",
      operacion: "Aporte Pago David - Cta 8",
      noCuotas: "28,2457",
      valCuotas: "$39.111,2565",
      movimiento: "$1.104.725",
      saldo: "$1.104.725",
    },
  ];
  $scope.dispATotalIngreso = [
    {
      resumen: "Total Ingresos",
      totalIngreso: "$1.472.463",
    },
  ];
  $scope.dispATotalEgreso = [
    {
      resumen: "Total Egresos",
      totalEgreso: "- $1.700.260",
    },
  ];
  $scope.dispAVariacion = [
    {
      resumen: "Variación de Inversión",
      variacion: "$999",
    },
  ];
  $scope.dispASaldoFinal = [
    {
      resumen: "Saldo final",
      saldoFinal: "$1.105.001",
    },
  ];

  // Fondo Renta Futura D
  $scope.fondoRentFutD = [
    {
      fondo: "Renta Futura D",
      saldo: "$0",
    },
  ];
  $scope.rentFutDSaldoInicial = [
    {
      resumen: "Saldo inicial",
      saldoInicial: "$148.217.578",
    },
  ];
  $scope.rentFutDResumen = [
    {
      fecha: "20/12/2017",
      fondo: "Renta Futura D",
      operacion: "Rescate - Cta. 10",
      noCuotas: "105.818,5578",
      valCuotas: "$1.403,6829",
      movimiento: "-$148.535.700",
      movimiento: "$0",
    },
  ];
  $scope.rentFutDTotalIngreso = [
    {
      resumen: "Total Ingresos",
      totalIngreso: "$0",
    },
  ];
  $scope.rentFutDTotalEgreso = [
    {
      resumen: "Total Egresos",
      totalEgreso: "- $148.535.700",
    },
  ];
  $scope.rentFutDVariacion = [
    {
      resumen: "Variación de Inversión",
      variacion: "$318.122",
    },
  ];
  $scope.rentFutDSaldoFinal = [
    {
      resumen: "Saldo final",
      saldoFinal: "$0",
    },
  ];

  // Fondo Booster Japon
  $scope.fondoBoosterJap = [
    {
      fondo: "Booster Acciones Japón II",
      saldo: "$15.001.975",
    },
  ];
  $scope.boosterJapSaldoInicial = [
    {
      resumen: "Saldo inicial",
      saldoInicial: "$0",
    },
  ];
  $scope.boosterJapResumen = [
    {
      fecha: "14/12/2017",
      fondo: "Booster Acciones Japón II",
      operacion: "Aporte - Cta. 22",
      noCuotas: "14.994,8508",
      valCuotas: "$1.000,3434",
      movimiento: "$15.000.000",
      saldo: "$15.001.975",
    },
  ];
  $scope.boosterJapTotalIngreso = [
    {
      resumen: "Total Ingresos",
      totalIngreso: "$15.000.000",
    },
  ];
  $scope.boosterJapTotalEgreso = [
    {
      resumen: "Total Egresos",
      totalEgreso: "$0",
    },
  ];
  $scope.boosterJapVariacion = [
    {
      resumen: "Variación de Inversión",
      variacion: "$1.975",
    },
  ];
  $scope.boosterJapSaldoFinal = [
    {
      resumen: "Saldo final",
      saldoFinal: "$15.001.975",
    },
  ];

  // Fondo Booster Emergente
  $scope.fondoBoosterEmergente = [
    {
      fondo: "Booster Acciones Emergente",
      saldo: "$73.271.106",
    },
  ];
  $scope.boosterEmergenteSaldoInicial = [
    {
      resumen: "Saldo inicial",
      saldoInicial: "$71.245.842",
    },
  ];
  $scope.boosterEmergenteTotalIngreso = [
    {
      resumen: "Total Ingresos",
      totalIngreso: "$0",
    },
  ];
  $scope.boosterEmergenteTotalEgreso = [
    {
      resumen: "Total Egresos",
      totalEgreso: "$0",
    },
  ];
  $scope.boosterEmergenteVariacion = [
    {
      resumen: "Variación de valor cuota",
      variacion: "$2.025.264",
    },
  ];
  $scope.boosterEmergenteSaldoFinal = [
    {
      resumen: "Saldo final",
      saldoFinal: "$73.271.106",
    },
  ];

  // Fondo Booster Europa
  $scope.fondoBoosterEur = [
    {
      fondo: "Booster Acciones Europa II",
      saldo: "$404.848.840",
    },
  ];
  $scope.boosterEurSaldoInicial = [
    {
      resumen: "Saldo inicial",
      saldoInicial: "$408.709.519",
    },
  ];
  $scope.boosterEurTotalIngreso = [
    {
      resumen: "Total Ingresos",
      totalIngreso: "$0",
    },
  ];
  $scope.boosterEurTotalEgreso = [
    {
      resumen: "Total Egresos",
      totalEgreso: "$0",
    },
  ];
  $scope.boosterEurVariacion = [
    {
      resumen: "Variación de valor cuota",
      variacion: "$3.860.679",
    },
  ];
  $scope.boosterEurSaldoFinal = [
    {
      resumen: "Saldo final",
      saldoFinal: "$404.848.840",
    },
  ];

  // Fondo Inv Acc Nacionales
  $scope.fondoInvAccNacionales = [
    {
      fondo: "Inversionista Calificado Acciones Nacionales A",
      saldo: "$172.980.952",
    },
  ];
  $scope.invAccNacionalesSaldoInicial = [
    {
      resumen: "Saldo inicial",
      saldoInicial: "$188.058.579",
    },
  ];
  $scope.invAccNacionalesResumen = [
    {
      fecha: "14/12/2017",
      fondo: "Inversionista Calificado Acciones Nacionales A",
      operacion: "Aporte Reinversión Rep. Div. - Cta. 21",
      noCuotas: "169,6620",
      valCuotas: "$1.639,7721",
      movimiento: "$278.207",
      saldo: "$188.336.786",
    },
    {
      fecha: "19/12/2017",
      fondo: "Inversionista Calificado Acciones Nacionales A",
      operacion: "Aporte Reinversión Rep. Div. - Cta. 21",
      noCuotas: "10,7543",
      valCuotas: "$1.857,2166",
      movimiento: "$19.973",
      saldo: "$188.356.759",
    },
    {
      fecha: "21/12/2017",
      fondo: "Inversionista Calificado Acciones Nacionales A",
      operacion: "Rescate - Cta. 21",
      noCuotas: "22.854,4005",
      valCuotas: "$1.831,1572",
      movimiento: "- $41.850.000",
      saldo: "$146.506.759",
    },
    {
      fecha: "28/12/2017",
      fondo: "Inversionista Calificado Acciones Nacionales A",
      operacion: "Aporte Reinversión Rep. Div. - Cta. 21",
      noCuotas: "6,5406",
      valCuotas: "$1.834,6972",
      movimiento: "$12.000",
      saldo: "$$172.980.952",
    },
  ];
  $scope.invAccNacionalesTotalIngreso = [
    {
      resumen: "Total Ingresos",
      totalIngreso: "$310.180",
    },
  ];
  $scope.invAccNacionalesTotalEgreso = [
    {
      resumen: "Total Egresos",
      totalEgreso: "- $41.850.000",
    },
  ];
  $scope.invAccNacionalesVariacion = [
    {
      resumen: "Variación de valor cuota",
      variacion: "$26.462.193",
    },
  ];
  $scope.invAccNacionalesSaldoFinal = [
    {
      resumen: "Saldo final",
      saldoFinal: "$172.980.952",
    },
  ];

  $scope.totalIngreso = [
    {
      resumen: "Total ingresos",
      totalIngreso: "$619.045.350",
    },
  ];
  $scope.totalEgreso = [
    {
      resumen: "Total egresos",
      totalEgreso: "- $707.292.169",
    },
  ];
  $scope.saldoFinal = [
    {
      resumen: "Saldo final",
      fecha: "31/12/2017",
      saldoFinal: "$754.477.859",
    },
  ];
  $scope.saldoInicialCLP = [
    {
      resumen: "Saldo inicial de Fondos en Pesos Chilenos",
      fecha: "01/12/2017",
      saldoFinal: "$754.477.859",
    },
  ];
  $scope.saldoFinalCLP = [
    {
      resumen: "Saldo final de Fondos en Pesos Chilenos",
      fecha: "30/12/2017",
      saldoFinal: "$754.477.859",
    },
  ];
  $scope.saldoInicialUSD = [
    {
      resumen: "Saldo inicial",
      resumenLargo: "Saldo Final de Fondos equivalente en Dólares",
      fecha: "30/12/2017",
      saldoInicial: "USD 5.393,51",
    },
  ];
  $scope.saldoFinalUSD = [
    {
      resumen: "Saldo final",
      resumenLargo: "Saldo Final de Fondos equivalente en Dólares",
      fecha: "30/12/2017",
      saldoFinal: "USD 5.397,04",
    },
  ];
});
