cursosApp.controller('menuRouteCrtl-personas',

  ['$scope', '$location', function ($scope, $location) {
    $scope.currentNavItem = 'home-persona';
    $scope.currentMenuInterior = 'boletaOnline-documentacionRequerida';
    // $scope.template = $scope.template1;
    $scope.nombreSeccion = "home-contenido"
    // $scope.changeMenu = function (template, name, location) {
    //   $scope.template = template;
    //   $scope.nombreSeccion = name;
    //   $location.path(location);
    // }
  }]);

cursosApp.config(function ($routeProvider) {
  $routeProvider

    // NAVEGACION PUBLICA
    .when('/home-persona', {
      templateUrl: 'home-contenido/home-persona-contenido.html',
    })


    // SECURITY
    .when('/portada', {
      templateUrl: 'consultar/personas/portada.html',
    })
    .when('/boleta-manual', {
      templateUrl: 'consultar/personas/boleta-manual.html',
    })
    .when('/post-venta-tarjeta', {
      templateUrl: 'consultar/personas/post-venta-tarjeta.html',
    })

    // boleta de garantia
    .when('/boletaOnline-flujoProcesoComercialDiagrama', {
      templateUrl: 'consultar/personas/boleta-online_contenido/boletaOnline-flujoProcesoComercialDiagrama.html',
    })
    .when('/boletaOnline-flujoProcesoComercial', {
      templateUrl: 'consultar/personas/boleta-online_contenido/boletaOnline-flujoProcesoComercial.html',
    })
    .when('/boletaOnline-procesoOperaciones', {
      templateUrl: 'consultar/personas/boleta-online_contenido/boletaOnline-procesoOperaciones.html',
    })
    .when('/boletaOnline-informacionProducto', {
      templateUrl: 'consultar/personas/boleta-online_contenido/boletaOnline-informacionProducto.html',
    })
    .when('/boletaOnline-requisitosAreaRiesgo', {
      templateUrl: 'consultar/personas/boleta-online_contenido/boletaOnline-requisitosAreaRiesgo.html',
    })
    .when('/boletaOnline-documentacionRequerida', {
      templateUrl: 'consultar/personas/boleta-online_contenido/boletaOnline-documentacionRequerida.html',
    })
    .when('/flujo-sistemasInformaticos', {
      templateUrl: 'consultar/personas/boleta-online_contenido/flujo-sistemasInformaticos.html',
    })
    .when('/boletaOnline-postVenta', {
      templateUrl: 'consultar/personas/boleta-online_contenido/boletaOnline-postVenta.html',
    })



    .otherwise({
      redirectTo: '/boleta-online'
    });
});
