cursosApp.controller('tablaPreguntasFrecuentesAPV', function($scope) {
  $scope.expanded = false;
  $scope.categorias = [{
    pregunta: "¿Cómo saber cuál es el mejor plan de ahorro previsional voluntario para mí?",
    respuesta: "Muy simple, llame al (02) 896 01 72 o al (02) 896 01 65 o envíe un email a macapv@banchile.cl , donde encontrará solución a tus requerimientos sobre este tema. Además le ofrecemos, la posibilidad de realizar simulaciones que le permitirán saber cuanto es el monto del beneficio tributario para su caso particular, estimar el monto de su pensión, calcular el monto necesario para jubilar anticipadamente y toda la información que requiera para tomar una óptima decisión."
    }, {
    pregunta:"¿Puedo traspasar o retirar las cotizaciones voluntarias que actualmente tengo en la AFP?",
    respuesta:"A partir de marzo del 2002 las cotizaciones voluntarias se pueden traspasar parcial o totalmente a otra institución administradora autorizada, sin pagar comisión de traspaso. También se pueden retirar de la AFP, pero en este caso los retiros deberán pagar los impuestos correspondientes."
    }, {
    pregunta:"¿Pueden participar los trabajadores independientes en el APV?",
    respuesta:"Si, pueden. La incorporación de todos los trabajadores independientes a los beneficios tributarios del Ahorro Previsional Voluntario fue uno de los principales cambios introducidos por la reforma al mercado de capitales realizada a fines del 2001. Para obtener los beneficios tributarios asociados al APV, los independientes deben estar afiliados a alguna AFP, declarar rentas y cotizar obligatoriamente para pensiones (aproximadamente 12,3% de la remuneración imponible - RI -) y salud (7% de la RI). El monto máximo de APV con beneficio tributario que pueden realizar los independientes, depende directamente de las cotizaciones obligatorias realizadas a la cuenta de capitalización individual (CCI) de pensiones, tal como se muestra a continuación: Monto máximo APV independientes = Valor UF x 8,33 x N° UF de cotizaciones obligatorias a CCI pensiones en el año. Con todo, el valor resultante no puede ser superior a UF 600 en el año. En su declaración anual de impuestos, los independientes pueden deducir de la base de ingresos tributables, el ahorro previsional voluntario realizado durante el año respectivo, con los límites antes señalados."
    }, {
    pregunta:"¿Qué son los depósitos convenidos?",
    respuesta:"Los depósitos convenidos corresponden a sumas de dinero que los empleadores depositan a favor de tus trabajadores, en los planes de ahorro previsional voluntario ofrecidos por las instituciones autorizadas, con el objeto de incrementar el capital acumulado para financiar una pensión anticipada o aumentar el monto de la pensión. Respecto de los trabajadores, estos depósitos no constituyen remuneración para ningún efecto legal y no se consideran renta para fines tributarios. En relación con el empleador que efectúa depósitos convenidos en favor de tus trabajadores, en la medida que exista una obligación pactada en un contrato o convenio de trabajo, tales depósitos constituyen un gasto tributario para la empresa. Si los depósitos se otorgan a los trabajadores en forma voluntaria, constituyen gasto para efectos tributarios en la medida que sean otorgados bajo normas de carácter general y uniformes aplicables a todos los trabajadores de la empresa, y que tus montos sean determinados utilizando parámetros objetivos, tales como los años de servicio, las remuneraciones pagadas durante el año respectivo, el número de cargas familiares, etc. Los depósitos convenidos tienen un límite de 900 UF anuales. El hecho que un trabajador reciba depósitos convenidos no afecta su derecho a realizar depósitos de ahorro previsional voluntario o cotizaciones voluntarias."
    }, {
    pregunta:"¿Puedo retirar los fondos acumulados en los planes APV?",
    respuesta:"Los depósitos convenidos no pueden ser retirados hasta que la persona se pensiona en la AFP. En cambio, los depósitos de ahorro previsional voluntario y las cotizaciones voluntarias se pueden retirar en cualquier momento y para cualquier propósito. Sin embargo, si los retiros no se destinan a anticipar o mejorar las pensiones, deben pagar un impuesto único determinado según la tabla del Impuesto Global Complementario. Para estos efectos, los retiros se suman a las otras rentas recibidas por el trabajador durante el año del retiro, pagando éste la tasa marginal que resulte más un recargo que fluctúa entre 3% para las rentas más bajas y 7% para las rentas más altas."
    }
  ]
});
