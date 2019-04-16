//Inicio Cartera activa público personas
cursosApp.controller('tablaCApersonas', function($scope) {
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
  $scope.fondom = [{
      porcent: "",
      producto: "Europeo Estructurado Nivel 90",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R4",
      cuota: "$30.985",
      monto: "$2.005.000"
    }, {
      porcent: "",
      producto: "Inversionista Calificado Acciones Nacionales",
      dias: "0,67%",
      ano: "0,67%",
      riesgo: "R5",
      cuota: "$24.678",
      monto: "$233.324.000"
    }

  ];
  $scope.moneda = [

    {
      porcent: "",
      producto: "Corporate Dollar Serie A",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R1",
      cuota: "$30.985",
      monto: "$2.005.000"
    },
    {
      porcent: "",
      producto: "Cash Corp C",
      dias: "0,35%",
      ano: "0,35%",
      riesgo: "R2",
      cuota: "$24.678",
      monto: "$233.324.000"
    },
    {
      porcent: "",
      producto: "Estructurado Europeo Desarrollada Nivel 100 Serie C",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R4",
      cuota: "$30.985",
      monto: "$2.005.000"
    },

  ];
  $scope.bpayclp = [

    {
      producto: "Cash",
      monto: "$233.324.000"
    },

  ];
  $scope.bpayusd = [

    {

      producto: "Corporate Dollar ",
      monto: "$2.005.000"
    },

  ];
  $scope.acciones = [{
      serie: "ANTARCHILE",
      variacion: 2.63,
      precio: "$6.665,80",
      monto: "$2.345.678"
    },
    {
      serie: "LATAM",
      variacion: -10.73,
      precio: "$1.517,73",
      monto: "$2.099.876"
    },
    {
      serie: "CENCOSUD",
      variacion: -0.22,
      precio: "$9.180,10",
      monto: "$10.987.654"
    },
    {
      serie: "BSANTANDER",
      variacion: 67.47,
      precio: "$9.854,77",
      monto: "$67.876.543"
    },
    {
      serie: "ORO BLANCO",
      variacion: 0.48,
      precio: "$4.895,55",
      monto: "$345.678"
    },

  ];
  $scope.fondomRecomend = [

    {
      porcent: "",
      producto: "Europeo Estructurado Nivel 90",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R4",
      cuota: "",
      monto: ""
    }, {
      porcent: "",
      producto: "Inversionista Calificado Acciones Nacionales",
      dias: "0,67%",
      ano: "0,67%",
      riesgo: "R5",
      cuota: "",
      monto: ""
    }

  ];
  $scope.cartera = [

    {
      porcent: "15%",
      producto: "Capital efectivo",
      cuenta: "1",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R4",
      cuota: "$30.985",
      cantidad: "14.601",
      monto: "$600.000"
    }, {
      porcent: "15%",
      producto: "Cash Serie C",
      cuenta: "2",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R4",
      cuota: "$30.985",
      cantidad: "14.601",
      monto: "$600.000"
    }, {
      porcent: "15%",
      producto: "Europa Desarrollada nivel 10",
      cuenta: "3",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R4",
      cuota: "$30.985",
      cantidad: "14.601",
      monto: "$600.000"
    }
  ];

  $scope.carteraActiva = [{
      producto: "Cartera Protegida",
      dias: "0,33%",
      monto: ""
    }, {
      producto: "Cartera Defensiva",
      dias: "0,33%",
      monto: ""
    },
    {
      producto: "Cartera Moderada",
      dias: "0,33%",
      monto: "",
    },
    {
      producto: "Cartera Equilibrada",
      dias: "0,33%",
      monto: "",
    },
    {
      producto: "Cartera Potenciada",
      dias: "0,33%",
      monto: "",
    },
  ];
  $scope.carteraActivaCuenta = [{
    producto: "Cartera Agresiva",
    dias: "0,33%",
    monto: "$100.117.000.000",
  }];

  $scope.cuentaActiva = [{
      cuenta: "Cuenta 1",
      dias: "",
      monto: "$17.000.000"
    }, {
      cuenta: "Cuenta 2",
      dias: "",
      monto: "$100.000.000"
    },

  ];

  $scope.MiCartera = [{
      producto: "Cartera Controlada",
      dias: "0,33%",
      monto: "$117.000.000",
    },

  ];
  $scope.todosFondos = [

    {
      porcent: "",
      producto: "Europeo Estructurado Nivel 90",
      dias: "0,33%",
      ano: "0,33%",
      riesgo: "R4",
      cuota: "$30.985"
    }, {
      porcent: "",
      producto: "Inversionista Calificado Acciones Nacionales",
      dias: "0,67%",
      ano: "0,67%",
      riesgo: "R5",
      cuota: "$24.678"
    }

  ];
  $scope.monedaExt = [

    {
      moneda: "USD/CLP",
      paridad: "$649,15",
      var: "-0,21%",
      hora: "18:47:53"
    },
    {
      moneda: "EUR/USD",
      paridad: "1,1753",
      var: "-0,39%",
      hora: "18:47:53"
    },
    {
      moneda: "USD/BRL",
      paridad: "3,1220",
      var: "0,02%",
      hora: "18:47:53"
    },
    {
      moneda: "USD/JPY",
      paridad: "110,3420",
      var: "-0,38%",
      hora: "18:47:53"
    },
    {
      moneda: "GBP/USD",
      paridad: "1,2991",
      var: "-0,34%",
      hora: "18:47:53"
    },
    {
      moneda: "AUD/USD",
      paridad: "0,7912",
      var: "-0,05%",
      hora: "18:47:53"
    },
    {
      moneda: "USD/CNY",
      paridad: "6,7064",
      var: "-0,21%",
      hora: "18:47:53"
    },
    {
      moneda: "USD/ARS",
      paridad: "17,6960",
      var: "0,11%",
      hora: "18:47:53"
    },
    {
      moneda: "USD/MXN",
      paridad: "17,8442",
      var: "-0,50%",
      hora: "18:47:53"
    },
    {
      moneda: "USD/CAD",
      paridad: "1,2668",
      var: "-0,06%",
      hora: "18:47:53"
    },
  ];
  $scope.accionesCartera = [{
      serie: "ANTARCHILE",
      precio: "$9.300,000",
      variacion: -0.05,
      cantidad: "980",
      gananciaPerdida: "-$5.678",
      monto: "$2.345.678,201",
      tendencia: "S"
    },
    {
      serie: "CENCOSUD",
      precio: "$1.517,735",
      variacion: 10.73,
      cantidad: "28",
      gananciaPerdida: "+$29,876",
      monto: "$2.099.876",
      tendencia: "B"
    },
    {
      serie: "LTM",
      precio: "$9.180,100",
      variacion: -0.0,
      cantidad: "130",
      gananciaPerdida: "+$87,654",
      monto: "$10.987.654,503",
      tendencia: "B"
    },
    {
      serie: "BSANTANDER",
      precio: "$9.854,771",
      variacion: 91.47,
      cantidad: "40",
      gananciaPerdida: "-$76.543,210",
      monto: "$67.876.543,340",
      tendencia: "B"
    },
    {
      serie: "ORO BLANCO",
      precio: "$1.517,73",
      variacion: -10.73,
      cantidad: "28",
      gananciaPerdida: "+$29.876",
      monto: "$2.099.876,109",
      tendencia: "S"
    },
  ];
  $scope.accionesResumen = [{
      serie: "LATAM",
      precio: "$1.517,73",
      variacion: 10.73,
      tendencia: "S"
    },
    {
      serie: "CENCOSUD",
      precio: "$9.180,10",
      variacion: 0.22,
      tendencia: "S"
    },
    {
      serie: "BSANTANDER",
      precio: "$9.854,77",
      variacion: 21.47,
      tendencia: "B"
    },
    {
      serie: "ORO BLANCO",
      precio: "$4.895,55",
      variacion: 0.40,
      tendencia: "B"
    },
    {
      serie: "ANTARCHILE",
      precio: "$6.665,80",
      variacion: 0,
      tendencia: "B"

    },
    {
      serie: "SQM-B",
      precio: "$28.500,00",
      variacion: -0.38,
      tendencia: "S"
    },
    {
      serie: "CONCHATORO",
      precio: "$1.067,00",
      variacion: -0.19,
      tendencia: "S"
    },
    {
      serie: "MULTIFOODS",
      precio: "$226,10",
      variacion: -0.23,
      tendencia: "S"
    },
    {
      serie: "ENELAM",
      precio: "$130,59",
      variacion: 0.12,
      tendencia: "S"
    },
    {
      serie: "RIPLEY",
      precio: "$623,99",
      variacion: 0.14,
      tendencia: "S"
    },

  ];
  // $scope.accionesHome = [
  //
  //     {
  //         porcent: "",
  //         serie: "CENCOSUD",
  //         precio: "$1.517,73",
  //         variacion: "+$10,73",
  //         cantidad: "28",
  //         ganancia: "$29.876"
  //         monto: "$2.099.876"
  //     }, {
  //         porcent: "",
  //         producto: "Inversionista Calificado Acciones Nacionales",
  //         dias: "0,67%",
  //         ano: "0,67%",
  //         riesgo: "R5",
  //         cuota: "$24.678"
  //     }
  //
  // ];

  for (var i = 0; i < $scope.accionesCartera.length; i++) {
    if ($scope.accionesCartera[i].tendencia == 'S') {
      $scope.accionesCartera[i].icono = '&#xE5C7;';
    } else if ($scope.accionesCartera[i].tendencia == 'B') {
      $scope.accionesCartera[i].icono = "&#xE5C5;";
    }
  }

});
// Fin Cartera activa público personas
