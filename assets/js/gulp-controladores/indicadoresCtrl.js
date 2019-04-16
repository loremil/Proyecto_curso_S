//indicadores
cursosApp.controller('indicadoresCtrl', function($scope, $timeout, $mdBottomSheet, $mdToast) {

$scope.indicadores = '';
$scope.showListBottomSheet = function() {
  $scope.indicadores = '';
  $mdBottomSheet.show({
    templateUrl: 'detalle/detalle-indicadores.html'
  }).then(function(clickedItem) {
    $scope.indicadores = clickedItem['name'] + ' clicked!';
  }).catch(function(error) {
    // User clicked outside or hit escape
  });
};

});

cursosApp.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
    $scope.opcionesGrafico0 = {
      chart: {
        zoomType: 'x',
        height: 252,
        width: 320
      },
      subtitle: {
        text: 'IPSA'
      },
      xAxis: {
        categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
          'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
        ]
      },
      yAxis: {
        title: {
          text: null
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        area: {
          fillColor: {
            radialGradient: {
              cx: 0.5,
              cy: 0.3,
              r: 2
            },
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },

      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
    }
    $scope.opcionesGrafico1 = {
      chart: {
        zoomType: 'x',
        height: 252,
        width: 320
      },
      title: {
        text: 'UF'
      },
      subtitle: {
        text: 'UF'
      },
      xAxis: {
        categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
          'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
        ]
      },
      yAxis: {
        title: {
          text: null
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        area: {
          fillColor: {
            radialGradient: {
              cx: 0.5,
              cy: 0.3,
              r: 2
            },
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },

      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 44.0, 76.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
    };
    $scope.opcionesGrafico2 = {
      chart: {
        zoomType: 'x',
        height: 252,
        width: 320
      },
      subtitle: {
        text: 'USD/CLP'
      },
      xAxis: {
        categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
          'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
        ]
      },
      yAxis: {
        title: {
          text: null
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        area: {
          fillColor: {
            radialGradient: {
              cx: 0.5,
              cy: 0.3,
              r: 2
            },
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },

      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 95.4, 85.1, 95.6, 54.4]
      }]
    };
    $scope.opcionesGrafico3 = {
      chart: {
        zoomType: 'x',
        height: 252,
        width: 320
      },
      subtitle: {
        text: 'IPSA'
      },
      xAxis: {
        categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
          'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
        ]
      },
      yAxis: {
        title: {
          text: null
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        area: {
          fillColor: {
            radialGradient: {
              cx: 0.5,
              cy: 0.3,
              r: 2
            },
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },

      series: [{
        data: [80.9, 71.5, 106.4, 129.2, 100.0, 176.0, 135.6, 148.5, 100.4, 194.1, 95.6, 54.4]
      }]
    };
    $scope.opcionesGrafico4 = {
      chart: {
        zoomType: 'x',
        height: 252,
        width: 320
      },
      subtitle: {
        text: 'CAP'
      },
      xAxis: {
        categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
          'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
        ]
      },
      yAxis: {
        title: {
          text: null
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        area: {
          fillColor: {
            radialGradient: {
              cx: 0.5,
              cy: 0.3,
              r: 2
            },
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },

      series: [{
        data: [100.9, 71.5, 106.4, 180.2, 44.0, 76.0, 135.6, 148.5, 216.4, 80.1, 95.6, 54.4]
      }]
    };
});



/* Fin scroll animación */
