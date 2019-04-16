cursosApp.controller('tablaPatrimonio', function($scope) {

  $scope.sort = '+';
  $scope.patrim = [{
    porcent: "50%",
    nemo: "Retorno Accionario Largo Plazo C",
    vcuota: "$307.985",
    ncuenta: "1",
    ncuotas: "76-3",
    variac: "76-3",
    monto: "$18.000.000",

  }, {
    porcent: "35%",
    nemo: "Renta Futura D",
    vcuota: "$307.985",
    ncuenta: "2 ",
    ncuotas: "$138.434",
    variac: "76-3",
    monto: "$12.603345345000"
  }, {
    porcent: "15%",
    nemo: "Asiático Accionario C",
    vcuota: "$307.985",
    ncuenta: "3",
    ncuotas: "$138.434",
    variac: "76-3",
    monto: "$5.400.000"
  }];
  $scope.accin = [{
    porcent: "50%",
    familia: "Aple",
    precio: "$1.350.758",
    dispon: "$307.985",
    garant: "$767.543",
    bloq: "$414.601",
    variac: "0,52%",
    monto: "$18.000.000",
    color: "red"
  }, {
    porcent: "35%",
    familia: "Microsoft",
    precio: "$1.350.758",
    dispon: "$307.985",
    garant: "$767.543",
    bloq: "$123.345",
    variac: "0,23%",
    monto: "$12.600.000"
  }, {
    porcent: "15%",
    familia: "LAN",
    precio: "$1.350.758",
    dispon: "$307.985",
    garant: "$767.543",
    bloq: "$376.543",
    variac: "0,14%",
    monto: "$5.400.000"
  }];
});
