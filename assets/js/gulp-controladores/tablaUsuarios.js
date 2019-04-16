// Controlador de listado de Usuarios
cursosApp.controller('tablaUsuarios', function($scope) {
  $scope.sort = '+nombres';
  $scope.usuar = [{
    nombres: "Javier Ignacio",
    apellidoPaterno: "Muñoz",
    apellidoMaterno: "Parada",
    rut: "17.777.333-3",
    rol: "Digitador",
    producto: "Banchile Pay",
    creacion: "01/05/2016 13:50:00",
  }, {
    nombres: "Antonio Manuel",
    apellidoPaterno: "Duarte",
    apellidoMaterno: "López",
    rut: "12.333.333-4",
    rol: "Visador",
    producto: "Banchile Pay",
    creacion: "03/05/2016 17:44:00",
  }, {
    nombres: "Santiago Luis",
    apellidoPaterno: "Montenegro",
    apellidoMaterno: "Araneda",
    rut: "8.322.333-3",
    rol: "Digitador",
    producto: "Fondo Mutuo Cash",
    creacion: "15/06/2016 08:45:33",
  }];
});
// Controlador de listado de Usuarios
