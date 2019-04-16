
cursosApp.controller('tablaEmpresas', function($scope) {
  $scope.sort = '+nombre';
  $scope.empresa = [
    {
      nombre: "Agrícola Campo Lindo Ltda.",
      rut: "17.777.333-3",
      cuentaCorriente: "31233",
      creacion: "02/12/2016",
    }, {
      nombre: "Spa y Hoteles Buena Vida S.A.",
      rut: "32.333.693-4",
      cuentaCorriente: "31233",
      creacion: "02/12/2016",
    }, {
      nombre: "Shuang Lee Importaciones",
      rut: "24.553.366-6",
      cuentaCorriente: "456733",
      creacion: "04/06/2016",
    }, {
      nombre: "Casa del Músico Ltda.",
      rut: "14.783.789-2",
      cuentaCorriente: "400633",
      creacion: "02/06/2016",
    }, {
      nombre: "Mochi Constructores",
      rut: "09.180.009-4",
      cuentaCorriente: "146773",
      creacion: "02/06/2016",
    }, {
      nombre: "Pesquera Fish Corp.",
      rut: "54.482.127-9",
      cuentaCorriente: "4567226",
      creacion: "02/02/2016",
    }
  ];
});
