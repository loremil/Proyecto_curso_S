cursosApp.controller('tablaPreguntasFrecuentesFInv', function($scope) {
  $scope.expanded = false;
  $scope.categorias = [{
    pregunta: "¿Qué es un Fondo de Inversión?",
    respuesta: "Al igual que un Fondo Mutuo, es una alternativa de inversión que reúne patrimonios de distintas personas, naturales o jurídicas, para invertirlos en valores de oferta pública nacional e internacional. La diferencia es que el Fondo de Inversión cuenta con un plazo de inversión determinado y el número de cuotas es limitado. Los Fondos de Inversión invierten en un portafolio diversificado de distintos instrumentos. Los instrumentos en que puede invertir varían según el fondo y los define su Política de Inversión, que se encuentra en el Reglamento Interno del fondo, aprobado por la Superintendencia de Valores y Seguros."
    }, {
    pregunta:"¿Qué Ventajas tienen los Fondos de Inversión de Banchile Inversiones?",
    respuesta:"Estabilidad en el tiempo. Posibilidad de acogerse al Beneficio Tributario 57 bis de la Ley de Renta. "
    },
  ]
});
