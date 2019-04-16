cursosApp.controller('newTablaCtrl', function($scope) {
  $scope.sort = '+fecha';
  // aperturas de tablas version dinamica
  $scope.active1 = false;
  $scope.active2 = false;
  $scope.toggle1 = function(){
    if(!$scope.active1){
      $scope.active1 = true;
      $scope.active2 = false;
    }else{
      $scope.active1 = false;
    }
  };

  $scope.toggle2 = function(){
    if(!$scope.active2){
      $scope.active2 = true;
      $scope.active1 = false;
    }else{
      $scope.active2 = false;
    }
  };



  $scope.movTransacciones= [
      {
        bolsa: "BCS",
        cantidad: "36",
        compraVenta: "Venta",
        contraparte: "SPREL",
        fecha1: "02/05/2018 14:10",
        fecha2: "02/05/2018 14:11",
        fecha3: "02/05/2018",
        folio: "131514547",
        hora: "14:11:00",
        instrumento: "SECURITY",
        mayorPrecio: "0,0000",
        mayorPrecio1: "314,500/15:54",
        menorPrecio: "312,500/10:22",
        modalidad: "OS",
        monto: "11.235,60",
        precio: "321,1000",
        precioMaximo: "312,500/10:22/BCS",
        precioMinimo: "314,500/15:54/BCS",
        txt1: "Precio de la orden, que podrá ser precio de mercado (PM) o precio límite. En este último caso, se especifica el precio.",
        txt2: "Aceptación: Las órdenes recepcionadas son validadas, para su posterior ejecución, una vez cumplidas las condiciones y provisiones requeridas por el intermediario.",
        txt3: "Modalidad OS: operación con otros operadores contraparte; OD: operación en que el corredor opere tanto como comprador como vendedor, para cuenta propia o de un tercero.",
        txt4: "Contraparte SREL: sin relación con el corredor; PROP: cartera propia del corredor; REL/I: relacionado interno de la corredora; REL/E: relacionado externo de la corredora.",
        txt5: "Mayor y menor precio / hora de corredor: Corresponde al mayor y menor de los precios y las respectivas horas a los que el corredor cerró una operación del mismo tipo que la del cliente (compra o venta), en el mismo día de ejecución de la orden.",
        txt6: "Máximo y mínimo precio / hora en bolsa: Corresponde a los precios máximos y mínimos de negociación en el mercado, y su hora de ejecución durante el día. Se anota hora y bolsa en que se dio primeramente dicho precio.",
        txt7: "Mejor precio vigente otra bolsa: Se informa,de existir al momento del cierre de la operación, referencia a precio de mejor oferta, disponible en otra bolsa o en sistema interbolsa (i). Infórmese de la factibilidad de su corredor de acceder a operar en otras Bolsas de Valores.",
        txt8: "BCS: Bolsa Comercio de Santiago. BEC: Bolsa Electrónica y BOVAL: Bolsa de Valparaíso. ",

      },
    ];
  $scope.circPendientes = [

      {
        fecha: "01/01/2018",
        documento: "Saldo en Custodia al 31 de Diciembre de 2017",
        tipodocumento: "Con Saldo",
      },
    ];
  $scope.circAprobadas = [
      {
        fecha: "01/01/2018",
        documento: "Saldo en Custodia al 31 de Diciembre de 2017",
        tipodocumento: "Con Saldo",
      },
      {
        fecha: "01/06/2017",
        documento: "Saldo en Custodia al 31 de Junio de 2017",
        tipodocumento: "Con Saldo",
      },
      {
        fecha: "01/02/2017",
        documento: "Saldo en Custodia al 31 de Marzo de 2017",
        tipodocumento: "Con Saldo",
      },
      {
        fecha: "01/01/2017",
        documento: "Saldo en Custodia al 31 de Diciembre de 2016",
        tipodocumento: "Con Saldo",
      },
    ];
    $scope.circRechazadas = [
        {
          fecha: "01/01/2018",
          documento: "Saldo en Custodia al 31 de Diciembre de 2017",
          tipodocumento: "Con Saldo",
        },
        {
          fecha: "01/06/2017",
          documento: "Saldo en Custodia al 31 de Junio de 2017",
          tipodocumento: "Con Saldo",
        },
        {
          fecha: "01/02/2017",
          documento: "Saldo en Custodia al 31 de Marzo de 2017",
          tipodocumento: "Con Saldo",
        },
        {
          fecha: "01/01/2017",
          documento: "Saldo en Custodia al 31 de Diciembre de 2016",
          tipodocumento: "Con Saldo",
        },
      ];
});
