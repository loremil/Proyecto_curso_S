cursosApp.controller('tablaPreguntasFrecuentesMX', function($scope) {
  $scope.expanded = false;
  $scope.categorias = [{
    pregunta: "¿Qué es Moneda Extranjera?",
    respuesta: "Moneda extranjera o divisa, se refiere a los billetes o monedas de países extranjeros, cualquiera sea su denominación o característica, a las letras de cambio, cheques, cartas de crédito, órdenes de pago, pagarés, giros y cualquier otro documento en que conste una obligación pagadera en dicha moneda. En Chile, la moneda extranjera se utiliza como medio de pago en las operaciones internacionales de comercio e inversión y como alternativa de ahorro para los inversionistas."
    }, {
    pregunta:"¿Qué es Compra y Venta de Dólares y otras Monedas?",
    respuesta:"Banchile ofrece a tus clientes el servicio de compra y venta dólares. En las operaciones de compra y venta de dólares y otras monedas, los clientes obtienen precios altamente competitivos, resultados rápidos, seguros y transparentes y disponibilidad de precio permanente. Además, cada cliente recibe ventajas especiales de servicio, como son depósito en cuenta corriente, cheques bancarios y transferencias al exterior en el día."
    }, {
    pregunta:"¿Qué es Venta y Transferencias de otras Monedas (Paridades)?",
    respuesta:"Banchile permite a tus clientes adquirir monedas distintas al dólar, como euro, libra esterlina, yen japonés, etc., con transferencias hacia cuentas corrientes en distintas ciudades del mundo o directamente con cheques bancarios."
    }, {
    pregunta:"¿Qué es un Pacto en Moneda Extranjera?",
    respuesta:"Los Pactos en Moneda Extranjera o Pactos de Venta con Compromiso de Retrocompra, son una alternativa de inversión en dólares o euro, para períodos desde 2 días, que ofrecen atractivas tasas por el plazo que más le acomode a los clientes, optimizando la combinación de rentabilidad, flexibilidad y liquidez. Consiste en una venta de documentos, con el compromiso de recomprarlos en la fecha de vencimiento del pacto, a un valor superior, el cual tiene implícita una tasa de interés."
    }, {
    pregunta:"¿Qué es Compra y Venta de Instrumentos Financieros en Dólares?",
    respuesta:"Banchile ofrece a tus clientes la posibilidad de comprar y vender depósitos a plazo en dólares, bonos de empresas, Pagarés del Banco Central, etc."
    }
  ]
});
