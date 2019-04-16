//CONTROLADOR SWIPER & GRAFICO EN WIDGET PATRIMONIO
cursosApp.directive('hcChart', function() {
  Highcharts.setOptions({
    lang: {
      months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      shortMonths: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      contextButtonTitle: "Menu",
      downloadJPEG: "Descargar imagen JPEG",
      downloadPDF: "Descargar documento PDF",
      downloadPNG: "Descargar imagen PNG ",
      downloadSVG: "Descargar imagen SVG",
      drillUpText: "Volver a {series.name}",
      loading: "Cargando...",
      noData: "No exites datos",
      printChart: "Imprimir Gráfico",
      resetZoom: "Restablecer zoom",
      resetZoomTitle: "Restablecer zoom nivel 1:1"
    },
    credits: {
      enabled: false
    }
  });

  return {
    restrict: 'E',
    template: '<div></div>',
    scope: {
      options: '=options'
    },
    link: function(scope, element) {

      scope.$watch('options', function() {
        var options = scope.options;
        Highcharts.chart(element[0], options);

      });
    }
  };

})
