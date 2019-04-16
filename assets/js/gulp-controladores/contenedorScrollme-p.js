
cursosApp.controller('contenedorScrollme-p', function ($scope, screenSize, $timeout) {

  $scope.isMobile = screenSize.on('xs, sm', function (isMatch) {
    $scope.isMobile = isMatch;
  });
  $scope.productoScroll = [{
    "nombre": "FONDOS MUTUOS",
    "monto": "40.000.000",
    "porcentaje": "40%",
    "boton": "INVERTIR",
    "barra": $scope.progressval,
    link: '#fondosmutuos-aporte'
  },
  {
    "nombre": "CAJA INTERNET",
    "monto": "5.000.000",
    "porcentaje": "5%",
    "boton": "ABONAR",
    "barra": $scope.progressval
  },
  ];

  $timeout(function () {
    $scope.$broadcast("rebuild:me");
  }, 1000);

});
