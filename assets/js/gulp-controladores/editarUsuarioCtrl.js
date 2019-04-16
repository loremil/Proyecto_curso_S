cursosApp.controller('EditarUsuarioCtrl', function($scope, $filter) {

  var active = false;
  $scope.usuario = {
    agente: 'Internet',
    apellidoMaterno: 'Parada',
    apellidoPaterno: 'Muñoz',
    beneficiotributario: 'No',
    cantidad: '544',
    cantidad2: '100',
    cartera: 'Agresiva',
    comision: '$46.000',
    comisionUSD: 'US$1',
    comisionIva: '$20.000',
    cuentaCartera: '1',
    cuentadelFondo: '2',
    destino: 'Cuenta Corriente',
    destino2: 'Retiro Casa Matriz',
    destino3: 'Transferencia a Tercero',
    direccion: 'Huérfanos 670 piso 3, Santiago',
    email: 'javier@gmail.com',
    estado: 'Asignado',
    estado2: 'Aprobado',
    fecha: '25/04/2017',
    fechaCobro: '25/04/2017',
    fechaCurse: '25/04/2017',
    fechaSolicitud: '24/04/2017',
    fechaSolicitud2: '24/04/2017 11:15:00',
    fondo: 'Retorno Accionario Largo Plazo',
    instruye: 'Carlos Quezada',
    mercado: 'Nacional',
    moneda: 'USD/CLP',
    nombre: 'Gonzalo Ahumada G.',
    nombres: 'Javier Ignacio',
    noperacion: '535547',
    numerocuotas: '12,0022',
    origen: 'Caja Internet',
    origen2: 'Botón de pago',
    plan: 'No',
    precio: '$35.976',
    precio2: '$644,00',
    precio3: 'US$1,17',
    remuneracion: 'No',
    respaldo: 'factura',
    rut: '17.777.333-3',
    serie: 'CCU',
    numero: '0991234567',
    monto: '313,0022',
    montoUSD: 'US$1.000',
    numberopcional: '0284567654',
    valorcuota: '$460.000',
  };

  var self = this;
  self.contacts1 = [{
    'id': 1,
    'fullName': 'Administrador',
    'lastName': 'Administrador: Encargado de la configuración del uso del Canal.',
    isDisabled: true
  }, {
    'id': 2,
    'fullName': 'Digitador',
    'lastName': 'Digitador: Su función es dar V.B. a las operaciones ingresadas por el Digitador.',
    isDisabled: false
  }, {
    'id': 3,
    'fullName': 'Visador',
    'lastName': 'Visador: Su función es autorizar pagos a tercero. Autoriza la transferencia de pago a proveedores.',
    isDisabled: false
  }, {
    'id': 4,
    'fullName': 'Autorizador',
    'lastName': 'Autorizador: Su función es registar las distintas operaciones en Canal.',
    isDisabled: false
  }];
  self.selectedId1 = 4;
  self.selectedUser1 = function() {
    return $filter('filter')(self.contacts1, {
      id: self.selectedId1
    })[0].lastName;
  };

  $scope.setButton = function() {
    if ($scope.active == true) {
      $scope.active = false;
    } else {
      $scope.active = true;
    }
  }

  $scope.getState = function() {
    if ($scope.active) {
      return true;
    } else {
      return false;
    }
  }
  $scope.data = {
    'cb1': 'Activo',
    isDisabled: true
  };

});
