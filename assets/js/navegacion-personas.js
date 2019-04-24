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
    .when('/boletaOnline-procesoComercial-condiciones', {
      templateUrl: 'consultar/personas/boleta-online_contenido/boletaOnline-procesoComercial-condiciones.html',
    })
    .when('/boletaOnline-procesoComercial-informacion', {
      templateUrl: 'consultar/personas/boleta-online_contenido/boletaOnline-procesoComercial-informacion.html',
    })
    .when('/boletaOnline-procesoComercial-suscriptores', {
      templateUrl: 'consultar/personas/boleta-online_contenido/boletaOnline-procesoComercial-suscriptores.html',
    })
    .when('/boletaOnline-postVenta-procedimientoCancelacion', {
      templateUrl: 'consultar/personas/boleta-online_contenido/boletaOnline-postVenta-procedimientoCancelacion.html',
    })
    // inicio post venta TC - Beneficios
    .when('/como-acumularSP', {
      templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/como-acumularSP.html',
    })
    .when('/canje-comprarSP', {
      templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/canje-comprarSP.html',
    })
    .when('/canje-deSP', {
      templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/canje-deSP.html',
    })
    .when('/traspaso-puntos', {
      templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/traspaso-puntos.html',
    })
    .when('/excepciones-cobro', {
      templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/excepciones-cobro.html',
    })
    .when('/consulta-historial', {
      templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/consulta-historial.html',
    })
    .when('/uso-salonesVipCliente', {
      templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/uso-salonesVipCliente.html',
    })
    .when('/uso-salonesVip', {
      templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/uso-salonesVip.html',
    })
    .when('/proceso-interno', {
      templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/proceso-interno.html',
    })
    .when('/consulta-accesos', {
      templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/consulta-accesos.html',
    })
    .when('/priority-pass', {
      templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/priority-pass.html',
    })
// inicio post venta TC - Campaña
.when('/avance-cuotas', {
  templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/campana/avance-cuotas.html',
})
.when('/cargo-cuota_creditoConsumoTC', {
  templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/campana/cargo-cuota_creditoConsumoTC.html',
})
.when('/emision-tc_nuevasCuentas', {
  templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/campana/emision-tc_nuevasCuentas.html',
})
.when('/modificacion-cupo_campana', {
  templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/campana/modificacion-cupo_campana.html',
})
.when('/modificacion-cupo_solicitudCliente', {
  templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/campana/modificacion-cupo_solicitudCliente.html',
})
.when('/venta-seguros_cargoTC', {
  templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/campana/venta-seguros_cargoTC.html',
})
// inicio post venta TC - PLÁSTICO
.when('/activacionTC', {
  templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/plastico/activacionTC.html',
})
.when('/upgrade', {
  templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/plastico/upgrade.html',
})
.when('/renovacionTC', {
  templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/plastico/renovacionTC.html',
})
.when('/bloqueo-robo-extravio', {
  templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/plastico/bloqueo-robo-extravio.html',
})
.when('/solicitudTA', {
  templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/plastico/solicitudTA.html',
})
.when('/reemisionTC', {
  templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/plastico/reemisionTC.html',
})
.when('/reseteoPIN', {
  templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/plastico/reseteoPIN.html',
})
.when('/bloqueo-orden-banco', {
  templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/plastico/bloqueo-orden-banco.html',
})
// inicio post venta TC - ESTADO DE CUENTA
.when('/informacion-gereneralEC', {
  templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/estado-cuenta/informacion-gereneralEC.html',
})
.when('/pac-multibanco', {
  templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/estado-cuenta/pac-multibanco.html',
})
.when('/pac-activar-desactivar', {
  templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/estado-cuenta/pac-activar-desactivar.html',
})
.when('/modificacion-direccion', {
  templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/estado-cuenta/modificacion-direccion.html',
})
.when('/modificacion-envioEC', {
  templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/estado-cuenta/modificacion-envioEC.html',
})
.when('/modificacion-pagoMinimo', {
  templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/estado-cuenta/modificacion-pagoMinimo.html',
})
.when('/modificacion-cicloFacturacion', {
  templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/estado-cuenta/modificacion-cicloFacturacion.html',
})
.when('/pat-inscripcion-eliminacion', {
  templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/estado-cuenta/pat-inscripcion-eliminacion.html',
})
.when('/consulta-deudaCliente', {
  templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/estado-cuenta/consulta-deudaCliente.html',
})
// inicio post venta TC - PREVENCIÓN FRAUDE
.when('/bloque-transitorio-nexus', {
  templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/prevencion-fraude/bloque-transitorio-nexus.html',
})
.when('/punto-compromiso', {
  templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/prevencion-fraude/punto-compromiso.html',
})
.when('/protocolo-seguridadFiltracion', {
  templateUrl: 'consultar/personas/post-venta-tarjeta_contenido/prevencion-fraude/protocolo-seguridadFiltracion.html',
})

    .otherwise({
      redirectTo: '/boleta-online'
    });
});
