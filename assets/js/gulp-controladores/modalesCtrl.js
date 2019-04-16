// CONTROLADORES DE MODALES
cursosApp.controller('modalesCrtl', function($scope, $mdDialog, $mdMedia) {
  $scope.status = '  ';
  $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
  $scope.showRechazado = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/error.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });
    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };

  $scope.hideAlert = function() {
    $('#alertSuperior').hide();
  };

  $scope.showAutorizado = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/exito.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });
    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showmisDatos = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/misDatos.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showRescateFFMM = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/ffmmRescate.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showTransferenciaCarta = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/TransferenciaCarta.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  };
  $scope.showAporteFFMM = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/ffmmAporte.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showAceptar = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/aceptarAutorizacionPersona.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showTransferencias = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/transferenciasExito.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showRestricionIngreso = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/restriccionIngreso.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showCartaAutorizada = function(ev) {
  var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
  $mdDialog.show({
    controller: DialogController,
    templateUrl: 'modales/TransferenciasExito.html',
    parent: angular.element(document.body),
    targetEvent: ev,
    clickOutsideToClose: true,
    fullscreen: useFullScreen
  });

  $scope.$watch(function() {
    return $mdMedia('xs') || $mdMedia('sm');
  }, function(wantsFullScreen) {
    $scope.customFullscreen = (wantsFullScreen === true);
  });
};
$scope.showCartaRechaza = function(ev) {
  var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
  $mdDialog.show({
    controller: DialogController,
    templateUrl: 'modales/transferenciasCartaRechazo.html',
    parent: angular.element(document.body),
    targetEvent: ev,
    clickOutsideToClose: true,
    fullscreen: useFullScreen
  });

  $scope.$watch(function() {
    return $mdMedia('xs') || $mdMedia('sm');
  }, function(wantsFullScreen) {
    $scope.customFullscreen = (wantsFullScreen === true);
  });
};
$scope.showCrearBeneficiario = function(ev) {
  var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
  $mdDialog.show({
    controller: DialogController,
    templateUrl: 'modales/crearBeneficiario.html',
    parent: angular.element(document.body),
    targetEvent: ev,
    clickOutsideToClose: true,
    fullscreen: useFullScreen
  });

  $scope.$watch(function() {
    return $mdMedia('xs') || $mdMedia('sm');
  }, function(wantsFullScreen) {
    $scope.customFullscreen = (wantsFullScreen === true);
  });
};
$scope.showEditarBeneficiario = function(ev) {
  var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
  $mdDialog.show({
    controller: DialogController,
    templateUrl: 'modales/editarBeneficiario.html',
    parent: angular.element(document.body),
    targetEvent: ev,
    clickOutsideToClose: true,
    fullscreen: useFullScreen
  });

  $scope.$watch(function() {
    return $mdMedia('xs') || $mdMedia('sm');
  }, function(wantsFullScreen) {
    $scope.customFullscreen = (wantsFullScreen === true);
  });
};
$scope.showEliminarBeneficiario = function(ev) {
  var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
  $mdDialog.show({
    controller: DialogController,
    templateUrl: 'modales/eliminarBeneficiario.html',
    parent: angular.element(document.body),
    targetEvent: ev,
    clickOutsideToClose: true,
    fullscreen: useFullScreen
  });

  $scope.$watch(function() {
    return $mdMedia('xs') || $mdMedia('sm');
  }, function(wantsFullScreen) {
    $scope.customFullscreen = (wantsFullScreen === true);
  });
};

  $scope.showIngresoCA = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/caIngreso.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showEgresoCA = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/caEgreso.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showCompraME = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/meComprar.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showCompraMEInstruccion = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/meComprarMonedaEx.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showCompraMEInstruccionP = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/meComprarMonedaExP.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };

  $scope.showCompraPersonasME = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/meComprarInstruccion-personas.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };

  $scope.showCompraMEIN = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/meComprarInstruccion.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };

  $scope.showVentaPersonasME = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/meVenderInstruccion-personas.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };

  $scope.showVentaA = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/accionesVender.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showCompraA = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/accionesComprar.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showBienvenida = function(ev) {
    var useFullScreen = ($mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/bienvenidaTutorial.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showBienvenidaNoSesinado = function(ev) {
    var useFullScreen = ($mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/BienvenidaTutorial-noSesionado.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showDescarga = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;

    if ($mdMedia('xs')) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'modales/landing-descargarApp.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: useFullScreen
      });
    }

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showTutorialesHomeFFMM = function(ev) {
    var useFullScreen = ($mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/bienvenidaTutorial-homeFFMM.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showTutorialesAporteFFMM = function(ev) {
    var useFullScreen = ($mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/bienvenidaTutorial-aporteFFMM.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showTutorialesRescateFFMM = function(ev) {
    var useFullScreen = ($mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/bienvenidaTutorial-rescateFFMM.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showTutorialesHomeCCAA = function(ev) {
    var useFullScreen = ($mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/bienvenidaTutorial-homeCCAA.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showTutorialesAporteCCAA = function(ev) {
    var useFullScreen = ($mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/bienvenidaTutorial-aporteCCAA.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showTutorialesRescateCA = function(ev) {
    var useFullScreen = ($mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/bienvenidaTutorial-rescateCA.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showTutorialesHomeAcciones = function(ev) {
    var useFullScreen = ($mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/bienvenidaTutorial-homeAcciones.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showTutorialesComprarAcciones = function(ev) {
    var useFullScreen = ($mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/bienvenidaTutorial-comprarAcciones.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showTutorialesVenderAcciones = function(ev) {
    var useFullScreen = ($mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/bienvenidaTutorial-venderAcciones.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showTutorialesHomeAbonar = function(ev) {
    var useFullScreen = ($mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/bienvenidaTutorial-homeAbonar.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showTutorialesRetirarCI = function(ev) {
    var useFullScreen = ($mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/bienvenidaTutorial-homeRetirar.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showAyuda = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/ayuda.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showAbonarCI = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/ciAbonar.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showRetirarCI = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/ciRetirar.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showDatosRegistrados = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/DatosRegistrados.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  };
  $scope.showcontactoExito = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/contactoExito.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  };
  $scope.showFirmaContrato = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/FirmaContrato.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  };

  $scope.showTransferenciacompleta = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/Transferenciacompleta.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
    $scope.doTheBack = function() {
      window.history.back();
    };
  };
  $scope.showAutorizarBeneficiario = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/AutorizarBeneficiario.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
    $scope.doTheBack = function() {
      window.history.back();
    };
  };

  $scope.showEncuestaSatisfaccion = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/encuestaSatisfaccion.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
    $scope.doTheBack = function() {
      window.history.back();
    };
  };

  $scope.showApvResultado = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/apvResultado.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
    $scope.doTheBack = function() {
      window.history.back();
    };
  };

  $scope.showAutorizarCircularizacion = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/AutorizarCircularizacion.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
    $scope.doTheBack = function() {
      window.history.back();
    };
  };

  $scope.showRechazarCircularizacion = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/RechazarCircularizacion.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
    $scope.doTheBack = function() {
      window.history.back();
    };
  };

  $scope.showPrecioDolar = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/meFijar.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };

  $scope.showAgregarUsuario = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/AgregarUsuario.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };

  $scope.showEliminarUsuario = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/eliminarUsuario.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };

  $scope.showAgregarEmpresa = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/AgregarEmpresa.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };

  $scope.showAnularOperacion = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/AnularOperacion.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showRevocarApv = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/RevocarApv.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showAporteAPV = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/contrato--APV.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showContratoOut = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/contratoApv-out.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showContratoapvExito = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'modales/apv-exito.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });

    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
  $scope.showRevocarApv = function(ev) {
  var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
  $mdDialog.show({
    controller: DialogController,
    templateUrl: 'modales/RevocarApv.html',
    parent: angular.element(document.body),
    targetEvent: ev,
    clickOutsideToClose: true,
    fullscreen: useFullScreen
  });

  $scope.$watch(function() {
    return $mdMedia('xs') || $mdMedia('sm');
  }, function(wantsFullScreen) {
    $scope.customFullscreen = (wantsFullScreen === true);
  });
};
$scope.showcambiarFondo = function(ev) {
var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
$mdDialog.show({
  controller: DialogController,
  templateUrl: 'modales/apv-cambiarFondo.html',
  parent: angular.element(document.body),
  targetEvent: ev,
  clickOutsideToClose: true,
  fullscreen: useFullScreen
});

$scope.$watch(function() {
  return $mdMedia('xs') || $mdMedia('sm');
}, function(wantsFullScreen) {
  $scope.customFullscreen = (wantsFullScreen === true);
});
};
$scope.showRevocarSistematico = function(ev) {
var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
  $mdDialog.show({
    controller: DialogController,
    templateUrl: 'modales/apv-revocarSistematico.html',
    parent: angular.element(document.body),
    targetEvent: ev,
    clickOutsideToClose: true,
    fullscreen: useFullScreen
  });

  $scope.$watch(function() {
    return $mdMedia('xs') || $mdMedia('sm');
  }, function(wantsFullScreen) {
    $scope.customFullscreen = (wantsFullScreen === true);
  });
};
$scope.showApvComprobante = function(ev) {
var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
  $mdDialog.show({
    controller: DialogController,
    templateUrl: 'modales/apv-comprobante.html',
    parent: angular.element(document.body),
    targetEvent: ev,
    clickOutsideToClose: true,
    fullscreen: useFullScreen
  });

  $scope.$watch(function() {
    return $mdMedia('xs') || $mdMedia('sm');
  }, function(wantsFullScreen) {
    $scope.customFullscreen = (wantsFullScreen === true);
  });
};

$scope.showActualizarDatos = function(ev) {
var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
  $mdDialog.show({
    controller: DialogController,
    templateUrl: 'modales/actualizar-datos.html',
    parent: angular.element(document.body),
    targetEvent: ev,
    clickOutsideToClose: true,
    fullscreen: useFullScreen
  });

  $scope.$watch(function() {
    return $mdMedia('xs') || $mdMedia('sm');
  }, function(wantsFullScreen) {
    $scope.customFullscreen = (wantsFullScreen === true);
  });
};

$scope.showGuardarDatos = function(ev) {
var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
  $mdDialog.show({
    controller: DialogController,
    templateUrl: 'modales/guardar-datos.html',
    parent: angular.element(document.body),
    targetEvent: ev,
    clickOutsideToClose: true,
    fullscreen: useFullScreen
  });

  $scope.$watch(function() {
    return $mdMedia('xs') || $mdMedia('sm');
  }, function(wantsFullScreen) {
    $scope.customFullscreen = (wantsFullScreen === true);
  });
};


$scope.showLandingAPV = function(ev) {
var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
  $mdDialog.show({
    controller: DialogController,
    templateUrl: 'modales/landing--apv.html',
    parent: angular.element(document.body),
    targetEvent: ev,
    clickOutsideToClose: true,
    fullscreen: useFullScreen
  });

  $scope.$watch(function() {
    return $mdMedia('xs') || $mdMedia('sm');
  }, function(wantsFullScreen) {
    $scope.customFullscreen = (wantsFullScreen === true);
  });
};

$scope.showTerminos = function(ev) {
var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
  $mdDialog.show({
    controller: DialogController,
    templateUrl: 'modales/terminosCondiciones.html',
    parent: angular.element(document.body),
    targetEvent: ev,
    clickOutsideToClose: true,
    fullscreen: useFullScreen
  });

  $scope.$watch(function() {
    return $mdMedia('xs') || $mdMedia('sm');
  }, function(wantsFullScreen) {
    $scope.customFullscreen = (wantsFullScreen === true);
  });
};

});

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}
