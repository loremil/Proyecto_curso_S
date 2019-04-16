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
  