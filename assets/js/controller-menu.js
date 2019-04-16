cursosApp.controller('controllerMenu', function($scope, $location) {
    $scope.currentContenido = '';
    $scope.currentContenidoHref = '';
    $scope.currentNavItem = 'home-persona';
    $scope.menu1 = [{
            title: "FLUJO DEL PROCESO COMERCIAL",
            href: "/contenido/1"
        }, {
            title: "FLUJO DEL PROCESO DE OPERACIONES",
            href: "/contenido/2"
        }, {
            title: "INFORMACIÓN DEL PRODUCTO",
            href: "/contenido/3"
        }, {
            title: "REQUISITOS DEL ÁREA DE RIESGO",
            href: "/contenido/4"
        }, {
            title: "DOCUMENTACIÓN REQUERIDA",
            href: "/contenido/5"
        }, {
            title: "SISTEMAS INFORMÁTICOS REQUERIDOS",
            href: "/contenido/6"
        }
    ];

    $scope.menu2 = [{ 
        "BENEFICIOS TC" : "/contenido/1",
    },{ 
        "CAMPAÑA" : "/contenido/2"
    },{ 
        "PLÁSTICO" : "/contenido/3"
    },{ 
        "ESTADO DE CUENTA" : "/contenido/4"
    },{ 
        "PREVENCIÓN FRAUDE" : "/contenido/5"
    },{ 
        "SERVICIOS" : "/contenido/6"
    },{ 
        "RECLAMOS" : "/contenido/7"
    }
]

    $scope.cargarContenido = function(menuItem) {
        $scope.currentContenido = menuItem.href;
        $scope.currentContenidoHref = menuItem.href;
        $scope.currentNavItem = '/assets/contenido/1.html';
        console.log('cargarContenido menuItem=', menuItem.href);
    }

});

cursosApp.directive('menuContenido', function(){
    return{
      restrict:'E',
      scope: '=',
      templateUrl: href
    }
})