cursosApp.controller('tablaFondosMutuosGastos', function ($scope) {
  $scope.fondosMutuosGastos = [
    {
      producto: "Monto minimo",
      serieA: "No tiene",
      serieP: "No tiene",
      serieBPLUS: "$200 MM",
      serieBCH: "Fondos Banchile",
    },
    {
      producto: "Remuneración",
      serieA: "3,9800(1)",
      serieP: "1,5000(2)",
      serieBPLUS: "0,6000(1)",
      serieBCH: "0,0000(1)",
    },
    {
      producto: "Gasto máximo",
      serieA: "2,5000(1)",
      serieP: "2,5000(1)",
      serieBPLUS: "2,5000(1)",
      serieBCH: "2,5000(1)",
    },
    {
      producto: "Comisión máxima",
      serieA: "2,3800(1)",
      serieP: "0,0000(2)",
      serieBPLUS: "0,0000(1)",
      serieBCH: "0,0000(1)",
    },
  ];
});