cursosApp.controller('tablaInfoLegalCorredora', function($scope) {
  $scope.expanded = false;
  $scope.categorias = [{
      name: "Estados Financieros",
      descripcion: "",
      links: [{
        iconFile: "attach_file",
        name: 'Estados Financieros 30 de junio 2017 y 31 de diciembre 2016',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=f6da92a6-f0be-4553-8d23-1076e504663a&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros 31 de marzo 2017 y 31 de diciembre 2016',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros 2016',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros septiembre 2016 - diciembre 2015',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros al 30 junio 2016',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros 31/03/2016 al 31/12/2015',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros 2015 ',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros al 30/09/2015 y 31/12/14',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros al 30 junio 2015',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros al 31 de Marzo de 2015',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros 2014',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros Septiembre 2014',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros Junio 2014',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros Marzo 2014',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }]
    },
    {
      name: "Hechos esenciales",
      descripcion: "",
      links: [{
        iconFile: "visibility",
        name: 'Revise los hechos esenciales actualizados cada un minuto',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=70fcea91-ba09-4132-890e-e40bf9b8e38b&groupId=10139',
      }]
    },
    {
      name: "Manuales de manejo de información",
      descripcion: "",
      links: [{
        iconFile: "attach_file",
        name: 'Manual de manejo de información de Banchile Administradora General de Fondos S.A.',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=ef224051-d228-4d1d-b834-7e0869f4aeed&groupId=10139',
      }]
    },
    {
      name: "Servicio de Cuentas de Mandantes del DCV",
      descripcion: "",
      links: [{
        iconFile: "attach_file",
        name: 'Acceder a Documento (PDF)',
        url: 'http://www.banchileinversiones.cl/pls/portal/docs/PAGE/GRP_WEBBANCHILE1/PAG_CONTENIDOS/PAG_CON_FMU/PAG_CON_FMU_PDF/BCHDCV.PDF'
      }]
    },
    {
      name: "Otros documentos importantes",
      descripcion: "",
      links: [{
        iconFile: "attach_file",
        name: 'Política Custodia de Valores Banchile Administadora General de Fondos S.A.',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=15538130-7fcc-4084-a3db-648aa7a070f8&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Política de inversiones personales Banchile Administradora General de Fondos S.A.',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=15538130-7fcc-4084-a3db-648aa7a070f8&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Política de prevención de prácticas contrarias a la probidad Banchile Inversiones',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=3fcf5aa4-6aea-44e0-94f9-e4c7951358be&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Política independencia departamento de estudios (Independent Research)',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=9f4e0d5f-3791-4fa9-a459-38a669cba216&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Política prevención de lavado de activos y financiamiento del terrorismo',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=f08b8e3f-710c-4f88-8f70-1442433bf0f6&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Código de ética Banchile Inversiones',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=608b078d-6e6b-4d6c-90aa-5774da6bcf7a&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Manual tratamiento y soluciones de conflictos de interés Banchile Administradora General de Fondos S.A.',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=69004fb3-eaf5-45e1-8aea-edd1dc1164ae&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Manual de conflicto de interés intermediación de valores por cuenta propia y de terceros',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=c6538616-afb9-47b3-bf88-9ed1cd414287&groupId=10139',
      }]
    }
  ]
});
