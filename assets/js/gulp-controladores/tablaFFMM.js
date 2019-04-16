//Fondos Mutuos PERSONAS
cursosApp.controller('tablaFFMM', function ($scope, $rootScope) {
//reinversión
$scope.selectReinversion = function (fondoMutuo) {
  $rootScope.fondoMutuoReinversionSelected = true;
  $scope.fondoMutuoReinversionDestino = fondoMutuo;
}
  //Color Variacion Acciones y Tendencias
  $scope.indicador =
    function (variacion) {
      if (variacion <= -0.0001) {
        return "td--montoNegativo";
      }
      if (variacion >= 0.0001) {
        return "td--montoPositivo";
      }
      if (variacion == 0.00) {
        return "td--montoNeutro";
      }
    }
  $scope.isDisabled = true;

    $scope.selectReinversion = function (fondoMutuo) {
        $rootScope.fondoMutuoReinversionSelected = true;
        $scope.fondoMutuoReinversionDestino = fondoMutuo;
    }

  $scope.sort = '+';
  $scope.fondom = [{
    porcent: "",
    producto: "Europeo Estructurado Nivel 90 Serie A",
    producto2: "Balanceado Conservador SerieA",
    producto3: "Rendimiento Corto Plazo Serie A",
    valorCuota: "$14.349,2783",
    uno: [{uno: 0.0, arrow: 'arrow_right'}],
    mes: [{mes: 0.073, arrow: 'arrow_drop_up'}],
    ano: [{ano: 0.2979, arrow: 'arrow_drop_up'}],
    riesgo: "R4",
    cuota: "30.985",
    monto: "$2.005.000"
  },
    {
      porcent: "",
      producto: "Latin America Serie B",
      producto2: "Inversionista Calificado Acciones Nacionales SerieA",
      producto3: "Alianza Pacifico Accionario Serie A",
      valorCuota: "$14.349,2783",
      uno: [{uno: 0.0782, arrow: 'arrow_drop_up'}],
      mes: [{mes: -0.003, arrow: 'arrow_drop_down'}],
      ano: [{ano: 0.1979, arrow: 'arrow_drop_up'}],
      riesgo: "R4",
      cuota: "40.3456",
      monto: "$3.235.000"
    },
  ];
  $scope.fondomapv1 = [{
    producto:"Fondo Mutuo Cobertura Deuda Global",
    valorCuota: "13.349,2783",
    participacion: "100%",
    dias: 0.33,
    ano:-0.69,
    anos:0.98,
    anos5:1.65,
    cuota: "30.985",
    total: "$8.341.504",
    tendencia: "S",
    },
  ];

  $scope.fondomapv2 = [
    {
      producto: "Fondo Mutuo Alianza",
      valorCuota: "11.349,2783",
      participacion: "35%",
      dias: 0.63,
      ano:0.87,
      anos:-0.98,
      anos5:2.64,
      cuota: "65.985",
      sistematico: "$350.000",
      total: "$10.500.000"
    },
  ];


  $scope.fondousd = [
    {
    valorCuota: "$13.349,2783",
    producto1: "Global Mid Cap",
    dias1: "0,33%",
    dia: "0,1%",
    ano1: "0,69%",
    cuota1: "$30.985",
    monto1: "$2.005.000",
    cuota: "65.985",
    dias: 0.12,
    ano: 0.69,
    anos: -0.98,
    anos5: 2.65,
  },
  {
    valorCuota: "$13.349,2783",
    producto1: "Europa Desarrollada",
    dias1: "0,54%",
    dia: "0,23%",
    ano1: "1,56%",
    anos5: "0,98",
    cuota1: "$30.985",
    monto1: "$2.005.000",
    ano: "0,12",
    anos:"-1,34",
    cuota: "54.087",
    dias: "0,63",
  }
];

$scope.fondoAPVrecomendados = [
  {
  valorCuota: "$13.349,2783",
  producto1: "Fondo Mutuo Asiático Accionario",
  cuota1: "$30.985",
  monto1: "$2.005.000",
  cuota: "65.985",
  dias: 0.12,
  ano: 0.69,
  anos: -0.98,
  anos5: 2.65,
},
{
  valorCuota: "$13.349,2783",
  producto1: "Fondo Mutuo Estrategia Moderada",
  monto1: "$2.005.000",
  dias: 0.63,
  ano: 0.12,
  anos: -1.34,
  anos5: 0.98,
  cuota: "65.985",
},
{
  valorCuota: "$13.349,2783",
  producto1: "Fondo Mutuo Capital Financiero",
  monto1: "$2.005.000",
  dias: 0.63,
  ano: 0.12,
  anos: -1.34,
  anos5: 0.98,
    cuota: "65.985",
},
{
  valorCuota: "$13.349,2783",
  producto1: "Fondo Mutuo Inversiones Alternativas",
  monto1: "$2.005.000",
  dias: 0.63,
  ano: 0.12,
  anos: -1.34,
  anos5: 0.98,
    cuota: "65.985",
},
];
  $scope.moneda = [

    {
      valorCuota: "10.349,2783",
      producto: "Fondo Mutuo Ahorro",
      participacion: "100%",
      dias: -1.33,
      ano:0.23,
      anos:-1.43,
      anos5:0.64,
      cuota: "30.985",
      sistematico: "$150.000",
      total: "$23.098.780"
    }

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
      valorCuota: "10.349,2783",
      producto: "Fondo Mutuo Asia",
      valorCuota: "$14.349,2783",
      participacion: "17%",
      uno: [{uno: 0.0780, arrow: 'arrow_drop_up'}],
      mes: [{mes: 0.0492, arrow: 'arrow_drop_up'}],
      ano: [{ano: 0.2020, arrow: 'arrow_drop_up'}],
      cuota: "20.7625",
    },
    {
      valorCuota: "$13.349,2783",
      producto: "Fondo Mutuo Disponible",
      participacion: "26%",
      uno: [{uno: 0.0038, arrow: 'arrow_drop_up'}],
      mes: [{mes: 0.0789, arrow: 'arrow_drop_up'}],
      ano: [{ano: 0.1979, arrow: 'arrow_drop_up'}],
      cuota: "46.9273",
    }

  ];
  $scope.fondomRecomend2 = [

    {
      porcent: "",
      producto: "Corporate Dollar serie A / Cuenta 1",
      dias: "0,33%",
      ano: "0,33%",
      anos5: "0,76%",
      riesgo: "R4",
      cuota: "",
      monto: ""
    }, {
      porcent: "",
      producto: "Corporate Dollar serie A / Cuenta 2",
      dias: "0,67%",
      ano: "0,67%",
      riesgo: "R5",
      cuota: "",
      monto: ""
    }

  ];
  $scope.fondomResultado = [
    {
      porcent: "",
      producto: "Europeo Estructurado Nivel 90 Serie B",
      icono: "work",
      valorCuota: "$ 14.349,2783",
      uno: [{uno: 0.903, arrow: 'arrow_drop_up'}],
      mes: [{mes: 0.073, arrow: 'arrow_drop_up'}],
      ano: [{ano: -0.067, arrow: 'arrow_drop_down'}],
      cuota: "39.985",
      monto: "$2.005.000",
    },
    {
      porcent: "",
      producto: "Latin America Serie B",
      icono: "work",
      valorCuota: "$ 14.349,2783",
      uno: [{uno: 0.237, arrow: 'arrow_drop_up'}],
      mes: [{mes: -0.037, arrow: 'arrow_drop_down'}],
      ano: [{ano: 0.00, arrow: 'arrow_right'}],
      cuota: "45.090",
      monto: "$4.305.430",
    },
    {
      porcent: "",
      producto: "Corporativo Serie B",
      valorCuota: "$ 14.349,2783",
      uno: [{uno: 0.0, arrow: 'arrow_right'}],
      mes: [{mes: -0.052, arrow: 'arrow_drop_down'}],
      ano: [{ano: 0.3029, arrow: 'arrow_drop_up'}],
      cuota: "20.0902",
    },
    {
      porcent: "",
      producto: "Euro Money Market Serie B",
      valorCuota: "$ 14.349,2783",
      uno: [{uno: -0.040, arrow: 'arrow_drop_down'}],
      mes: [{mes: 0.0135, arrow: 'arrow_drop_up'}],
      ano: [{ano: 0.1935, arrow: 'arrow_drop_up'}],
      cuota: "50.0989",
    },
    {
      porcent: "",
      producto: "Renta Futura Serie B",
      valorCuota: "$ 14.349,2783",
      uno: [{uno: 0.0, arrow: 'arrow_right'}],
      mes: [{mes: 0.0082, arrow: 'arrow_drop_up'}],
      ano: [{ano: 0.1322, arrow: 'arrow_drop_up'}],
      cuota: "100.985",
    },
    {
      porcent: "",
      producto: "Estrategia Conservadora Serie B",
      valorCuota: "$ 14.349,2783",
      uno: [{uno: 0.903, arrow: 'arrow_drop_up'}],
      mes: [{mes: 0.073, arrow: 'arrow_drop_up'}],
      ano: [{ano: -0.067, arrow: 'arrow_drop_down'}],
      cuota: "38.920",
    },
    {
      porcent: "",
      producto: "Asiático Accionario Serie B",
      valorCuota: "$ 14.349,2783",
      uno: [{uno: -0.0039, arrow: 'arrow_drop_down'}],
      mes: [{mes: -0.0053, arrow: 'arrow_drop_down'}],
      ano: [{ano: 0.0278, arrow: 'arrow_drop_up'}],
      cuota: "78.9022",
    },
    {
      porcent: "",
      producto: "Chile Blue Chip Index Fund Serie B",
      valorCuota: "$ 14.349,2783",
      uno: [{uno: 0.903, arrow: 'arrow_drop_up'}],
      mes: [{mes: 0.073, arrow: 'arrow_drop_up'}],
      ano: [{ano: -0.067, arrow: 'arrow_drop_down'}],
      cuota: "15.0920",
    },
    {
      porcent: "",
      producto: "Inversión Brasil Serie B",
      valorCuota: "$ 14.349,2783",
      uno: [{uno: 0.0, arrow: 'arrow_right'}],
      mes: [{mes: 0.073, arrow: 'arrow_drop_up'}],
      ano: [{ano: 0.1979, arrow: 'arrow_drop_up'}],
      cuota: "60.9023",
    },
    {
      porcent: "",
      producto: "Latam Accionario Serie B",
      valorCuota: "$ 14.349,2783",
      uno: [{uno: -0.0492, arrow: 'arrow_drop_down'}],
      mes: [{mes: 0.0901, arrow: 'arrow_drop_up'}],
      ano: [{ano: 1.039, arrow: 'arrow_drop_up'}],
      cuota: "130.985",
    },
  ];
  $scope.fondomValorCuota = [{
    porcent: "",
    producto: "Europeo Estructurado Nivel 90 Serie A",
    valorCuota: "$ 14.349,2783",
    dia: "1,14%",
    mes: "0,33%",
    ano: "0,93%",
  },
    {
      porcent: "",
      producto: "Latin America Serie B",
      valorCuota: "$ 14.349,2783",
      dia: "0,01%",
      mes: "0,19%",
      ano: "0,09%",
    },
    {
      porcent: "",
      producto: "Corporativo",
      valorCuota: "$ 14.349,2783",
      dia: "0,05%",
      mes: "0,05%",
      ano: "2,10%",
    },
    {
      porcent: "",
      producto: "Euro Money Market",
      valorCuota: "$ 14.349,2783",
      dia: "0,10%",
      mes: "0,15%",
      ano: "0,20%",
    },
    {
      porcent: "",
      producto: "Renta Futura",
      valorCuota: "$ 14.349,2783",
      dia: "0,11%",
      mes: "0,05%",
      ano: "1,18%",
    },
    {
      porcent: "",
      producto: "Estrategia Conservadora",
      valorCuota: "$ 14.349,2783",
      dia: "0,18%",
      mes: "1,05%",
      ano: "0,01%",
    },
    {
      porcent: "",
      producto: "Asiático Accionario",
      valorCuota: "$ 14.349,2783",
      dia: "3,01%",
      mes: "0,33%",
      ano: "1,33%",
    },
    {
      porcent: "",
      producto: "Chile Blue Chip Index Fund",
      valorCuota: "$ 14.349,2783",
      dia: "0,86%",
      mes: "1,91%",
      ano: "1,33%",
    },
    {
      porcent: "",
      producto: "Inversión Brasil",
      valorCuota: "$ 14.349,2783",
      dia: "0,73%",
      mes: "0,50%",
      ano: "1,01%",
    },
    {
      porcent: "",
      producto: "Latam Accionario",
      valorCuota: "$ 14.349,2783",
      dia: "0,02%",
      mes: "0,10%",
      ano: "1,00%",
    },
  ];
  $scope.fondoInmobiliario = [{
    producto: "Banchile Minero Asset Chile",
    dias: -10.33,
    tendenciaDias: "S",
    meses: 0.0,
    tendenciaMeses: "B",
    ano: -0.01,
    tendenciaAno: "B",
    valor: "$5.018.293",
  },
    {
      producto: "Rentas Habitacionales",
      dias: 0.33,
      tendenciaDias: "S",
      meses: 2.01,
      tendenciaMeses: "S",
      ano: -3.12,
      tendenciaAno: "S",
      valor: "$1.517,73",
    },
    {
      producto: "Banchile Inmobiliario VI",
      dias: 5.19,
      tendenciaDias: "S",
      meses: 5.88,
      tendenciaMeses: "S",
      ano: -5.56,
      tendenciaAno: "B",
      valor: "$1.517,735",
    },
    {
      producto: "Banchile Inmobiliario VII",
      dias: -0.15,
      tendenciaDias: "B",
      meses: 0.3,
      tendenciaMeses: "B",
      ano: 3.31,
      tendenciaAno: "S",
      valor: "$9.180,100",
    },
    {
      producto: "Banchile Plusvalía Eficiente",
      dias: -6.57,
      tendenciaDias: "S",
      meses: -1.33,
      tendenciaMeses: "B",
      ano: 0.00,
      tendenciaAno: "B",
      valor: "$2.000.000",
    },
    {
      producto: "Banchile Rentas Inmobiliarias I",
      dias: 31.17,
      tendenciaDias: "B",
      meses: -33.15,
      tendenciaMeses: "B",
      ano: 0.00,
      tendenciaAno: "S",
      valor: "$9.854,771 ",
    },
    {
      producto: "Banchile Rentas Inmobiliarias I",
      dias: 4.91,
      tendenciaDias: "S",
      meses: 0.0,
      tendenciaMeses: "B",
      ano: 2.85,
      tendenciaAno: "S",
      valor: "$9.300,000 ",
    },
  ];
  $scope.fondoMobiliario = [{
    producto: "Chile Small Cap",
    dias: 0.33,
    tendenciaDias: "S",
    meses: 2.01,
    tendenciaMeses: "S",
    ano: -3.12,
    tendenciaAno: "S",
    valor: "$1.517,73",
  },
    {
      producto: "Latam Corporate High Yield",
      dias: -10.33,
      tendenciaDias: "S",
      meses: 0.0,
      tendenciaMeses: "B",
      ano: -0.01,
      tendenciaAno: "B",
      valor: "$5.018.293",
    },
    {
      producto: "Chile Blend",
      dias: -0.15,
      tendenciaDias: "B",
      meses: 0.3,
      tendenciaMeses: "B",
      ano: 3.31,
      tendenciaAno: "S",
      valor: "$9.180,100",
    },
    {
      producto: "Deuda Chilena",
      dias: 5.19,
      tendenciaDias: "S",
      meses: 5.88,
      tendenciaMeses: "S",
      ano: -5.56,
      tendenciaAno: "B",
      valor: "$1.517,735",
    },
    {
      producto: "Deuda Corporativa 3-5 años",
      dias: 31.17,
      tendenciaDias: "B",
      meses: -33.15,
      tendenciaMeses: "B",
      ano: 0.00,
      tendenciaAno: "S",
      valor: "$9.854,771 ",
    },
    {
      producto: "Deuda Global",
      dias: -6.57,
      tendenciaDias: "S",
      meses: -1.33,
      tendenciaMeses: "B",
      ano: 0.00,
      tendenciaAno: "B",
      valor: "$2.000.000",
    },
    {
      producto: "Emerging Equity",
      dias: 4.91,
      tendenciaDias: "S",
      meses: 0.0,
      tendenciaMeses: "B",
      ano: 2.85,
      tendenciaAno: "S",
      valor: "$9.300,000 ",
    },
    {
      producto: "Estrategias Alternativas",
      dias: 31.17,
      tendenciaDias: "B",
      meses: -33.15,
      tendenciaMeses: "B",
      ano: 0.00,
      tendenciaAno: "S",
      valor: "$9.854,771 ",
    },
    {
      producto: "Europe Equity",
      dias: 4.91,
      tendenciaDias: "S",
      meses: 0.0,
      tendenciaMeses: "B",
      ano: 2.85,
      tendenciaAno: "S",
      valor: "$9.300,000 ",
    },
    {
      producto: "Latam Small Mid Cap",
      dias: 5.19,
      tendenciaDias: "S",
      meses: 5.88,
      tendenciaMeses: "S",
      ano: -5.56,
      tendenciaAno: "B",
      valor: "$1.517,735",
    },
    {
      producto: "MarketPlus Estados Unidos",
      dias: -10.33,
      tendenciaDias: "S",
      meses: 0.0,
      tendenciaMeses: "B",
      ano: -0.01,
      tendenciaAno: "B",
      valor: "$5.018.293",
    },
    {
      producto: "MarketPlus Global",
      dias: 0.33,
      tendenciaDias: "S",
      meses: 2.01,
      tendenciaMeses: "S",
      ano: -3.12,
      tendenciaAno: "S",
      valor: "$1.517,73",
    },
    {
      producto: "USA Equity",
      dias: -6.57,
      tendenciaDias: "S",
      meses: -1.33,
      tendenciaMeses: "B",
      ano: 0.00,
      tendenciaAno: "B",
      valor: "$2.000.000",
    },
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
    mes: [{mes: 3.18, arrow: 'arrow_drop_up'}],
    ano: [{ano: -2.57, arrow: 'arrow_drop_down'}],
    acumulado: [{acumulado: 5.03, arrow: 'arrow_drop_up'}],
    monto: "",
    rfrv: "assets/images/svg/CA/barra100.svg"
  }, {
    producto: "Cartera Defensiva",
    mes: [{mes: 2.70, arrow: 'arrow_drop_up'}],
    ano: [{ano: -1.78, arrow: 'arrow_drop_down'}],
    acumulado: [{acumulado: 4.06, arrow: 'arrow_drop_up'}],
    monto: "",
    rfrv: "assets/images/svg/CA/barra100.svg"
  }, {
    producto: "Cartera Controlada",
    mes: [{mes: 3.32, arrow: 'arrow_drop_up'}],
    ano: [{ano: -0.36, arrow: 'arrow_drop_down'}],
    acumulado: [{acumulado: 3.24, arrow: 'arrow_drop_up'}],
    monto: "",
    rfrv: "assets/images/svg/CA/barra10020.svg"
  },
    {
      producto: "Cartera Moderada",
      mes: [{mes: 1.96, arrow: 'arrow_drop_up'}],
      ano: [{ano: 0.86, arrow: 'arrow_drop_up'}],
      acumulado: [{acumulado: 2.33, arrow: 'arrow_drop_up'}],
      monto: "",
      rfrv: "assets/images/svg/CA/barra6040.svg"
    },
    {
      producto: "Cartera Equilibrada",
      mes: [{mes: 1.55, arrow: 'arrow_drop_up'}],
      ano: [{ano: 2.18, arrow: 'arrow_drop_up'}],
      acumulado: [{acumulado: 1.49, arrow: 'arrow_drop_up'}],
      monto: "",
      rfrv: "assets/images/svg/CA/barra4060.svg"
    },
    {
      producto: "Cartera Potenciada",
      mes: [{mes: 1.33, arrow: 'arrow_drop_up'}],
      ano: [{ano: 3.33, arrow: 'arrow_drop_up'}],
      acumulado: [{acumulado: 1.05, arrow: 'arrow_drop_up'}],
      monto: "",
      rfrv: "assets/images/svg/CA/barra2080.svg"
    },
  ];
  $scope.carteraActivaCuenta = [{
    producto: "Cartera Agresiva",
    mes: [{mes: 0.80, arrow: 'arrow_drop_up'}],
    ano: [{ano: 2.42, arrow: 'arrow_drop_up'}],
    acumulado: [{acumulado: 0.65, arrow: 'arrow_drop_up'}],
    monto: "$100.117.000.000",
    rfrv: "assets/images/svg/CA/barra0100.svg"
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
      producto: "Europeo Estructurado Nivel 90 serie B",
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
  $scope.monedaExtPrincipales = [
    {
      moneda: "USD/CLP",
      paridad: "$649,15",
      variacion: 91.47,
      hora: "18:47:53",
      tendencia: "S"
    },
    {
      moneda: "EUR/USD",
      paridad: "1,1753",
      variacion: 0.32,
      hora: "18:47:53",
      tendencia: "B"
    },
  ];
  $scope.monedaExtSecundarias = [
    {
      moneda: "USD/BRL",
      paridad: "3,1220",
      variacion: 1.54,
      hora: "18:47:53",
      tendencia: "B"
    },
    {
      moneda: "USD/JPY",
      paridad: "110,3420",
      variacion: 21.20,
      hora: "18:47:53",
      tendencia: "B"
    },
    {
      moneda: "GBP/USD",
      paridad: "1,2991",
      variacion: 0.00,
      hora: "18:47:53",
      tendencia: "B"
    },
    {
      moneda: "AUD/USD",
      paridad: "0,7912",
      variacion: 7.93,
      hora: "18:47:53",
      tendencia: "S"
    },
    {
      moneda: "USD/CNY",
      paridad: "6,7064",
      variacion: 3.00,
      hora: "18:47:53",
      tendencia: "S"
    },
    {
      moneda: "USD/ARS",
      paridad: "17,6960",
      variacion: 51.45,
      hora: "18:47:53",
      tendencia: "S"
    },
    {
      moneda: "USD/MXN",
      paridad: "17,8442",
      variacion: 91.47,
      hora: "18:47:53",
      tendencia: "S"
    },
    {
      moneda: "USD/CAD",
      paridad: "1,2668",
      variacion: 4.09,
      hora: "18:47:53",
      tendencia: "S"
    },
  ];
  $scope.monedaExt = [
    {
      moneda: "USD/CLP",
      paridad: "$649,15",
      variacion: 91.47,
      hora: "18:47:53",
      tendencia: "S"
    },
    {
      moneda: "EUR/USD",
      paridad: "1,1753",
      variacion: 0.32,
      hora: "18:47:53",
      tendencia: "B"
    },
    {
      moneda: "USD/BRL",
      paridad: "3,1220",
      variacion: 1.54,
      hora: "18:47:53",
      tendencia: "B"
    },
    {
      moneda: "USD/JPY",
      paridad: "110,3420",
      variacion: 21.20,
      hora: "18:47:53",
      tendencia: "B"
    },
    {
      moneda: "GBP/USD",
      paridad: "1,2991",
      variacion: 0.00,
      hora: "18:47:53",
      tendencia: "B"
    },
    {
      moneda: "AUD/USD",
      paridad: "0,7912",
      variacion: 7.93,
      hora: "18:47:53",
      tendencia: "S"
    },
    {
      moneda: "USD/CNY",
      paridad: "6,7064",
      variacion: 3.00,
      hora: "18:47:53",
      tendencia: "S"
    },
    {
      moneda: "USD/ARS",
      paridad: "17,6960",
      variacion: 51.45,
      hora: "18:47:53",
      tendencia: "S"
    },
    {
      moneda: "USD/MXN",
      paridad: "17,8442",
      variacion: 91.47,
      hora: "18:47:53",
      tendencia: "S"
    },
    {
      moneda: "USD/CAD",
      paridad: "1,2668",
      variacion: 4.09,
      hora: "18:47:53",
      tendencia: "S"
    },
  ];
  $scope.accionesCartera = [{
    serie: "ANTARCHILE",
    precio: "$ 10.480,0000",
    precioCompra: "$ 10.250,0000",
    precioVenta: "$ 10.550,0000",
    variacion: [{variacion: 0.903, arrow: 'arrow_drop_up'}],
    cantidad: "980",
    gananciaPerdida: "-$5.678",
    monto: "$10.270.400,0000",
    tendencia: "S"
  },
    {
      serie: "CENCOSUD",
      precio: "$ 1.385,0000",
      precioCompra: "$ 1.291,0000",
      precioVenta: "$ 1.430,0000",
      variacion: [{variacion: -0.0502, arrow: 'arrow_drop_down'}],
      cantidad: "28",
      gananciaPerdida: "+$29,876",
      monto: "$ 38.780,0000",
      tendencia: "B"
    },
    {
      serie: "LTM",
      precio: "$ 6.230,0000",
      precioCompra: "$ 6.050,0000",
      precioVenta: "$ 6.680,0000",
      variacion: [{variacion: 0.00, arrow: 'arrow_right'}],
      cantidad: "130",
      gananciaPerdida: "+$87,654",
      monto: "$ 809.900,0000",
      tendencia: "B"
    },
    {
      serie: "BSANTANDER",
      precio: "$ 51,6500",
      precioCompra: "$ 49,1200",
      precioVenta: "$ 52,0000",
      variacion: [{variacion: 0.7821, arrow: 'arrow_drop_up'}],
      cantidad: "40",
      gananciaPerdida: "-$76.543,210",
      monto: "$ 2.066,0000",
      tendencia: "B"
    },
    {
      serie: "SALFACORP",
      precio: "$ 977,6000",
      precioCompra: "$ 933,0000",
      precioVenta: "$ 996,8500",
      variacion: [{variacion: 0.1345, arrow: 'arrow_drop_up'}],
      cantidad: "28",
      gananciaPerdida: "+$29.876",
      monto: "$ 27.372,8000",
      tendencia: "S"
    },
  ];
  $scope.accionesRecomendadas = [{
    serie: "ANTARCHILE",
    precio: "$ 10.480,0000",
    precioCompra: "$ 10.250,0000",
    precioVenta: "$ 10.550,0000",
    variacion: [{variacion: 1.923, arrow: 'arrow_drop_up'}],
    cantidad: "980",
    gananciaPerdida: "-$5.678",
    monto: "$10.270.400,0000",
    tendencia: "S",
    entrada: "$52,5400",
  },
    {
      serie: "CENCOSUD",
      precio: "$ 1.385,0000",
      precioCompra: "$ 1.291,0000",
      precioVenta: "$ 1.430,0000",
      variacion: [{variacion: -1.562, arrow: 'arrow_drop_down'}],
      cantidad: "28",
      gananciaPerdida: "+$29,876",
      monto: "$ 38.780,0000",
      tendencia: "B",
      entrada: "$34,920",
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
  ];
  $scope.etfMarketvectors = [{
    nombre: "Market Vectors Agribusiness ETF",
    nemotecnico: "MOO",
  },
    {
      nombre: "Market Vectors Brazil Small-Cap ETF",
      nemotecnico: "BRF",
    },
    {
      nombre: "Market Vectors China ETF",
      nemotecnico: "PEK",
    },
    {
      nombre: "Market Vectors Coal ETF",
      nemotecnico: "KOL",
    },
    {
      nombre: "Market Vectors Colombia ETF",
      nemotecnico: "COLX",
    },
    {
      nombre: "Market Vectors Egypt Index ETF",
      nemotecnico: "EGPT",
    },
    {
      nombre: "Market Vectors Emerging Markets Local Currency Bond ETF",
      nemotecnico: "EMLC",
    },
    {
      nombre: "Market Vectors Germany Small-Cap ETF",
      nemotecnico: "GERJ",
    },
    {
      nombre: "Market Vectors Global Alternative Energy ETF",
      nemotecnico: "GEX",
    },
    {
      nombre: "Market Vectors Gold Miners ETF",
      nemotecnico: "GDX",
    },
    {
      nombre: "Market Vectors India Small-Cap Index ETF",
      nemotecnico: "SCIF",
    },
    {
      nombre: "Market Vectors Indonesia Index ETF",
      nemotecnico: "IDX",
    },
    {
      nombre: "Market Vectors Junior Gold Miners ETF",
      nemotecnico: "GDXJ",
    },
    {
      nombre: "Market Vectors LatAm Aggregate Bond ETF",
      nemotecnico: "BONO",
    },
    {
      nombre: "Market Vectors Latin America Small-Cap Index ETF",
      nemotecnico: "LATM",
    },
    {
      nombre: "Market Vectors Poland ETF",
      nemotecnico: "PLND",
    },
    {
      nombre: "Market Vectors Rare Earth/Strategic Metals ETF",
      nemotecnico: "REMX",
    },
    {
      nombre: "Market Vectors Russia ETF",
      nemotecnico: "RSX",
    },
    {
      nombre: "Market Vectors Russia Small-Cap ETF",
      nemotecnico: "RSXJ",
    },
    {
      nombre: "Market Vectors RVE Hard Assets Producers ETF",
      nemotecnico: "HAP",
    },
    {
      nombre: "Market Vectors Steel ETF",
      nemotecnico: "SLX",
    },
    {
      nombre: "Market Vectors Uranium+ Nuclear Energy ETF",
      nemotecnico: "NLR",
    },
    {
      nombre: "Market Vectors Vietnam ETF",
      nemotecnico: "VNM",
    },
  ];
  $scope.etfIshares = [{
    nombre: "iBoxx $ High Yield Corporate Bond Fund",
    nemotecnico: "HYG",
    tipo: "Renta fija",
    categoria: "Estados Unidos",
  },
    {
      nombre: "iBoxx $ Investment Grade Corporate Bond Fund",
      nemotecnico: "LQD",
      tipo: "Renta fija",
      categoria: "Estados Unidos",
    },
    {
      nombre: "Barclays Short Treasury Bond Fund",
      nemotecnico: "SHV",
      tipo: "Renta fija",
      categoria: "Estados Unidos",
    },
    {
      nombre: "Barclays 1-3 Year Treasury Bond Fund",
      nemotecnico: "SHY",
      tipo: "Renta fija",
      categoria: "Estados Unidos",
    },
    {
      nombre: "Barclays TIPS Bond Fund",
      nemotecnico: "TIP",
      tipo: "Renta fija",
      categoria: "Estados Unidos",
    },
    {
      nombre: "Gold Trust",
      nemotecnico: "IAU",
      tipo: "Materias primas",
      categoria: "Materias primas",
    },
    {
      nombre: "Silver Trust",
      nemotecnico: "SLV",
      tipo: "Materias primas",
      categoria: "Materias primas",
    },
    {
      nombre: "MSCI All Country Asia ex Japan Index Fund",
      nemotecnico: "AAXJ",
      tipo: "Renta variable",
      categoria: "Mercado",
    },
    {
      nombre: "MSCI All Country Asia ex Japan Index Fund",
      nemotecnico: "AAXJ",
      tipo: "Renta variable",
      categoria: "Mercado",
    },
    {
      nombre: "MSCI All Country Asia ex Japan Index Fund",
      nemotecnico: "AAXJ",
      tipo: "Renta variable",
      categoria: "Mercado",
    },
  ];
  $scope.accionesNorteamerica = [{
    nombre: "Alcoa Inc",
    nemotecnico: "AA US Equity",
  },
    {
      nombre: "Apple",
      nemotecnico: "AAPL US Equity",
    },
    {
      nombre: "Abbot Laboratories",
      nemotecnico: "ABT US Equity",
    },
    {
      nombre: "Automatic Data Processing",
      nemotecnico: "ADP US Equity",
    },
    {
      nombre: "American International Group",
      nemotecnico: "AIG US Equity",
    },
    {
      nombre: "Amgem Inc",
      nemotecnico: "AMGN US Equity",
    },
    {
      nombre: "Amazon.com Inc",
      nemotecnico: "AMZN US Equity",
    },
    {
      nombre: "Avon Products Inc",
      nemotecnico: "AVP US Equity",
    },
    {
      nombre: "American Express CO",
      nemotecnico: "AXP US Equity",
    },
    {
      nombre: "Boeing CO/THE",
      nemotecnico: "BA US Equity",
    },
  ];
  $scope.accionesIndicadores = [{
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
      serie: "FALABELLA",
      precio: "$6.401,00",
      variacion: -1.05,
      tendencia: "S"
    },
    {
      serie: "NUEVAPOLAR",
      precio: "$60,50",
      variacion: 1.92,
      tendencia: "B"
    },
    {
      serie: "MULTIFOODS",
      precio: "$226,10",
      variacion: -0.23,
      tendencia: "S"
    },
  ];
  $scope.recomendPortafolios = [
    {
      producto: "Portafolio Activo Agresivo Serie A",
      dias: "0,33%",
      ano: "0,33%"
    },
    {
      producto: "Portafolio Activo Controlado Serie A",
      dias: "0,33%",
      ano: "0,33%"
    },
    {
      producto: "Portafolio Activo Defensivo Serie B",
      dias: "0,33%",
      ano: "0,33%"
    },
    {
      producto: "Portafolio Activo Equilibrado Serie A",
      dias: "0,33%",
      ano: "0,33%"
    },
    {
      producto: "Portafolio Activo Moderado Serie B",
      dias: "0,33%",
      ano: "0,33%"
    },
    {
      producto: "Portafolio Activo Potenciado Serie B",
      dias: "0,33%",
      ano: "0,33%"
    },

  ];
  $scope.fondoSeleccionado = [
    {
      producto: "Balanceado Conservador Serie A"
    },
    {
      producto: "Inversionista Calificado Acciones Nacionales Serie A"
    }

  ];

  for (var i = 0; i < $scope.accionesCartera.length; i++) {
    if ($scope.accionesCartera[i].tendencia == 'S') {
      $scope.accionesCartera[i].icono = '&#xE5C7;';
    } else if ($scope.accionesCartera[i].tendencia == 'B') {
      $scope.accionesCartera[i].icono = "&#xE5C5;";
    }
  };


});
//Fondos Mutuos PERSONAS
