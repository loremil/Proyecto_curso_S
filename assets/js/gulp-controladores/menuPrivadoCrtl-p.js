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
