cursosApp.controller('FavoritosCtrl', function($scope, $http, $element, dragularService, $filter, $mdDialog, $mdMedia) {

  $scope.palabraClave = "";

  $scope.init = function() {

    $scope.consultaTipoIndicador();

    $scope.consultaIndicador();

  };

  $scope.tipoInd = new Array();

  $scope.tipoIndM = new Array();

  $scope.tipoIndSel = new Object();

  $scope.tipoIndMSel = new Object();

  $scope.consultaTipoIndicador = function() {

    var parameters = {
      req: "{}"
    };

    var config = {
      params: parameters
    };

    $http.get("./assets/json/tipoIndicador.json", config)
      .success(function(data, status, headers, config) {

        $scope.tipoInd.length = 0;

        var tipoInd = new Object();

        tipoInd.item = -1;
        tipoInd.nombre = "Todas";
        tipoInd.tipo = "";
        tipoInd.hide = true;

        $scope.tipoIndM.push(tipoInd);


        if (data.estadoOperacion.codigoOperacion == "000") {

          for (var i = 0; i < data.tipo.length; i++) {

            var tipoInd = new Object();

            tipoInd.item = data.tipo[i].idTipo;
            tipoInd.nombre = data.tipo[i].descripcion;
            tipoInd.tipo = data.tipo[i].codTipo;
            tipoInd.hide = false;

            $scope.tipoIndM.push(tipoInd);
            $scope.tipoInd.push(tipoInd);

          }

        } else {
          console.log("Error al ejecutar servicio Tipo de Indicador");
        }

        $scope.tipoIndSel = $scope.tipoInd[0];
        $scope.tipoIndMSel = $scope.tipoIndM[0];

      })
      .error(function(data, status, header, config) {
        console.log("Error al ejecutar servicio Tipo de Indicador");
      });

  };

  $scope.indicadores = new Array();

  $scope.consultaIndicador = function() {

    var parameters = {
      req: "{}"
    };

    var config = {
      params: parameters
    };

    $http.get("./assets/json/indicadores.json", config)
      .success(function(data, status, headers, config) {

        $scope.indicadores.length = 0;

        if (data.estadoOperacion.codigoOperacion == "000") {

          for (var i = 0; i < data.nemo.length; i++) {

            var ind = new Object();

            ind.item = i;
            ind.tipo = data.nemo[i].codTipo;
            ind.tipoNombre = ($filter('filter')($scope.tipoInd, {
              tipo: data.nemo[i].codTipo
            })[0]).nombre;
            ind.nombre = data.nemo[i].nemotecnico;
            ind.hide = false;
            ind.idNemotecnico = data.nemo[i].idNemotecnico;

            $scope.indicadores.push(ind);

          }

        } else {
          console.log("Error al ejecutar servicio Consulta Indicador");
        }

      })
      .error(function(data, status, header, config) {
        console.log("Error al ejecutar servicio Consulta Indicador");
      });

  };

  $scope.indDest = new Array();

  for (var i = 0; i < 5; i++) {

    var itemIndDest = new Object();

    itemIndDest.nombre = "Disponible";
    itemIndDest.tipo = "";
    itemIndDest.tipoNombre = "";
    itemIndDest.item = i;
    itemIndDest.hide = true;

    $scope.indDest.push(itemIndDest);
  }


  $scope.menu = new Array();

  for (var i = 0; i < 3; i++) {

    var menuItem = new Object();

    if (i == 0) {

      menuItem.nombre = "Consultar";
      menuItem.subMenu = new Array();

      for (var j = 0; j < 3; j++) {

        var sunbMenuItem = new Object();

        if (j == 0) {
          sunbMenuItem.nombre = "Resumen";
          sunbMenuItem.item = j;
          sunbMenuItem.icono = "banicon-resumen indicadoresFavoritos--iconoLista";
          sunbMenuItem.flagCheck = false;
        } else if (j == 1) {
          sunbMenuItem.nombre = "Patrimonio";
          sunbMenuItem.item = j;
          sunbMenuItem.icono = "banicon-patrimonio indicadoresFavoritos--iconoLista";
          sunbMenuItem.flagCheck = false;
        } else if (j == 2) {
          sunbMenuItem.nombre = "Movimiento";
          sunbMenuItem.item = j;
          sunbMenuItem.icono = "banicon-movimientos indicadoresFavoritos--iconoLista";
          sunbMenuItem.flagCheck = false;
        }


        menuItem.subMenu.push(sunbMenuItem);
      }

      $scope.menu.push(menuItem);

    } else if (i == 1) {

      menuItem.nombre = "Invertir";
      menuItem.subMenu = new Array();

      var sunbMenuItem = new Object();
      sunbMenuItem.nombre = "Banchile Pay";
      sunbMenuItem.icono = "banicon-banchile_pay indicadoresFavoritos--iconoLista";
      sunbMenuItem.item = 1;
      sunbMenuItem.flagCheck = false;

      menuItem.subMenu.push(sunbMenuItem);

      $scope.menu.push(menuItem);

    } else if (i == 2) {

      menuItem.nombre = "Definir";
      menuItem.subMenu = new Array();

      for (var j = 0; j < 4; j++) {

        var sunbMenuItem = new Object();

        if (j == 0) {
          sunbMenuItem.nombre = "Empresas";
          sunbMenuItem.item = j;
          sunbMenuItem.icono = "banicon-empresa indicadoresFavoritos--iconoLista";
          sunbMenuItem.flagCheck = false;
        } else if (j == 1) {
          sunbMenuItem.nombre = "Usuarios";
          sunbMenuItem.item = j;
          sunbMenuItem.icono = "banicon-avatar indicadoresFavoritos--iconoLista";
          sunbMenuItem.flagCheck = false;
        } else if (j == 2) {
          sunbMenuItem.nombre = "Beneficiarios";
          sunbMenuItem.item = j;
          sunbMenuItem.icono = "banicon-beneficiarios indicadoresFavoritos--iconoLista";
          sunbMenuItem.flagCheck = false;
        } else if (j == 3) {
          sunbMenuItem.nombre = "Favoritos";
          sunbMenuItem.item = j;
          sunbMenuItem.icono = "banicon-marcador_favoritos indicadoresFavoritos--iconoLista";
          sunbMenuItem.flagCheck = false;
        }


        menuItem.subMenu.push(sunbMenuItem);
      }

      $scope.menu.push(menuItem);

    }

  }

  var containerLeft = document.querySelector('#origenDrag');
  var containerRight = document.querySelector('#destinoDrag');

  function accepts(el, target, source) {
    if (source === containerLeft || source === target) {
      return true;
    }
  }
  //dragularService([containerLeft], {
  //  copy: true,
  //move only from left to right
  //accepts: accepts
  //});

  dragularService([containerRight], {
    removeOnSpill: false,
    boundingBox: containerRight,
    //move only from left to right
    //accepts: accepts
    moves: function(el, container, handle) {

      console.log(el);
      console.log(container);
      console.log(handle);
      console.log(el.id + "-" + el.id.substr(7));

      var flag = true;

      if (el.id.substr(7) == "true")
        flag = false;

      console.log(flag);

      return flag;
    },
    scope: $scope
  });

  $scope.eliminarIndicador = function(event, itemInd) {

    var idDivSel = event.target.parentNode.parentNode.parentNode.parentNode.id;
    var itemSel = idDivSel.substr(5, 1);

    var containerRight = document.querySelector('#destinoDrag');

    var indexArray = new Array();

    angular.forEach(containerRight.childNodes, function(value, key) {

      if (value.tagName == "DIV") {
        console.log(key + ': ' + value.tagName + ': ' + value.id);

        indexItem = new Object();
        indexItem.item = Number(value.id.substr(5, 1));
        indexItem.hide = ("true" == value.id.substr(7));

        indexArray.push(indexItem);

      }

    });

    console.log("Lista 1:");
    console.log(JSON.stringify(indexArray));

    for (var i = 0; i < indexArray.length; i++) {

      if (indexArray[i].item == itemSel) {
        indexArray[i].hide = true;
      }
    }

    console.log("Lista 2:");
    console.log(JSON.stringify(indexArray));

    var indDestSel = new Array();
    var indDestDisp = new Array();

    for (var i = 0; i < indexArray.length; i++) {

      if (indexArray[i].hide == false)
        indDestSel.push(indexArray[i]);
      else
        indDestDisp.push(indexArray[i]);
    }

    indexArray.length = 0;

    Array.prototype.push.apply(indexArray, indDestSel);
    Array.prototype.push.apply(indexArray, indDestDisp);

    console.log(indexArray);

    var arrayAux = $scope.indDest.slice(0);

    console.log(arrayAux);

    $scope.indDest.length = 0;

    for (var i = 0; i < indexArray.length; i++) {

      var itemFilter = $filter('filter')(arrayAux, {
        item: indexArray[i].item
      })[0];

      var itemIndDest = new Object();

      itemIndDest.item = i;
      itemIndDest.hide = indexArray[i].hide;

      if (indexArray[i].hide == true) {
        itemIndDest.nombre = "Disponible";
        itemIndDest.categoria = "";
      } else {
        itemIndDest.nombre = itemFilter.nombre;
        itemIndDest.categoria = itemFilter.categoria;
      }

      $scope.indDest.push(itemIndDest);
    }

    console.log($scope.indDest);

  };

  $scope.agregarIndicador = function(ev, itemInd) {

    var flagAgregar = false;

    for (var i = 0; i < 5; i++) {

      if ($scope.indDest[i].hide == true) {
        flagAgregar = true;
        break;
      }

    }

    if (!flagAgregar) {

      $scope.msgContent = "Solo puede seleccionar 5 Indicadores";
      $scope.showNoAutorizado(ev, "idForm");

      return;
    }

    itemInd.hide = true;

    for (var i = 0; i < 5; i++) {

      if ($scope.indDest[i].hide == true) {
        $scope.indDest[i].tipo = itemInd.tipo;
        $scope.indDest[i].tipoNombre = itemInd.tipoNombre;
        $scope.indDest[i].nombre = itemInd.nombre;
        $scope.indDest[i].hide = false;
        break;
      }

    }

  };

  $scope.$on('dragulardragend', function(e, el) {

    var containerRight = document.querySelector('#destinoDrag');

    var indexArray = new Array();

    angular.forEach(containerRight.childNodes, function(value, key) {

      if (value.tagName == "DIV") {
        console.log(key + ': ' + value.tagName + ': ' + value.id);

        indexItem = new Object();
        indexItem.item = Number(value.id.substr(5, 1));
        indexItem.hide = ("true" == value.id.substr(7));

        indexArray.push(indexItem);

      }

    });

    var indDestSel = new Array();
    var indDestDisp = new Array();

    for (var i = 0; i < indexArray.length; i++) {

      if (indexArray[i].hide == false)
        indDestSel.push(indexArray[i]);
      else
        indDestDisp.push(indexArray[i]);
    }

    indexArray.length = 0;

    Array.prototype.push.apply(indexArray, indDestSel);
    Array.prototype.push.apply(indexArray, indDestDisp);

    console.log(indexArray);

    var arrayAux = $scope.indDest.slice(0);

    console.log(arrayAux);

    $scope.indDest.length = 0;

    for (var i = 0; i < indexArray.length; i++) {

      var itemFilter = $filter('filter')(arrayAux, {
        item: indexArray[i].item
      })[0];

      var itemIndDest = new Object();

      itemIndDest.item = i;
      itemIndDest.hide = indexArray[i].hide;

      if (indexArray[i].hide == true) {
        itemIndDest.nombre = "Disponible";
        itemIndDest.tipo = "";
        itemIndDest.tipoNombre = "";
      } else {
        itemIndDest.nombre = itemFilter.nombre;
        itemIndDest.tipo = itemFilter.tipo;
        itemIndDest.tipoNombre = itemFilter.tipoNombre;
      }

      $scope.indDest.push(itemIndDest);
    }

    console.log($scope.indDest);

    $scope.$apply();

  });

  $scope.favList = new Array();

  $scope.agregarFavorito = function(ev, itemInd) {

    console.log("Val:" + itemInd.nombre);
    console.log("Check:" + itemInd.flagCheck);

    if (!itemInd.flagCheck) {

      if ($scope.favList.length < 5) {

        itemInd.flagCheck = true;

        var itemFav = new Object();

        itemFav.nombre = itemInd.nombre;
        itemFav.item = itemInd.item;
        itemFav.icono = itemInd.icono;

        $scope.favList.push(itemFav);

      } else {
        itemInd.flagCheck = false;
        $scope.msgContent = "Solo puede seleccionar 5 Favoritos";
        $scope.showNoAutorizado(ev, "idForm");
      }

    } else {

      itemInd.flagCheck = false;

      var lenList = $scope.favList.length;

      for (var i = 0; i < lenList; i++) {
        if ($scope.favList[i].nombre == itemInd.nombre) {
          $scope.favList.splice(i, 1);
          break;
        }
      }

    }


  };


  $scope.msgContent = "";

  $scope.showNoAutorizado = function(ev, idForm) {

    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;

    $mdDialog.show({
      templateUrl: 'noAutorizado.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen,
      locals: {
        msg: $scope.msgContent
      },
      controller: ['$scope', '$mdDialog', 'msg', NoAutorizadoCtrl]
    })

    $scope.$watch(function() {

      return $mdMedia('xs') || $mdMedia('sm');

    }, function(wantsFullScreen) {

      $scope.customFullscreen = (wantsFullScreen === true);

    });

    function NoAutorizadoCtrl($scope, $mdDialog, msg) {

      $scope.msg = msg;

      $scope.closeDialog = function() {
        $mdDialog.hide();
      };

      $scope.aceptar = function() {
        $mdDialog.hide();
      };

    };

  };

  $scope.showBuscarInd = function(ev) {

    //var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
    var useFullScreen = true;

    $mdDialog.show({
      templateUrl: 'buscarInd.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      escapeToClose: false,
      clickOutsideToClose: false,
      fullscreen: useFullScreen,
      locals: {
        tipoIndM: $scope.tipoIndM,
        tipoInd: $scope.tipoInd,
        indicadores: $scope.indicadores,
        tipoIndMSel: $scope.tipoIndMSel,
        palabraClave: $scope.palabraClave,
      },
      controller: ['$scope', '$mdDialog', 'tipoIndM', 'tipoInd', 'indicadores', 'tipoIndMSel', 'palabraClave', BuscarIndicadorCtrl],
      scope: $scope,
      preserveScope: true
    })


    $scope.$watch(function() {

      if (!($mdMedia('xs') || $mdMedia('sm')))
        $mdDialog.hide();

      return $mdMedia('xs') || $mdMedia('sm');

    }, function(wantsFullScreen) {

      $scope.customFullscreen = (wantsFullScreen === true);

    });

    function BuscarIndicadorCtrl($scope, $mdDialog, tipoIndM, tipoInd, indicadores, tipoIndMSel, palabraClave) {

      $scope.tipoIndM = tipoIndM;
      $scope.tipoInd = tipoInd;
      $scope.indicadores = indicadores;
      $scope.tipoIndMSel = tipoIndMSel;
      $scope.palabraClave = palabraClave;

      $scope.closeDialog = function() {
        $mdDialog.hide();
      };

      $scope.aceptar = function() {
        $mdDialog.hide();
      };

    };

  };

  $scope.changeTipo = function(ev) {

    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));

    if (useFullScreen) {
      $scope.showBuscarInd(ev);
    }

  }

  $scope.changePalabraClave = function(ev) {

    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));

    if (useFullScreen && $scope.palabraClave) {
      $scope.showBuscarInd(ev);
    }

  }

});
