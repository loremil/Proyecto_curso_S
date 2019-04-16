/*  inicio controllerDialogoModales */
cursosApp.controller('dialogCtrl', function ($scope, $mdDialog, $timeout) {
  $scope.status = '  ';
  $scope.customFullscreen = false;

  $scope.fondosRparticipes =[
    {
      name: 'Fondo Ahorro A',
      fechaGeneracion: ' Registro de Partícipe',
      icono: 'border_color'
    },  {
      name: 'Fondo Serie A',
      fechaGeneracion: ' Registro de Partícipe',
      icono: 'border_color',
    },{
      name: 'Fondo Capital A',
      fechaGeneracion: ' Registro de Partícipe',
      icono: 'border_color'
    },
    {
      name: 'Fondo Corporativo A',
      fechaGeneracion: ' Registro de Partícipe',
      icono: 'border_color'
    },
    {
      name: 'Fondo Capital A',
      fechaGeneracion: ' Registro de Partícipe',
      icono: 'border_color'
    },
    {
      name: 'Fondo Deposito A',
      fechaGeneracion: ' Registro de Partícipe',
      icono: 'border_color'
    },
    {
      name: 'Fondo Disponible A',
      fechaGeneracion: ' Registro de Partícipe',
      icono: 'border_color'
    },
    {
      name: 'Fondo Estrategico D',
      fechaGeneracion: ' Registro de Partícipe',
      icono: 'border_color'
    },
    {
      name: 'Fondo Horizonte D',
      fechaGeneracion: ' Registro de Partícipe',
      icono: 'border_color'
    },
    {
      name: 'Fondo Liquidez Full',
      fechaGeneracion: ' Registro de Partícipe',
      icono: 'border_color'
    },
    {
      name: 'Fondo Efectivo A',
      fechaGeneracion: ' Registro de Partícipe',
      icono: 'border_color'
    },
    {
      name: 'Fondo Deuda Estatal',
      fechaGeneracion: ' Registro de Partícipe',
      icono: 'border_color'
    }
  ],

  $scope.contratosNoFirmados =[
    {
      name: 'Registro de Cliente',
      fechaGeneracion: '05/01/2017',
      icono: 'border_color'
    },  {
      name: 'Facturación Electrónica',
      fechaGeneracion: '05/01/2017',
      icono: 'border_color',
      error: true
    },{
      name: 'Declaración de Origen de Fondos',
      fechaGeneracion: '05/01/2017',
      icono: 'border_color'
    },{
      name: 'Contrato Servicio Internet',
      fechaGeneracion: '05/01/2017',
      icono: 'border_color'
    }
  ],

  $scope.productosContratados2 =[
    {
      name: 'APV Sistemático',
      fechaGeneracion: '13/08/2018',
      icono: 'border_color'
    },
    {
      name: 'APV Sistemático',
      fechaGeneracion: '05/01/2017',
      icono: 'border_color'
    }
  ],

  $scope.contratosFirmados =[
    {
      name: 'Registro de Cliente',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },{
      name: 'Deber Tributario Extranjero',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app',
      error: true
    },{
      name: 'Contrato General de Fondos',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },{
      name: 'Perfil de Inversionista',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },{
      name: 'Contrato de Custodia',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },{
      name: 'Declaración PEP',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },
  ],
  $scope.CarteraActiva =[
    {
      name: 'Cartera Agresiva',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    }
  ],
  $scope.documentosFFMM =[
    {
      name: 'Folleto Informativo',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },{
      name: 'Reglamento Interno',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app',
      error: true
    },{
      name: 'Contrato General de Fondos',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },{
      name: 'Cartera de Inversión - Nacional',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },{
      name: 'Cartera de Inversión - Extranjera ',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },{
      name: 'Cartera de Inversión - Futuros ',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },{
      name: 'Cartera de Inversión - Opciones',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },{
      name: 'Estados Financieros Anuales - 2012 ',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },{
      name: 'Estados Financieros Anuales - 2013 ',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },{
      name: 'Estados Financieros Anuales - 2014',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },{
      name: 'Estados Financieros Anuales - 2015',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },
  ],
  $scope.contratosCertificados =[
    {
      name: 'Certificado de dividendos de Acciones',
      periodo: 'Abril 2015',
      publicacion: '03/12/2016',
      icono: 'get_app'
    },  {
      name: 'Facturas 1891',
      periodo: 'Abril 2015',
      publicacion: '03/12/2016',
      icono: 'get_app',
      error: true
    },{
      name: 'Certificado de depósitos Convenidos',
      periodo: 'Abril 2015',
      publicacion: '03/12/2016',
      icono: 'get_app'
    },{
      name: 'Fondos Mutuos No Acogidos 57 Bis',
      periodo: 'Abril 2015',
      publicacion: '03/12/2016',
      icono: 'get_app'
    }
  ],
  $scope.contratosFacturas =[
    {
      name: 'Factura Exenta Electrónica',
      periodo: 'Abril 2015',
      publicacion: '03/12/2016',
      icono: 'get_app'
    },  {
      name: 'Factura Exenta Electrónica',
      periodo: 'Abril 2015',
      publicacion: '03/12/2016',
      icono: 'get_app',
      error: true
    },{
      name: 'Factura Exenta Electrónica',
      periodo: 'Abril 2015',
      publicacion: '03/12/2016',
      icono: 'get_app'
    },{
      name: 'Factura Exenta Electrónica',
      periodo: 'Abril 2015',
      publicacion: '03/12/2016',
      icono: 'get_app'
    }
  ],
  $scope.contratosComprobantes =[
    {
      name: 'Comprobante',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },  {
      name: 'Comprobante',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app',
      error: true
    },
  ],
  $scope.informes =[
    {
      name: 'Informe Apertura Bursátil',
      fechaGeneracion: '05/01/2017',
      icono: 'get_app'
    },
  ],


  $scope.showAdvanced = function (ev, contrato) {
    contrato.downloading = true;

    $timeout(function(){
      contrato.downloading = false;
      if(contrato.error){
        contrato.icono = 'close';
        contrato.classIcon = 'icon--error';
        contrato.classBorder = 'border--error';
        $timeout(function(){
          contrato.icono = 'border_color';
          contrato.classIcon = '';
          contrato.classBorder = '';
        },2000);
      }else{
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'modales/documentos--contrato.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      });
        contrato.icono = 'done';
        contrato.classIcon = 'icon--exito';
        contrato.classBorder = 'border--exito';
      }
    },3000);
  },

  $scope.showAdvancedParticipes = function (ev, contrato) {
    contrato.downloading = true;

    $timeout(function(){
      contrato.downloading = false;
      if(contrato.error){
        contrato.icono = 'close';
        contrato.classIcon = 'icon--error';
        contrato.classBorder = 'border--error';
        $timeout(function(){
          contrato.icono = 'border_color';
          contrato.classIcon = '';
          contrato.classBorder = '';
        },2000);
      }else{
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'modales/documentos--participes.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,

        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      });
        contrato.icono = 'done';
        contrato.classIcon = 'icon--exito';
        contrato.classBorder = 'border--exito';
      }
    },3000);
  },

  $scope.showAdvancedApv = function (ev, contrato) {
    contrato.downloading = true;

    $timeout(function(){
      contrato.downloading = false;
      if(contrato.error){
        contrato.icono = 'close';
        contrato.classIcon = 'icon--error';
        contrato.classBorder = 'border--error';
        $timeout(function(){
          contrato.icono = 'border_color';
          contrato.classIcon = '';
          contrato.classBorder = '';
        },2000);
      }else{
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'modales/documentos--contrato--apv.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      });
        contrato.icono = 'done';
        contrato.classIcon = 'icon--exito';
        contrato.classBorder = 'border--exito';
      }
    },3000);
  },
  $scope.showAdvancedApv2 = function (ev, contrato) {
    contrato.downloading = true;

    $timeout(function(){
      contrato.downloading = false;
      if(contrato.error){
        contrato.icono = 'close';
        contrato.classIcon = 'icon--error';
        contrato.classBorder = 'border--error';
        $timeout(function(){
          contrato.icono = 'border_color';
          contrato.classIcon = '';
          contrato.classBorder = '';
        },2000);
      }else{
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'modales/documentos--contrato--apv--sinmodificar.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      });
        contrato.icono = 'done';
        contrato.classIcon = 'icon--exito';
        contrato.classBorder = 'border--exito';
      }
    },3000);
  },

  $scope.showPrerenderedDialog = function (ev) {
    $mdDialog.show({
      contentElement: '#myDialog',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true
    });
  },

  function DialogController($scope, $mdDialog) {
    $scope.hide = function () {
      $mdDialog.hide();
    };

    $scope.cancel = function () {
      $mdDialog.cancel();
    };

    $scope.answer = function (answer) {
      $mdDialog.hide(answer);
    };
  }
});
/*  fin controllerDialogoModales */
