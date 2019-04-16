cursosApp.controller('tablaPreguntasFrecuentesCAct', function($scope) {
  $scope.expanded = false;
  $scope.categorias = [{
    pregunta: "¿Qué es Cartera Activa?",
    respuesta: "Es un servicio de administración de cartera a través del cual nuestra área de inversiones monitorea y administra carteras de fondos mutuos de acuerdo a los movimientos y condiciones que presenta el mercado. Este nuevo producto les permitirá ofrecer a tus clientes una orientación precisa de acuerdo a tu perfil de inversionista, a través de la más amplia gama de Fondos Mutuos."
    }, {
    pregunta:"¿Cuál es el aporte mínimo requerido?",
    respuesta:"El aporte inicial requerido es de $1.000.000."
    }, {
    pregunta:"¿Cuál es el plazo mínimo que debe permanecer un cliente en una Cartera Activa?",
    respuesta:"El plazo recomendado es desde 180 días para la Cartera Protegida y desde un año para el resto de las Carteras."
    }, {
    pregunta:"¿Cuáles son las comisiones de salida?",
    respuesta:"Rigen las comisiones del Plan Familia de Fondos Mutuos, es decir se cobrarán las comisiones de acuerdo a lo que señalen los reglamentos internos de cada fondo mutuo que componga la cartera sobre el Plan Familia."
    }, {
    pregunta:"¿Cuál es la remuneración cobrada por Cartera Activa?",
    respuesta:"Cartera Activa cobra remuneración de acuerdo a lo que cobran los fondos mutuos que componen la cartera."
    }, {
    pregunta:"¿Qué carteras hay disponibles?",
    respuesta:"Son 7 carteras que se diferencian según el perfil de riesgo de nuestros clientes. Éste es identificado a través del Marco de Actuación Personal."
    }, {
    pregunta:"¿Se puede tener más de una cartera?",
    respuesta:"Si,  se puede tener las carteras que estime conveniente."
    }, {
    pregunta:"¿Los fondos mutuos que componen la cartera son siempre los mismos?",
    respuesta:"No, eso dependerá de las decisiones que tome nuestra área de inversiones de acuerdo a las condiciones que observe en el mercado. Nuestro equipo de inversiones cambiará la composición de la cartera cada vez que de acuerdo a los movimientos de mercado decida efectuar rebalanceos."
    }, {
    pregunta:"¿Cuántos rebalanceos se efectuarán durante el año?",
    respuesta: "Se realizarán todos los rebalanceos que nuestra área de inversiones estime necesario. Se le notificará mediante un correo electrónico se informará antes y después del proceso de Rebalanceo."
    },
  ]
});
