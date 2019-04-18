// Var app es quien inicializa la aplicacién de angular
var cursosApp = angular.module('cursosApp', ['ngMaterial', 'ngRoute', 'ngAnimate',  'matchMedia',  'hl.sticky']);

/* Inicio scroll animación */
cursosApp.controller('animateCtrl', function($scope) {
  $scope.a_fadein = function($el) {
    $el.removeClass('no_visible');
    $el.addClass('a_fadein');
  };
  $scope.a_fadeup1 = function($el) {
    $el.removeClass('no_visible');
    $el.addClass('a_fadeup1');
  };
  $scope.a_fadeup2 = function($el) {
    $el.removeClass('no_visible');
    $el.addClass('a_fadeup2');
  };
  $scope.a_fadeup3 = function($el) {
    $el.removeClass('no_visible');
    $el.addClass('a_fadeup3');
  };
  $scope.a_fadeup4 = function($el) {
    $el.removeClass('no_visible');
    $el.addClass('a_fadeup4');
  };
  $scope.a_fadeleft1 = function($el) {
    $el.removeClass('no_visible');
    $el.addClass('a_fadeleft1');
  };
  $scope.a_fadeleft2 = function($el) {
    $el.removeClass('no_visible');
    $el.addClass('a_fadeleft2');
  };
  $scope.a_fadeleft3 = function($el) {
    $el.removeClass('no_visible');
    $el.addClass('a_fadeleft3');
  };

//Buscador
  $scope.show = [];
  $scope.toggleClick = function(view) {
     $scope.show[view] = !$scope.show[view] ;
  }
  var self = this;
    self.simulateQuery = false;
    self.isDisabled    = false;
    //fin buscador

});



/* Fin scroll animación */


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

// menu expandible
cursosApp.controller('expandCollapseCtrl', function($scope) {
  $scope.active = true;
  $scope.active1 = true;
  $scope.active2 = true;
  $scope.active3 = true;
  $scope.active4 = true;
  $scope.active7 = false;
  $scope.active8 = true;
  $scope.menuMovil = true;
  $scope.mouseClickN = function(position) {
    $scope.activo[position] = "";
    $scope.visible[position] = true;
  }

});
// fin menu expandible

cursosApp.controller('lateralMenu', function($scope, $timeout, $mdSidenav) {
  $scope.toggleLeft = buildToggler('left');
  $scope.toggleRight = buildToggler('right');

  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    };
  }
});

/*  inicio controllerMenuContextual */
cursosApp.controller('menuContextual', function DemoCtrl($mdDialog) {
  var originatorEv;
  this.openMenu = function($mdOpenMenu, ev) {
    originatorEv = ev;
    $mdOpenMenu(ev);
  };
  this.notificationsEnabled = true;
  this.toggleNotifications = function() {
    this.notificationsEnabled = !this.notificationsEnabled;
  };
  this.redial = function() {
    $mdDialog.show(
      $mdDialog.alert()
        .targetEvent(originatorEv)
        .clickOutsideToClose(true)
        .parent('body')
        .title('Suddenly, a redial')
        .textContent('You just called a friend; who told you the most amazing story. Have a cookie!')
        .ok('That was easy')
    );
    originatorEv = null;
  };
  this.checkVoicemail = function() {
    // This never happens.
  };
});
/*  inicio controllerTimeline */

cursosApp.controller('menuInteriorCrtl', ['$scope', '$location', function ($scope, screenSize) {
    $scope.activo = [];
    $scope.visible = [];
  
    $scope.menuAbierto = false;
    $scope.subMenuActivo = -1;
  
    $scope.mouseOver = function (position) {
      $scope.activo[position] = "activo-menuPrivado";
      $scope.visible[position] = true;
    };
  
    $scope.mouseLeave = function (position) {
      $scope.activo[position] = "";
      $scope.visible[position] = false;
  
    };
    $scope.mouseClick = function (position) {
      $scope.activo[position] = "";
      $scope.visible[position] = false;
    };
    $scope.mouseClick = function (position) {
      $scope.activo[position] = "";
      $scope.visible[position] = true;
    };
    $scope.isActive = false;
    $scope.activeButton = function (menuId) {
      $scope.currentOpen.menuId = menuId;
    };
  
    $scope.isActiveMenu = function (destination) {
      return destination === $scope.path();
    }
  
    $scope.currentOpen = {
      menuId: null
    };
  
  
    $scope.menuEmpresa = [{
      id: 1,
      name: 'BOLETA DE GARANTÍA',
      menu: [{
        name: 'BOLETA DE GARANTÍA ONLINE',
        url: '#boleta-online'
      }, {
        name: 'BOLETA DE GARANTÍA MANUAL',
        url: '#boleta-manual',
        subMenu: []
      }]
    }
    ];
  
    $scope.menuEmpresa2 = [{
      id: 2,
      name: 'CRÉDITO DE CONSUMO',
      menu: [{
        name: 'menu2',
        url: '#resumen'
      }, {
        name: 'menu2',
        url: '#boleta-manual',
        subMenu: []
      }]
    }];
  
  
    $scope.menuEmpresa3 = [{
      id: 3,
      name: 'POST VENTA TARJETA DE CRÉDITO',
      url: '#resumen',
      menu: [{
        name: 'menu3',
        url: '#resumen'
      }, {
        name: 'menu3',
        url: '#boleta-manual',
        subMenu: []
      }]
    }];
  
    $scope.menuEmpresa4 = [{
      id: 4,
      name: 'CRÉDITO DE CONSUMO',
      menu: [{
        name: 'menu2',
        url: '#resumen'
      }, {
        name: 'menu2',
        url: '#boleta-manual',
        subMenu: []
      }]
    }];
  
    $scope.mostrarOcultarSubMenu = function (indice, longitudMenu) {
      if ($scope.subMenuActivo == -1 || $scope.subMenuActivo == indice) {
        $scope.menuAbierto = !$scope.menuAbierto;
      }
      $scope.subMenuActivo = $scope.menuAbierto ? indice : -1;
      if (longitudMenu == 0) {
        $scope.cerrarMenu();
      }
    }
  
    $scope.cerrarMenu = function () {
      $scope.currentOpen.menuId = false;
      $scope.isActive = null;
      $scope.subMenuActivo = -1;
    }
  
  
    function previousPage() {
      var i, tab, elements = getElements();
      for (i = 0; i < elements.tabs.length; i++) {
        tab = elements.tabs[i];
        if (tab.offsetLeft + tab.offsetWidth >= ctrl.offsetLeft) break;
      }
      ctrl.offsetLeft = fixOffset(tab.offsetLeft + tab.offsetWidth - elements.canvas.clientWidth);
    }
  }]);
  
cursosApp.controller('menuPrivadoCrtl-p', ['$scope', '$location', function ($scope, screenSize) {
  $scope.activo = [];
  $scope.visible = [];

  
  $scope.isActive = false;
  $scope.activeButton = function (menuId) {
    $scope.currentOpen.menuId = menuId;
  };


  $scope.currentOpen = {
    menuId: null
  };

// inicio nav superior
  $scope.menuEmpresa = [{
    id: 1,
    name: 'BOLETA DE GARANTÍA',
    menu: [{
      name: 'BOLETA DE GARANTÍA ONLINE',
      url: '#boletaOnline-flujoProcesoComercialDiagrama'
    }, {
      name: 'BOLETA DE GARANTÍA MANUAL',
      url: '#boleta-manual',
      subMenu: []
    }]
  }
  ];

  $scope.menuEmpresa2 = [{
    id: 2,
    name: 'CRÉDITO DE CONSUMO',
    menu: [{
      name: 'menu2',
      url: '#resumen'
    }, {
      name: 'menu2',
      url: '#boleta-manual',
      subMenu: []
    }]
  }];


  $scope.menuEmpresa3 = [{
    id: 3,
    name: 'POST VENTA TARJETA DE CRÉDITO',
    // url: '#resumen',
    menu: [{
      name: 'menu3',
      url: '#resumen'
    }, {
      name: 'menu3',
      url: '#boleta-manual',
      subMenu: []
    }]
  }];
// fin nav superior

// inicio nav flotante izquierdo
  $scope.menuEmpresa4 = [{
    id: 4,
    name: 'FLUJO DEL PROCESO COMERCIAL',
    // url:'#boletaOnline-flujoProcesoComercial'
    menu: [{
      name: 'menu2',
      url: '#resumen'
    }, {
      name: 'menu2',
      url: '#boleta-manual',
      subMenu: []
    }]
  }];

// fin nav flotante izquierdo
}]);
