cursosApp.controller('tablaInfoLegalFondos', function($scope) {
  $scope.expanded = false;
  $scope.categorias = [{
    name: "Otros documentos importantes",
    descripcion: "",
    links: [{
      iconFile: "attach_file",
      name: 'Carteras Trimestrales',
      url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=15538130-7fcc-4084-a3db-648aa7a070f8&groupId=10139',
    }, {
      iconFile: "attach_file",
      name: 'Glosario Folletos Informativos',
      url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=15538130-7fcc-4084-a3db-648aa7a070f8&groupId=10139',
    }, {
      iconFile: "attach_file",
      name: 'Tabla de Costos',
      url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=c6538616-afb9-47b3-bf88-9ed1cd414287&groupId=10139',
    }, {
      iconFile: "attach_file",
      name: 'Remuneraciones',
      url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=c6538616-afb9-47b3-bf88-9ed1cd414287&groupId=10139',
    }, {
      iconFile: "attach_file",
      name: 'Cuadro de Costos de Fondos Mutuos',
      url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=c6538616-afb9-47b3-bf88-9ed1cd414287&groupId=10139',
    }]
  }]
});
