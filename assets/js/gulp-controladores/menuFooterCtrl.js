cursosApp.controller('menuFooterCtrl', function($scope) {

  $scope.menuFooter = [

    {
      name: 'Servicio al Cliente',
      menu: [
        {
          name: 'Contáctanos',
          url: '#contactanos',
        },
        {
          name: 'Sucursales',
          url: '#sucursales',
        },

        {
          name: 'Preguntas Frecuentes',
          url: '#preguntas-frecuentes',
        },
      ]
    },
    {
      name: 'Información Corporativa',
      menu: [
        {
          name: 'Estados Financieros',
          url: '#informacion-legal',
        },
        {
          name: 'Información Legal',
          url: '#',
        },
      ]
    },
    {
      name: 'Información a Clientes',
      menu: [
        {
          name: 'Valores Cuota',
          url: 'assets/pdf/Valores_cuota_bolsa.pdf',
          target: '_blank',
        },
        {
          name: 'Informes de estudio',
          url: '#depto-estudios',
        },
        {
          name: 'Mercados',
          url: 'http://banchile.show.finmarketslive.cl/www/index.html',
          target: '_blank',
        },
        {
          name: 'Simulador APV',
          url: 'login-personas.html#/simuladorApv-01',
        },
      ]
    }
  ];
});
