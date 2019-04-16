cursosApp.controller('tablaInfoLegalAdministradora', function($scope) {
  $scope.expanded = false;
  $scope.categorias = [{
      name: "Estados Financieros",
      descripcion: "",
      links: [{
        iconFile: "attach_file",
        name: 'Estados Financieros 30 de junio 2017 y 2016',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=f6da92a6-f0be-4553-8d23-1076e504663a&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros 31 marzo 2017 y 2016',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=f6da92a6-f0be-4553-8d23-1076e504663a&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros 2016',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=f6da92a6-f0be-4553-8d23-1076e504663a&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros al 30 de septiembre 2016 y 2015',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=f6da92a6-f0be-4553-8d23-1076e504663a&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'EEstados Financieros al 30 de junio 2016 y 2015',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=f6da92a6-f0be-4553-8d23-1076e504663a&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros 31 marzo 2016  y 2015',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=f6da92a6-f0be-4553-8d23-1076e504663a&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros 2015',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=f6da92a6-f0be-4553-8d23-1076e504663a&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros al 30 de septiembre de 2015',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros al 30 de junio 2015',
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
        name: 'Estados Financieros al 30 de septiembre de 2014',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros al 30 de Junio de 2014',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Estados Financieros al 31 de Marzo de 2014',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=06c67043-ed41-4733-8d1e-75502bceae79&groupId=10139',
      }]
    },
    {
      name: "Memorias",
      descripcion: "",
      links: [{
        iconFile: "visibility",
        name: 'Memoria 2016',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=70fcea91-ba09-4132-890e-e40bf9b8e38b&groupId=10139',
      }, {
        iconFile: "visibility",
        name: 'Memoria 2015',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=70fcea91-ba09-4132-890e-e40bf9b8e38b&groupId=10139',
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
        name: 'Manual de manejo de información Banchile Corredores de Bolsa S.A.',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=f7ad38ff-e8f6-488a-a829-644f9a568ed8&groupId=10139',
      }]
    },
    {
      name: "Información del Comité de buenas prácticas de la Bolsa de Comercio de Santiago",
      descripcion: "Toda la información del comité de buenas prácticas de la Bolsa de Comercio de Santiago se encuentra disponible en el siguiente link:",
      links: [{
        iconFile: "visibility",
        name: 'Comité de buenas prácticas',
        url: 'http://www.bolsadesantiago.com/regulacion/Paginas/ComiteBuenasPracticas.aspx',
      }]
    },
    {
      name: "Reglamento del Defensor del inversionista de la Bolsa de Comercio Electrónica de Chile",
      descripcion: "Toda la información del Reglamento del Defensor del Inversionista de la Bolsa de Comercio Electrónica de Chile se encuentra disponible en el siguiente link:",
      links: [{
        iconFile: "attach_file",
        name: 'Bolsa Electrónica',
        url: 'http://www.bolchile.cl/media/recursos/bec/contenidos/pdf/Reglamento_del_Defensor_del_Inversionista.pdf',
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
        name: 'Estatutos',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=70fcea91-ba09-4132-890e-e40bf9b8e38b&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Última Junta Ordinaria',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=70fcea91-ba09-4132-890e-e40bf9b8e38b&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Última Junta Extraordinaria',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=70fcea91-ba09-4132-890e-e40bf9b8e38b&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Manual de tratamiento y soluciones de los conflictos de interés negocio fiduciario Banchile Corredores de Bolsa S.A.',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=70fcea91-ba09-4132-890e-e40bf9b8e38b&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Política de inversiones personales Banchile Corredores de Bolsa S.A. ',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=7b827f14-abab-4745-9e2c-2d4ac01f0df3&groupId=10139',
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
        name: 'Política remuneraciones incentivos y otros Banchile Corredora de Bolsa',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=001f289e-6cc5-4f31-b441-a9ae2c93e709&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Código de ética Banchile Inversiones',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=608b078d-6e6b-4d6c-90aa-5774da6bcf7a&groupId=10139',
      }, {
        iconFile: "attach_file",
        name: 'Manual de conflicto de interés intermediación de valores por cuenta propia y de terceros',
        url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=c6538616-afb9-47b3-bf88-9ed1cd414287&groupId=10139',
      }]
    }
  ]
  $scope.resultadoLinks = [{
    iconFile: "attach_file",
    nombre: 'Acta extraordinaria banchile administradora general de fondos',
    url: "http://www.banchileinversiones.cl/c/document_library/get_file?uuid=7b827f14-abab-4745-9e2c-2d4ac01f0df3&groupId=10139",
    categoria: "Actas",
    vigInicio: "01/01/1980",
    vigFinal: "31/12/2050",
  }, {
    iconFile: "attach_file",
    nombre: 'Acta banchile administradora general de fondos',
    url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=7b827f14-abab-4745-9e2c-2d4ac01f0df3&groupId=10139',
    categoria: "Actas",
    vigInicio: "01/01/1980",
    vigFinal: "31/12/2050",
  }, {
    iconFile: "attach_file",
    nombre: 'Tabla de costos fondos mutuos',
    url: 'http://www.banchileinversiones.cl/c/document_library/get_file?uuid=7b827f14-abab-4745-9e2c-2d4ac01f0df3&groupId=10139',
    categoria: "Información Producto",
    vigInicio: "01/01/1980",
    vigFinal: "31/12/2050",
  }]
});
