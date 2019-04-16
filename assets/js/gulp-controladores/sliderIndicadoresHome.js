cursosApp.controller('sliderIndicadoresHome', function($scope) {
  var swiper = new Swiper('.swiper-container', {
    // scrollbar: '.swiper-scrollbar',
    scrollbarHide: true,
    slidesPerView: 'auto',
    centeredSlides: false,
    spaceBetween: 30,
    autoplay:4500,
    // autoplay:2500,
  });
});

cursosApp.directive('hcChartCinta', function () {
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
              noData: "No exiten datos",
              printChart: "Imprimir Gráfico",
              resetZoom: "Restablecer zoom",
              resetZoomTitle: "Restablecer zoom nivel 1:1"
          }
          ,
          credits: {enabled: false}
          ,
          exporting: {enabled: false}
      });

      return {
          restrict: 'E',
          template: '<div></div>',
          scope: {
              grafico: '=idgraf'
          },
          link: function (scope, element) {
            scope.$watch('grafico', function () {
                  var datosG = [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4];
                  if(scope.grafico==1){
                    datosG = [100.9, 54.5, 24.4, 66.2, 78.0, 122.0, 52.6, 211.5, 216.4, 32.1, 53.6, 18.4];
                  }
                  if(scope.grafico==2){
                    datosG = [66.9, 22.5, 17.4, 61.2, 777.0, 765.0, 635.6, 42.5, 21.4, 30.1, 95.6, 221.4];
                  }
                  if(scope.grafico==3){
                    datosG = [432.9, 5.5, 432.4, 678.2, 43.0, 21.0, 67.6, 80.5, 97.4, 63.1, 15.6, 33.4];
                  }

                  Highcharts.chart(element[0], {
                      chart: {
                          type: 'arearange',
                          // Edit chart spacing
                          marginRight: 0,
                          marginLeft: 0,
                          spacingBottom: 0,
                          spacingTop: 0,
                          spacingLeft: 0,
                          spacingRight: 0,
                          // Explicitly tell the width and height of a chart
                          width: 60,
                          height: 30,
                      },
                      title: { text: '' },
                      subtitle: { text: ''},
                      xAxis: {
                          lineWidth: 0,
                          minorGridLineWidth: 0,
                          lineColor: 'transparent',
                          labels: {
                              enabled: false
                          },
                          minorTickLength: 0,
                          tickLength: 0,
                          gridLineColor: 'transparent',
                          type: 'datetime',
                          dateTimeLabelFormats: {
                              enabled: false
                          },
                      },
                      yAxis: {
                          labels: { enabled: false },
                          title: { text: '' }
                      },
                      legend: {
                          enabled: false
                      },
                      plotOptions: {
                          area: {
                              fillColor: {
                                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                                  stops: [ [0, '#FFFFFF'],[1, '#FFFFFF'] ]
                              },
                              marker: {
                                  enabled: false,
                                  radius: 2
                              },
                              lineWidth: 2,
                              states: { hover: { lineWidth: 1 }  },
                              threshold: null
                          }
                      },
            /**/
                      tooltip: {enabled: false},
                      series: [{
                          type: 'area',
                          name: '',
                          data: datosG
                      }]
                  });
              });
          }
      };
  })
