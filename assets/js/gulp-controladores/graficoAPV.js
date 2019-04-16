cursosApp.controller('graficoApv', function($scope) {
  Highcharts.chart('graficoApv', {
     colors: ['rgba(255, 200, 10, 0.20)',  'rgba(255, 200, 10, 1)', '#55BF3B',],
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      type: 'pie',
      width: 100,
      height: 100,
      backgroundColor: 'rgba(83, 85, 87, 0)',
      stroke: 'rgba(255, 200, 10, 1)',
      marginBottom: 1,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      paddingBottom: 1,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      border: false,
    },
    title: {
      text: ''
    },

    subTitle: {
      text: ''
    },


    tooltip: {
      enabled: true,
      followPointer: true,
      followTouchMove: true,
      useHTML: true,
      headerFormat: '<div class="tooltip--headerFormat">{point.key}</div>',
      pointFormat: '<b class="tooltip--headerFormat">{point.y}</b>',
      valueSuffix: ' %',
      shared: true,
      backgroundColor: 'rgba(255,255,255,0.8)',
      style: {
        opacity: 1
      },
      borderRadius: 7,
    },



    exporting: {
      enabled: false
    },

    plotOptions: {
      pie: {
        shadow: false,
        allowPointSelect: false,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        center: ['50%', '50%'],
        borderWidth: 0 // < set this option
      },

      series: {
        animation: {
          duration: 1000,
          easing: 'easeOutBounce'
        },

        states: {
          hover: {
            enabled: false
          }
        }
      }
    },

    credits: {
      enabled: false
    },

    series: [{
      type: 'pie',

      size: '95%',
      innerSize: '94%',


      data: [


        {
          name: 'Fondos Mutuos',
          y: 60,
          borderWidth: 0,
        },

        {
          name: 'Acciones',
          y: 20,
          borderWidth: 0,

        },


      ]
    }]

  });
  //EVENTOS SWIPER
  $scope.swiper = {};
  $scope.onReadySwiper = function(swiper) {
    $timeout(function() {
      $scope.visibilidadGrafico = true;
    }, 100);
    $scope.swiper = swiper;
    var tipoDispositivo = '';
  };
});
