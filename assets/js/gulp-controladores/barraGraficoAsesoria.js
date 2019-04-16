cursosApp.controller('barraGraficoAsesoria', function($scope) {

  Highcharts.chart('barraGraficoAsesoria', {
    chart: {
      type: 'bar',
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      height: 50,
      spacingBottom: 0,
      spacingTop: 0,
      spacingLeft: 0,
      spacingRight: 0,
    },
    credits: {
      enabled: false
    },
    title: {
      text: ''
    },
    subTitle: {
      text: ''
    },
    tooltip: {
      enabled: false,
      followPointer: false,
      followTouchMove: false,
    },
    exporting: {
      enabled: false
    },
    yAxis: {
      gridLineWidth: 0,
      minorGridLineWidth: 0,
      min: 0,
      max: 100,
      useHTML: true,
      showInLegend: false,
    },
    xAxis: {
      visible: false,
      floor: 0,
      ceiling: 100,
      categories: [''],
      gridLineWidth: 0,
      minorGridLineWidth: 0,
      useHTML: true,
      width: 200,
      showInLegend: false,
    },
    legend: {
      reversed: false
    },
    plotOptions: {
      series: {
        stacking: 'normal',
        showInLegend: false,
        animation: {
          duration: 2000
        }
      }
    },
    series: [
      {
        data: [100],
        color: '#E6E9EE',
        showInLegend: false,
        animation: false,
        borderWidth: 0,

        states: {
          hover: {
            enabled: false
          }
        }
      },
      {
        data: [20],
        animation: {
          duration: 1000
        },
        color: '#EAA000',
        showInLegend: false,
        borderWidth: 0,
        states: {
          hover: {
            enabled: false
          }
        }
      },
      {
        data: [30],
        animation: {
          duration: 500
        },
        color: '#69B4C5',
        showInLegend: false,
        borderWidth: 0,
        states: {
          hover: {
            enabled: false
          }
        }
      },
    ]
  });
});
