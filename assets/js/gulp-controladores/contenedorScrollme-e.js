cursosApp.controller('contenedorScrollme-e', function($scope, screenSize, $timeout) {

  $scope.isMobile = screenSize.on('xs, sm', function(isMatch) {
    $scope.isMobile = isMatch;
  });
  $scope.productoScroll = [{
      "nombre": "FONDOS MUTUOS",
      "monto": "40.000.000",
      "porcentaje": "40%",
      "boton": "APORTAR",
      "barra": $scope.progressval,
      link: '#fondosmutuos-aporte-clp'
    },
    {
      "nombre": "ACCIONES",
      "monto": "30.000.000",
      "porcentaje": "30%",
      "boton": "COMPRAR",
      "barra": $scope.progressval,
      link: '#empresas-acciones-compra'
    },
    {
      "nombre": "CAJA INTERNET",
      "monto": "30.000.000",
      "porcentaje": "30%",
      "boton": "ABONAR",
      "barra": $scope.progressval,
      link: '#caja-abono'
    },

  ];

  $timeout(function() {
    $scope.$broadcast("rebuild:me");
  }, 1000);

});
