// inicio tabla Indicadores
cursosApp.controller('tablaIndicadores', function($scope) {

  //Color Variacion Acciones y Tendencias
  $scope.indicador =
    function(variacion) {
      if (variacion <= -0.01) {
        return "valor--td__rojo";
      }
      if (variacion >= 0.01) {
        return "valor--td__verde";
      }
      if (variacion == 0.0) {
        return "valor--td__amarillo";
      }
    }
  $scope.isDisabled = true;
  $scope.sort = '+';
  $scope.accionesCartera = [{
      indice: "IPSA",
      valor: "$5.236,26",
      variacion: -0.05,
      fecha: "08/08/2017",
      tendencia: "S"
    },
    {
      indice: "IGPA",
      valor: "$5.236,26",
      variacion: 10.73,
      fecha: "08/08/2017",
      tendencia: "B"
    },
    {
      indice: "INTER-10",
      valor: "$5.236,26",
      variacion: -0.0,
      fecha: "08/08/2017",
      tendencia: "B"
    },
    {
      indice: "IGPA LARGE",
      valor: "$5.236,26",
      variacion: 91.47,
      fecha: "08/08/2017",
      tendencia: "B"
    },
    {
      indice: "IGPA MID",
      valor: "$5.236,26",
      variacion: -10.73,
      fecha: "08/08/2017",
      tendencia: "S"
    },
    {
      indice: "IGPA SMALL",
      valor: "$5.236,26",
      variacion: -10.73,
      fecha: "08/08/2017",
      tendencia: "S"
    },
    {
      indice: "BANCA",
      valor: "$5.236,26",
      variacion: -10.73,
      fecha: "08/08/2017",
      tendencia: "S"
    },
    {
      indice: "COMMODITIES",
      valor: "$5.236,26",
      variacion: -2.73,
      fecha: "08/08/2017",
      tendencia: "B"
    },
    {
      indice: "CONST&INMOB",
      valor: "$5.236,26",
      variacion: 1.73,
      fecha: "08/08/2017",
      tendencia: "S"
    },
  ];

  $scope.resumenMoneda = [{
      moneda: "USD/CLP",
      paridad: "$624,35",
      variacion: -0.05,
      fecha: "13:24:00",
      tendencia: "S"
    },
    {
      moneda: "EUR/USD",
      paridad: "1.1905",
      variacion: 10.73,
      fecha: "14:28:00",
      tendencia: "B"
    },
    {
      moneda: "USD/BRL",
      paridad: "3,1180",
      variacion: -0.0,
      fecha: "14:28:00",
      tendencia: "B"
    },
    {
      moneda: "USD/JPY",
      paridad: "108,8560",
      variacion: 91.47,
      fecha: "14:28:00",
      tendencia: "B"
    },
    {
      moneda: "GBP/USD",
      paridad: "1.3016",
      variacion: -10.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
    {
      moneda: "AUD/USD",
      paridad: "0,7984",
      variacion: -10.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
    {
      moneda: "USD/CNY",
      paridad: "6,5463",
      variacion: -10.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
    {
      moneda: "USD/ARS",
      paridad: "17,0000",
      variacion: -2.73,
      fecha: "14:28:00",
      tendencia: "B"
    },
    {
      moneda: "USD/MXN",
      paridad: "17,9873",
      variacion: 1.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
    {
      moneda: "USD/CAD",
      paridad: "1,1234",
      variacion: 1.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
  ];
  $scope.resumenFFMutuos = [{
      fondo: "Ahorro serie A",
      dias:"",
      paridad: "$624,35",
      variacion: -0.05,
      fecha: "13:24:00",
      tendencia: "S"
    },
    {
      moneda: "EUR/USD",
      paridad: "1.1905",
      variacion: 10.73,
      fecha: "14:28:00",
      tendencia: "B"
    },
    {
      moneda: "USD/BRL",
      paridad: "3,1180",
      variacion: -0.0,
      fecha: "14:28:00",
      tendencia: "B"
    },
    {
      moneda: "USD/JPY",
      paridad: "108,8560",
      variacion: 91.47,
      fecha: "14:28:00",
      tendencia: "B"
    },
    {
      moneda: "GBP/USD",
      paridad: "1.3016",
      variacion: -10.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
    {
      moneda: "AUD/USD",
      paridad: "0,7984",
      variacion: -10.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
    {
      moneda: "USD/CNY",
      paridad: "6,5463",
      variacion: -10.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
    {
      moneda: "USD/ARS",
      paridad: "17,0000",
      variacion: -2.73,
      fecha: "14:28:00",
      tendencia: "B"
    },
    {
      moneda: "USD/MXN",
      paridad: "17,9873",
      variacion: 1.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
    {
      moneda: "USD/CAD",
      paridad: "1,1234",
      variacion: 1.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
  ];

  $scope.resumenFFMM = [{
      moneda: "USD/CLP",
      paridad: "$624,35",
      variacion: -0.05,
      fecha: "13:24:00",
      tendencia: "S"
    },
    {
      moneda: "EUR/USD",
      paridad: "1.1905",
      variacion: 10.73,
      fecha: "14:28:00",
      tendencia: "B"
    },
    {
      moneda: "USD/BRL",
      paridad: "3,1180",
      variacion: -0.0,
      fecha: "14:28:00",
      tendencia: "B"
    },
    {
      moneda: "USD/JPY",
      paridad: "108,8560",
      variacion: 91.47,
      fecha: "14:28:00",
      tendencia: "B"
    },
    {
      moneda: "GBP/USD",
      paridad: "1.3016",
      variacion: -10.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
    {
      moneda: "AUD/USD",
      paridad: "0,7984",
      variacion: -10.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
    {
      moneda: "USD/CNY",
      paridad: "6,5463",
      variacion: -10.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
    {
      moneda: "USD/ARS",
      paridad: "17,0000",
      variacion: -2.73,
      fecha: "14:28:00",
      tendencia: "B"
    },
    {
      moneda: "USD/MXN",
      paridad: "17,9873",
      variacion: 1.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
    {
      moneda: "USD/CAD",
      paridad: "1,1234",
      variacion: 1.73,
      fecha: "14:28:00",
      tendencia: "S"
    },
  ];

  for (var i = 0; i < $scope.accionesCartera.length; i++) {
    if ($scope.accionesCartera[i].tendencia == 'S') {
      $scope.accionesCartera[i].icono = '&#xE5C7;';
    } else if ($scope.accionesCartera[i].tendencia == 'B') {
      $scope.accionesCartera[i].icono = "&#xE5C5;";
    }
  }

});
// fin tabla Indicadores
