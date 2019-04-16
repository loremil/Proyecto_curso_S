/// INICIO Patrimonio
cursosApp.controller('tablaPatrimonioCartola', function ($scope) {
  $scope.patrimonioMonto =
    function (valor) {
      if (valor <= -0.01) {
        return "td--montoNegativo";
      }
      if (valor >= 0.01) {
        return "td--montoPositivo";
      }
      if (valor == 0.0) {
        return "td--montoNeutro";
      }
    }
  $scope.isDisabled = true;
  $scope.patrimonioTop5 = [
    {
      activo: "CENCOSUD",
      peso: "20%",
      monto: "$ 20.876.098",
    },
    {
      activo: "COPEC",
      peso: "10%",
      monto: "$ 10.000.001",
    },
    {
      activo: "Banchile Acciones",
      peso: "8%",
      monto: "$ 8.494.995",
    },
    {
      activo: "EEM",
      peso: "3%",
      monto: "$ 3.182.415",
    },
    {
      activo: "SQM-B",
      peso: "3%",
      monto: "$ 2.950.893",
    },
  ];
  $scope.patrimonioTop5Total = [
    {
      activo: "TOTAL",
      peso: "44%",
      monto: "$ 45.504.402",
    },
  ];
  $scope.patrimonioValor = [
    {
      indicador: "Valor de mercado 30/04/2018",
      negativo: "100",
      positivo: "10",
      valor: 13360434142,
      class: "h--bold",
    },
    {
      indicador: "Inversiones",
      negativo: "100",
      positivo: "90",
      valor: 100560000,
    },
    {
      indicador: "Retiros",
      negativo: "85",
      positivo: "0",
      valor: -2545000,
    },
    {
      indicador: "Ganacias / Pérdidas",
      negativo: "100",
      positivo: "30",
      valor: 39767888,
    },
    {
      indicador: "Valor de mercado 30/05/2018",
      negativo: "100",
      positivo: "100",
      valor: 13494995030,
      class: "h--bold",
    },
  ];
  $scope.patrimonioValorRent = [
    {
      indicador: "Rentabilidad neta %",
      valor: -0.59,
      class: "h--bold"
    },
  ];
  $scope.patrimonioBalance = [
    {
      activo: "Acciones",
      saldoIni: "$ 532.234.024",
      saldoPer: "$ 532.000.000",
      gananciaPerdida1: "$ -234.024",
      valor: 0.00,
      distribucion1: "5",
      distribucion2: "5,04%",
      barColor: "barDist--c1",
    },
    {
      activo: "Money Market",
      saldoIni: "$ 9.854.521.020",
      saldoPer: "$ 10.000.001.020",
      gananciaPerdida1: "$ 145.480.000",
      valor: 1.37,
      distribucion1: "94",
      distribucion2: "94,76%",
      barColor: "barDist--c2",
      classDestacado: "td--valorDestacado",
    },
    {
      activo: "Deuda",
      saldoIni: "$ 13.234.567",
      saldoPer: "$ 13.494.995",
      gananciaPerdida1: "$ 260.428",
      valor: 0.00,
      distribucion1: "1",
      distribucion2: "0,13%",
      barColor: "barDist--c3",
    },
    {
      activo: "Inversión Alternativa",
      saldoIni: "$ 3.355.678",
      saldoPer: "$ 3.182.415",
      gananciaPerdida1: "$ -173.263",
      valor: 0.00,
      distribucion1: "1",
      distribucion2: "0,03%",
      barColor: "barDist--c4",
    },
    {
      activo: "Cuentas por Cobrar/Pagar",
      saldoIni: "$ 3.000.000",
      saldoPer: "$ 3.975.953",
      gananciaPerdida1: "$ 975.953",
      valor: 0.01,
      distribucion1: "1",
      distribucion2: "0,04%",
      barColor: "barDist--c5",
    },
    {
      activo: "Caja",
      saldoIni: "$ 600.000",
      saldoPer: "$ 2.950.893.810",
      gananciaPerdida1: "$ -3.106.190",
      valor: -0.10,
      bar: "h--displayNone",
      barColor: "barDist--c6",
      classDestacado: "td--valorDestacado",
    },
  ];
  $scope.patrimonioBalanceTotal = [
    {
      activo: "Total Activos",
      saldoIni: "$ 10.406.945.289",
      saldoPer: "$ 10.552.654.383",
      gananciaPerdida1: "$ 145.709.094",
      valor: 0.01,
      bar: "h--displayNone",
    },
  ];
  $scope.patrimonioPasivo = [
    {
      activo: "Margen",
      saldoIni: "$ 67.809.087",
      saldoPer: "$ 65.975.968",
      gananciaPerdida1: "$ -1.833.119",
      valor: -0.02,
      bar: "h--displayNone",
    },
  ];
  $scope.patrimonioTotal = [
    {
      activo: "Total Patrimonio",
      saldoIni: "$ 10.474.754.376",
      saldoPer: "$ 10.618.630.351",
      gananciaPerdida1: "$ 143.875.975",
      valor: 1.35,
      bar: "h--displayNone",
    },
  ];
  $scope.patrimonioProductos = [
    {
      producto: "Fondos Mutuos",
      saldoIni: "$ 532.234.024",
      saldoPer: "$ 532.000.000",
      gananciaPerdida1: "$ -234.024",
      valor: 0.04,
      barColor: "barDist--c1",
      productoLink: "#patrimonio-cartolaDetalle",
    },
    {
      producto: "Cartera Activa",
      saldoIni: "$ 13.234.567",
      saldoPer: "$ 13.494.995",
      gananciaPerdida1: "$ 260.428",
      valor: 1.92,
      barColor: "barDist--c2",
    },
    {
      producto: "APV",
      saldoIni: "$ 3.255.678",
      saldoPer: "$ 3.182.415",
      gananciaPerdida1: "$ -73.263",
      valor: -2.30,
      barColor: "barDist--c3",
    },
    {
      producto: "Acciones",
      saldoIni: "$ 1.795.805.320",
      saldoPer: "$ 1.794.905.160",
      gananciaPerdida1: "$ -900.160",
      valor: -0.05,
      barColor: "barDist--c4",
    },
    {
      producto: "Pactos",
      saldoIni: "$ 1.158.194.680",
      saldoPer: "$ 1.155.988.650",
      gananciaPerdida1: "$ -2.206.030",
      valor: -0.19,
      barColor: "barDist--c5",
    },
  ];
  $scope.patrimonioRegiones = [
    {
      producto: "EEUU",
      saldoIni: "$ 532.234.024",
      saldoPer: "$ 532.000.000",
      gananciaPerdida1: "$ -234.024",
      valor: 0.04,
      barColor: "barDist--c1",
    },
    {
      producto: "UK",
      saldoIni: "$ 13.234.567",
      saldoPer: "$ 13.494.995",
      gananciaPerdida1: "$ 260.428",
      valor: 1.92,
      barColor: "barDist--c2",
    },
    {
      producto: "EUROPA Ex. UK",
      saldoIni: "$ 3.255.678",
      saldoPer: "$ 3.182.415",
      gananciaPerdida1: "$ -73.263",
      valor: -2.30,
      barColor: "barDist--c3",
    },
    {
      producto: "Japón",
      saldoIni: "$ 1.795.805.320",
      saldoPer: "$ 1.794.905.160",
      gananciaPerdida1: "$ -900.160",
      valor: -0.05,
      barColor: "barDist--c4",
    },
    {
      producto: "Asia",
      saldoIni: "$ 532.234.024",
      saldoPer: "$ 1.155.988.650",
      gananciaPerdida1: "$ -2.206.030",
      valor: -0.19,
      barColor: "barDist--c5",
    },
    {
      producto: "Chile",
      saldoIni: "$ 13.234.567",
      saldoPer: "$ 532.000.000",
      gananciaPerdida1: "$ 260.428",
      valor: 0.04,
      barColor: "barDist--c6",
    },
    {
      producto: "LATAM",
      saldoIni: "$ 1.158.194.680",
      saldoPer: "$ 1.155.988.650",
      gananciaPerdida1: "$ -2.206.030",
      valor: -0.19,
      barColor: "barDist--c7",
    },
    {
      producto: "EMEA",
      saldoIni: "$ 1.158.194.680",
      saldoPer: "$ 532.000.000",
      gananciaPerdida1: "$ -234.024",
      valor: 1.30,
      barColor: "barDist--c8",
    },
    {
      producto: "Asia emergente",
      saldoIni: "$ 13.234.567",
      saldoPer: "$ 1.155.988.650",
      gananciaPerdida1: "$ 260.428",
      valor: -0.50,
      barColor: "barDist--c9",
    },
    {
      producto: "Otros",
      saldoIni: "$ 532.234.024",
      saldoPer: "$ 3.182.415",
      gananciaPerdida1: "$ -2.206.030",
      valor: 0.04,
      barColor: "barDist--c10",
    },
  ];
  $scope.patrimonioMonedas = [
    {
      producto: "CLP",
      saldoIni: "$ 532.234.024",
      saldoPer: "$ 532.000.000",
      gananciaPerdida1: "$ -234.024",
      valor: 0.04,
      barColor: "barDist--c1",
    },
    {
      producto: "UF",
      saldoIni: "$ 13.234.567",
      saldoPer: "$ 13.494.995",
      gananciaPerdida1: "$ 260.428",
      valor: 1.92,
      barColor: "barDist--c2",
    },
    {
      producto: "USD",
      saldoIni: "$ 3.255.678",
      saldoPer: "$ 3.182.415",
      gananciaPerdida1: "$ -73.263",
      valor: -2.30,
      barColor: "barDist--c3",
    },
    {
      producto: "EUR",
      saldoIni: "$ 1.795.805.320",
      saldoPer: "$ 1.794.905.160",
      gananciaPerdida1: "$ -900.160",
      valor: -0.05,
      barColor: "barDist--c4",
    },
  ];
  $scope.patrimonioAccionesDetalle = [
    {
      instrumento: "ENELAM",
      cantidad: "11.463,0000",
      ppc: "$ 136,9000",
      valorIni: "$ 107,1400",
      precioMercado: "$ 2.271.187,44",
      valorMer: "$ 1.228.146,00",
      gananciaPerdida1: "$ 341.138,70",
      gananciaPerdida2: "0,82%",
      rentabilidadMTD: "0,82%",
      rentabilidadYTD: "0,82%",
    },
    {
      instrumento: "ENELGXCH",
      cantidad: "4.094.0000",
      ppc: "$ 554,7600",
      valorIni: "$ 2.271.187,44",
      precioMercado: "$ 2.271.187,44",
      valorMer: "1.569.284,70",
      gananciaPerdida1: "$ 458.159,44",
      gananciaPerdida2: "1,61%",
      rentabilidadMTD: "1,61%",
      rentabilidadYTD: "1,61%",
    },
    {
      instrumento: "LTM",
      cantidad: "572,0000",
      ppc: "$ 9.560,1000",
      valorIni: "$ 8.348,9000",
      precioMercado: "$ 5.038.172,70",
      valorMer: "$ 4.399.870,00",
      gananciaPerdida1: "$ 638.302,70",
      gananciaPerdida2: "0,73%",
      rentabilidadMTD: "0,73%",
      rentabilidadYTD: "0,73%",
    },
    {
      instrumento: "FALABELLA",
      cantidad: "1.353,0000",
      ppc: "$ 6.010,2000",
      valorIni: "$ 4.842,6578",
      precioMercado: "$ 8.131.800,60",
      valorMer: "$ 6.564.590,00",
      gananciaPerdida1: "$ 1.567.210,60",
      gananciaPerdida2: "2,12%",
      rentabilidadMTD: "2,12%",
      rentabilidadYTD: "2,12%",
    },
    {
      instrumento: "ANDINA-B",
      cantidad: "1.625,0000",
      ppc: "$ 2.939,7000",
      valorIni: "$ 2.950,0000",
      precioMercado: "$ 4.777.012,50",
      valorMer: "$ 4.813.716,00",
      gananciaPerdida1: "- $ 36.703,50",
      gananciaPerdida2: "- 0,50%",
      rentabilidadMTD: "- 0,50%",
      rentabilidadYTD: "- 0,50%",
    },
    {
      instrumento: "BCI",
      cantidad: "4.094,0000",
      ppc: "$ 554,7600",
      valorIni: "$ 2.271.187,44",
      precioMercado: "$ 2.271.187,44",
      valorMer: "$ 1.569.284,70",
      gananciaPerdida1: "$ 458.159,44",
      gananciaPerdida2: "1,36%",
      rentabilidadMTD: "1,36%",
      rentabilidadYTD: "1,36%",
    },
  ];
});
