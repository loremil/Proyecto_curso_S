cursosApp.controller('contenedorScrollme2', function($scope, screenSize, $timeout) {

  $scope.isMobile = screenSize.on('xs, sm', function(isMatch) {
    $scope.isMobile = isMatch;
  });

  $scope.productoScroll = [{
      "nombre": "Ahorro Serie E",
      "familia": "Money Market",
      "porcentaje": "22,55%",
      "barra": $scope.progressval
    },
    {
      "nombre": "Depósito Serie E",
      "familia": "Deuda",
      "porcentaje": "22,55%",
      "barra": $scope.progressval
    },
    {
      "nombre": "Deuda Estatal UF 3-5 años..",
      "familia": "Deuda",
      "porcentaje": "4,95%",
      "barra": $scope.progressval
    },
  ];

  $scope.productoScroll2 = [{
      "nombre": "Horizonte Serie E",
      "familia": "Deuda",
      "porcentaje": "24,22%",
      "barra": $scope.progressval

    },
    {
      "nombre": "Retorno LP UF Serie E",
      "familia": "Balanceado",
      "porcentaje": "7,27%",
      "barra": $scope.progressval
    },
    {
      "nombre": "Utilidades Serie E",
      "familia": "Accionario",
      "porcentaje": "10,94%",
      "barra": $scope.progressval
    },
  ];

  $timeout(function() {
    $scope.$broadcast("rebuild:me");
  }, 1000);

});
