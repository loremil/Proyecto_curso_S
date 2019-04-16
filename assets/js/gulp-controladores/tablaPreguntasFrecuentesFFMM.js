cursosApp.controller('tablaPreguntasFrecuentesFFMM', function($scope) {
  $scope.expanded = false;
  $scope.categorias = [{
    pregunta: "¿Qué es un fondo mutuo?",
    respuesta: "Es una alternativa de inversión que consiste en reunir los patrimonios de distintas personas, naturales o jurídicas, para invertirlos en distintos instrumentos financieros, tarea que lleva a cabo Banchile como Sociedad Administradora."
    }, {
    pregunta:"¿Qué son las cuotas y los valores cuota?",
    respuesta:"El patrimonio total de un Fondo Mutuo se divide en partes iguales llamadas Cuotas. Así, cuando un cliente invierte en un Fondo Mutuo, adquiere un cierto número de Cuotas. Estas poseen un valor, llamado Valor Cuota, que cambia diariamente y que refleja la rentabilidad que ha obtenido el Fondo. Por ejemplo, se invierte $1.000 en un Fondo cuyo Valor Cuota el día en que se invirtió, era de $100. Por lo tanto, con $1.000 se adquieren 10 Cuotas del Fondo. En el supuesto que después de unos meses el Fondo rentó 10%, el Valor Cuota habrá aumentado en este mismo porcentaje, pasando de $100 a $110. Así el cliente seguirá teniendo 10 Cuotas, pero cada una de ellas ahora valdrá $110, por lo que el total del dinero habrá ascendido de $1.000 a $1.100."
    }, {
    pregunta:"¿Cómo se reconoce la rentabilidad de los Fondos Mutuos?",
    respuesta:"Lo que van rentando los Fondos Mutuos se reconoce diariamente y se expresa en la variación del Valor de la Cuota."
    }, {
    pregunta:"¿Cómo se puede saber en qué instrumentos está invertido el dinero de un Fondo Mutuo?",
    respuesta:"La cartera de inversión de los Fondos Mutuos describe los instrumentos que componen el Fondo, la que se puede consultar en cualquier momento. Los instrumentos en que puede invertir un Fondo están definidos en la Política de Inversión del Reglamento Interno, aprobado por la Superintendencia de Valores y Seguros."
    }, {
    pregunta:"¿Se deben renovar las inversiones en Fondos Mutuos?",
    respuesta:"No, las inversiones en Fondos Mutuos no tienen vencimiento, ni requieren renovaciones."
    }, {
    pregunta:"¿Cuál es la diferencia entre remuneración y comisión de un Fondo Mutuo?",
    respuesta:"La remuneración es el cobro realizado por la Administradora de Fondos y se calcula sobre el monto invertido, expresándose como porcentaje anual más IVA y descontándose día a día del Valor Cuota. Para poder obtener la remuneración diaria, se debe dividir la remuneración anual en 365 días. La comisión por su parte, es lo que la Administradora de Fondos Mutuos cobra cuando se realiza un rescate antes del plazo mínimo de permanencia que exige cada Fondo Mutuo. Su finalidad es incentivar el ahorro a largo plazo."
    }, {
    pregunta:"¿Qué es el Plan Familia de Fondos?",
    respuesta:"Es un plan voluntario que permite trasladar, exento de comisión, las inversiones entre los distintos Fondos Mutuos administrados por Banchile, acogidos a este Plan, con el beneficio de conservar la fecha de inversión original para el cálculo de la permanencia de la inversión. No obstante, el rescate total o parcial (sin reinversión) de Fondos acogidos al Plan Familia de Fondos está afecto a comisión si se efectúa antes del plazo establecido. En este caso, la comisión es de 1 a 88 días: 2,38% IVA incluido, y más 88: se encontrará libre de comisión."
    }, {
    pregunta:"¿Todos los Fondos Mutuos tienen el mismo riesgo?",
    respuesta:"La gran variedad de Fondos Mutuos con que cuenta Banchile permite que cada cliente elija aquella alternativa que mejor se ajuste a tus necesidades y preferencias particulares. En este sentido, existen distintas estrategias de inversión y por lo tanto, distintos niveles de riesgo. Cada Fondo Mutuo posee una Política de Inversión distinta que determina los mercados en los que invertirá. Hay inversiones más riesgosas que otras, ya que existen mercados más riesgosos que otros. Sin embargo, a mayor riesgo, existe un mayor retorno esperado."
    }, {
    pregunta:"¿Cómo tributan los Fondos Mutuos?",
    respuesta:"A diferencia de otros instrumentos de ahorro, las ganancias obtenidas por inversiones en Fondos Mutuos sólo generan obligaciones tributarias cuando se efectúa el rescate total o parcial de los aportes realizados. Esto representa una enorme ventaja ya que se puede diferir el pago de los impuestos en el tiempo."
    }, {
    pregunta:"¿Existen beneficios tributarios por invertir en Fondos Mutuos?",
    respuesta:"El artículo 57 bis de la Ley de la Renta otorga ciertas exenciones y permite ciertas deducciones y créditos imputables a los impuestos a pagar para las personas. Es un mecanismo a través del cual las personas pueden optar a un beneficio tributario, que se traduce en un crédito contra el Impuesto Global Complementario o Impuesto Único al momento de hacer su declaración. También el beneficio tributario 107 de la Ley de la Renta (Ex 18 Ter), permite a las personas que invierten en Fondos Mutuos Accionarios y que hayan obtenido ganancias de capital al rescatar cuotas, dichas ganancias no estén afectas a pago de impuesto. Finalmente, los Fondos Mutuos son instrumentos que pueden ser utilizados en planes de Ahorro Previsional Voluntario, una alternativa de ahorro que ofrece entre otros beneficios, incentivos tributarios. Asimismo, el artículo 108 de la Ley de la Renta establece un beneficio tributario para los rescates y las reinversiones en fondos mutuos. Finalmente, los Fondos Mutuos son instrumentos que pueden ser utilizados en planes de Ahorro Previsional Voluntario, una alternativa de ahorro que ofrece entre otros beneficios, incentivos tributarios."
    }, {
    pregunta:"Si no se tiene cuenta corriente en el Banco de Chile, ¿se pueden depositar los rescates en otro banco?",
    respuesta:"Por supuesto, invirtiendo en Fondos Mutuos Banchile, los dineros pueden ser pagados en cuentas de distintos Bancos."
    }, {
    pregunta:"Si se quieren invertir $10.000.000 en un Fondo Mutuo, y sacar $150.000 todos los fines de semana, ¿cómo se puede hacer?",
    respuesta:"Dejando tus rescates programados desde hoy."
    },
  ]
});
