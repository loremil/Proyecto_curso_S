// controlador menu-personas-jorge-12-10
// cursosApp.controller('menuFooter', function($scope) {
//   $scope.activo = [];
//   $scope.visible = [];
//   $scope.mouseOver = function(position) {
//     $scope.activo[position] = "activo-menuPrivado";
//     $scope.visible[position] = true;
//   };
//
//   $scope.mouseLeave = function(position) {
//     $scope.activo[position] = "";
//     $scope.visible[position] = false;
//   };
//   $scope.mouseClick = function(position) {
//     $scope.activo[position] = "";
//     $scope.visible[position] = false;
//   };
//   $scope.mouseClickN = function(position) {
//     $scope.activo[position] = "";
//     $scope.visible[position] = true;
//   };
//   $scope.nextPage = function() {
//     var elements = angular.element(document.querySelector('#menuPrivadoCategoria'));
//     console.log(elements.prop('offsetTop'));
//     elements.top = elements.prop('offsetTop') + 30;
//   };
//
//
//   $scope.currentOpen = {
//     menuId: null
//   };
//
//   $scope.menuFooter = [
//     {
//       id: 1,
//       name: 'Servicio al Cliente',
//       menu: [
//         {name: 'Contactanos',
//           url: '#contactanos',},
//         {name: 'Sucursaless',
//           url: '#contactanos',},
//         {name: 'Resumen de inversiones',
//           url: '#contactanos',},
//         {name: 'Resumen de inversiones',
//           url: '#contactanos',},
//         {name: 'Resumen de inversiones',
//           url: '#contactanos',},
//       ]
//     },
//
//     {
//       name: 'Contactanos',
//       url: '#contactanos',
//     },
//     {
//       name: 'Sucursales',
//       url: '#sucursales',
//     },
//
//     {
//       name: 'Preguntas Frecuentes',
//       url: '#preguntas-frecuentes',
//     },
//     {
//       name: 'Información Legal',
//       url: '#',
//     },
//   ]
// },
//
//     {
//       id: 2,
//       name: 'Invertir',
//       image: 'navMenu--imagen imagen--invertir',
//       desc: 'Acá podrás encontrar variadas opciones de inversión que tenemos pensadas especialmente para ti.',
//       menu: [
//         {
//           name: 'Fondos Mutuos',
//           url: '#fondos-mutuos',
//           subMenu: [
//             {
//                 name: 'Aporte >',
//                 url: '#fondosmutuos-aporte-clp'
//             },
//             {
//               name: 'Rescate >',
//               url: '#fondosmutuos-rescate'
//             }
//           ]
//         }, {
//           name: 'Cartera Activa',
//           url: '#cartera-activa',
//           subMenu: [
//             {
//                 name: 'Ingreso >',
//                 url: '#cartera-activa-ingreso'
//             },
//             {
//               name: 'Egreso >',
//               url: '#cartera-activa-egreso'
//             }
//           ]
//         }, {
//           name: 'Acciones',
//           url: '#personas-acciones',
//           subMenu: [
//             {
//                 name: 'Compra >',
//                 url: '#personas-acciones-compra'
//             },
//             {
//               name: 'Venta >',
//               url: '#personas-acciones-venta'
//             }
//           ]
//         },
//         {
//           name: 'Moneda Extranjera',
//           url: '#pmoneda',
//           subMenu: [
//             {
//                 name: 'Compra >',
//                 url: '#pmoneda-compra'
//             },
//             {
//               name: 'Venta >',
//               url: '#pmoneda-venta'
//             }
//           ]
//         },
//
//         // {
//         //   name: 'APV',
//         //   url: '#apv',
//         //   subMenu: []
//         // },
//         {
//           name: 'Caja Internet',
//           url: '',
//           subMenu: [
//             {
//                 name: 'Abonar >',
//                 url: '#caja-abono'
//             },
//             {
//               name: 'Retirar >',
//               url: '#caja-retiro'
//             }
//           ]
//         },
//       ]
//     },
//
//
//     {
//       id: 3,
//       name: 'Asesoría',
//       image: 'navMenu--imagen imagen--asesoria',
//       desc: 'Te ofrecemos alternativas de inversión que se adecúen a tus necesidades.',
//       menu: [{
//           name: 'Perfil de inversionista',
//           url: 'login-personas.html#/encuesta-inversionista',
//           subMenu: [
//
//         ]
//         },
//
//         {
//           name: 'BGA',
//           url: '#bga',
//           subMenu: [
//
//         ]
//         },
//         {
//           name: 'Apps',
//           url: 'https://itunes.apple.com/cl/app/mi-inversion/id1147193402?mt=8',
//           target: '_blank',
//         }, {
//           name: 'Informes de estudios',
//           url: '#informes-persona',
//           subMenu: []
//         },
//       ]
//     },
//
//
//
//     {
//       id: 4,
//       name: 'Servicios',
//       image: 'navMenu--imagen imagen--servicios',
//       desc: 'Queremos que te sientas acompañado en todo momento, que puedas resolver tus dudas y que pueda encontrarnos siempre.',
//       menu: [{
//           name: 'Transferencias a Terceros',
//           url: '#transferencias-privado-persona',
//
//       ]
//     },
//     {
//       id: 5,
//       name: 'Definir',
//       image: 'navMenu--imagen imagen--definir',
//       desc: 'Queremos que te sientas cómodo y que tengas toda tu información disponible y actualizada.',
//       menu: [
//         {
//           name: 'Información Cliente',
//           url: '',
//           subMenu: [
//           {
//             name: 'Mis Datos >',
//             url: '#mis-datos-resumen'
//           },
//           {
//             name: 'Perfil de Inversionista >',
//             url: 'login-personas.html#/encuesta-inversionista'
//           },
//           {
//             name: 'Actualización de Datos >',
//             url: '#actualizacion-de-datos'
//           },
//
//
//
//
//         ]
//         }, {
//           name: 'Beneficiarios',
//           url: '#beneficiario-personas',
//           subMenu: [{
//               name: 'Agregar beneficiario >',
//               url: '#agregar-beneficiario-persona'
//             }
//
//           ]
//         },
//         {
//           name: 'Alertas y avisos',
//           url: '',
//           subMenu: []
//         },
//
//
//       ]
//     }
//
//
//   ];
//
//
//
//
//   function previousPage() {
//     var i, tab, elements = getElements();
//     for (i = 0; i < elements.tabs.length; i++) {
//       tab = elements.tabs[i];
//       if (tab.offsetLeft + tab.offsetWidth >= ctrl.offsetLeft) break;
//     }
//     ctrl.offsetLeft = fixOffset(tab.offsetLeft + tab.offsetWidth - elements.canvas.clientWidth);
//   }
// });
//Fin  controlador menu-personas-jorge-oct
