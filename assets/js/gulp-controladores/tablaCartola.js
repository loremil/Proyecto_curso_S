cursosApp.controller('tablaCartola', function($scope) {

  $scope.sort = '+producto';
  $scope.transferencia = [{
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      descripcion: "USD/CLP Internacional 24 H. Wachovia USD$",
      monto: "USD$650,00"
    },
    {
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      descripcion: "USD/CLP Internacional 24 H. Wachovia USD$",
      monto: "USD$650,00"
    },

  ]
  $scope.transferenciaEuro = [{
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      descripcion: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "€650,00"
    },
    {
    fecha: "01/01/2016",
    producto: "Moneda Extranjera",
    transaccion: "Transferencia",
    descripcion: "USD/CLP Internacional 24 H. Wachovia USD$",
    orden: "756040",
    monto: "€650,00"
  },
  ]
  $scope.transferenciaBeneficiario = [{
    alias: "FREYA CASA",
    nombre: "GRETEL IGNACIA ESTÉVEZ",
    pais: "Chile",
    creacion: "07/07/2018"
  },
  {
    alias: "ALL_MIGHT",
    nombre: "ALEXANDER LEÓN MIRANDA",
    pais: "España",
    creacion: "03/07/2018"
  }
]
$scope.transferenciaCarta = [{
    fecha: "07/07/2018",
    producto: "Moneda Extranjera",
    transaccion: "Transferencia Internacional",
    descripcion: "Transferencia 72 Horas Citibank",
    monto: "USD$ 650,00"
  },
  {
    fecha: "07/07/2018",
    producto: "Moneda Extranjera",
    transaccion: "Transferencia Internacional",
    descripcion: "Transferencia 72 Horas Citibank",
    monto: "USD$ 650,00"
  },
  {
    fecha: "07/07/2018",
    producto: "Moneda Extranjera",
    transaccion: "Transferencia Internacional",
    descripcion: "Transferencia 72 Horas Citibank",
    monto: "USD$ 650,00"
  },
  {
    fecha: "07/07/2018",
    producto: "Moneda Extranjera",
    transaccion: "Transferencia Internacional",
    descripcion: "Transferencia 72 Horas Citibank",
    monto: "USD$ 650,00"
  },
  {
    fecha: "07/07/2018",
    producto: "Moneda Extranjera",
    transaccion: "Transferencia Internacional",
    descripcion: "Transferencia 72 Horas Citibank",
    monto: "USD$ 650,00"
  },
  {
    fecha: "07/07/2018",
    producto: "Moneda Extranjera",
    transaccion: "Transferencia Internacional",
    descripcion: "Transferencia 72 Horas Citibank",
    monto: "USD$ 650,00"
  },
  {
    fecha: "07/07/2018",
    producto: "Moneda Extranjera",
    transaccion: "Transferencia Internacional",
    descripcion: "Transferencia 72 Horas Citibank",
    monto: "USD$ 650,00"
  },
  {
    fecha: "07/07/2018",
    producto: "Moneda Extranjera",
    transaccion: "Transferencia Internacional",
    descripcion: "Transferencia 72 Horas Citibank",
    monto: "USD$ 650,00"
  }
]
  $scope.transferenciaPendientes = [{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    }
  ]
  $scope.transferenciaIngresadas = [{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    }
  ]
  $scope.transferenciaSinInstruir = [{
    fecha: "01/01/2016 12:45:54",
    producto: "Moneda Extranjera",
    transaccion: "Transferencia",
    instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
    orden: "756040",
    monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    },{
      fecha: "01/01/2016 12:45:54",
      producto: "Moneda Extranjera",
      transaccion: "Transferencia",
      instrumento: "USD/CLP Internacional 24 H. Wachovia USD$",
      orden: "756040",
      monto: "$650.000"
    }
  ]
  $scope.cartola = [{
      fecha: "01/01/2016 12:45:54",
      producto: "Fondos Mutuos",
      transaccion: "Aporte Reinversión a Fondos Mutuos",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "10,4",
      precio: "$6.000.460",
      monto: "$10.000.460.567"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Fondos Mutuos",
      transaccion: "Aporte Reinversión a Fondos Mutuos",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "10,4",
      precio: "$6.000.460",
      monto: "$10.000.567"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Fondos Mutuos",
      transaccion: "Aporte Reinversión a Fondos Mutuos",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "10,4",
      precio: "$6.000.460",
      monto: "$10.460.934.567"
    },
    {
      fecha: "01/01/2016 12:45:54",
      producto: "Fondos Mutuos",
      transaccion: "Rescate",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "15,9",
      precio: "$6.000.460",
      monto: "$1.460.934.567"
    }
  ]
  $scope.cartola2 = [{
      fecha: "01/01/2016",
      producto: "Fondos Mutuos",
      transaccion: "Rescate",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "15,9",
      precio: "$6.000.460",
      monto: "$10.000.460"
    },
    {
      fecha: "01/01/2016",
      producto: "Fondos Mutuos",
      transaccion: "Rescate",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "15,9",
      precio: "$6.000.460",
      monto: "$10.000.460"
    },
    {
      fecha: "01/01/2016",
      producto: "Fondos Mutuos",
      transaccion: "Rescate",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "15,9",
      precio: "$6.000.460",
      monto: "$10.000.460"
    },
    {
      fecha: "01/01/2016",
      producto: "Fondos Mutuos",
      transaccion: "Rescate",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "15,9",
      precio: "$6.000.460",
      monto: "$10.000.460"
    }

  ]
  $scope.cartola3 = [{
      fecha: "01/01/2016",
      producto: "Cartera Activa",
      transaccion: "Aporte",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "5,3",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Cartera Activa",
      transaccion: "Aporte",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "5,3",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Cartera Activa",
      transaccion: "Aporte",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "5,3",
      precio: "$460,0000",
      monto: "$460.000"
    }

  ]
  $scope.cartola4 = [{
      fecha: "01/01/2016",
      producto: "Cartera Activa",
      transaccion: "Rescate",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "20,4",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Cartera Activa",
      transaccion: "Rescate",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "20,4",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Cartera Activa",
      transaccion: "Rescate",
      instrumento: "Retorno Accionario Largo Plazo",
      cantidad: "20,4",
      precio: "$460,0000",
      monto: "$460.000"
    }

  ]
  $scope.cartola5 = [{
      fecha: "01/01/2016",
      producto: "Acciones",
      transaccion: "Compra",
      instrumento: "ANTARCHILE",
      cantidad: "980",
      precio: "$ 10.250,0000",
      monto: "$ 10.045.000,0000"
    },
    {
      fecha: "01/01/2016",
      producto: "Acciones",
      transaccion: "Compra",
      cantidad: "144",
      instrumento: "ANDINA-B",
      precio: "$ 2.410,5000",
      monto: "$ 347.112,0000"
    }
  ]
  $scope.cartola5_2 = [{
      fecha: "01/01/2016",
      producto: "Acciones",
      transaccion: "Compra",
      instrumento: "CENCOSUD",
      cantidad: "87",
      precio: "$ 1.404,3000",
      monto: "$ 122.174,1000"
    },
    {
      fecha: "01/01/2016",
      producto: "Acciones",
      transaccion: "Compra",
      cantidad: "3666",
      instrumento: "ENELAM",
      precio: "$ 107,2100",
      monto: "$ 393.031,8600"
    }
  ]
  $scope.cartola6 = [{
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$460.000"
    }
  ]
  $scope.cartola7 = [{
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Venta",
      instrumento: "Dólar",
      cantidad: "14",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Venta",
      instrumento: "Dólar",
      cantidad: "14",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Venta",
      instrumento: "Dólar",
      cantidad: "14",
      precio: "$460,0000",
      monto: "$460.000"
    }

  ]
  $scope.cartola8 = [{
      fecha: "01/01/2016",
      producto: "Caja Internet",
      transaccion: "Abono",
      instrumento: "",
      cantidad: "13",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Caja Internet",
      transaccion: "Abono",
      instrumento: "",
      cantidad: "13",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Caja Internet",
      transaccion: "Abono",
      instrumento: "",
      cantidad: "13",
      precio: "$460,0000",
      monto: "$460.000"
    }

  ]
  $scope.cartola8 = [{
      fecha: "01/01/2016",
      producto: "Caja Internet",
      transaccion: "Abono",
      instrumento: "",
      cantidad: "7",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Caja Internet",
      transaccion: "Abono",
      instrumento: "",
      cantidad: "7",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Caja Internet",
      transaccion: "Abono",
      instrumento: "",
      cantidad: "7",
      precio: "$460,0000",
      monto: "$460.000"
    }

  ]
  $scope.cartola9 = [{
      fecha: "01/01/2016",
      producto: "Caja Internet",
      transaccion: "Retiro",
      instrumento: "",
      cantidad: "16",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Caja Internet",
      transaccion: "Retiro",
      instrumento: "",
      cantidad: "16",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Caja Internet",
      transaccion: "Retiro",
      instrumento: "",
      cantidad: "16",
      precio: "$460,0000",
      monto: "$460.000"
    },
    {
      fecha: "01/01/2016",
      producto: "Caja Internet",
      transaccion: "Retiro",
      instrumento: "",
      cantidad: "16",
      precio: "$460,0000",
      monto: "$460.000"
    }
  ]
  $scope.cartola10 = [{
      fecha: "01/01/2016",
      transaccion: "Compra",
      instrumento: "Dólar",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$460.000",
      No: "Nº 00051201000900373"
    },
    {
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "Dólar",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$460.000",
      No: "Nº 00051201000900373"
    },
    {
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "Dólar",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$460.000",
      No: "Nº 00051201000900373"
    },
    {
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "Dólar",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$460.000",
      No: "Nº 00051201000900373"
    }
  ]
  $scope.cartola11 = [{
      fecha: "01/01/2016",
      transaccion: "Compra",
      instrumento: "Dólar",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$460.000",
      No: "Nº 00051201000900373"
    },
    {
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "Dólar",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$460.000",
      No: "Nº 00051201000900373"
    },
    {
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "Dólar",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$460.000",
      No: "Nº 00051201000900373"
    },
    {
      fecha: "01/01/2016",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "Dólar",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$460.000",
      No: "Nº 00051201000900373"
    }
  ]
  $scope.cartola12 = [{
      fecha: "01/01/2016",
      producto: "Banchile Pay",
      transaccion: "Rescate / Compra ME",
      instrumento: "CLP / USD",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$433.900",
      No: "Nº 00051201000900373"
    },
    {
      fecha: "01/01/2016",
      producto: "Banchile Pay",
      transaccion: "Rescate / Compra ME",
      instrumento: "CLP / USD",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$4.260.000",
      No: "Nº 00051201000900373"
    },
    {
      fecha: "01/01/2016",
      producto: "Banchile Pay",
      transaccion: "Rescate / Compra ME",
      instrumento: "CLP / USD",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$550.090",
      No: "Nº 00051201000900373"
    },
    {
      fecha: "01/01/2016",
      producto: "Banchile Pay",
      transaccion: "Rescate / Compra ME",
      instrumento: "CLP / USD",
      cantidad: "8",
      precio: "$460,0000",
      monto: "$460.000",
      No: "Nº 00051201000900373"
    }
  ]
  $scope.cartola13 = [{
      fecha: "22/07/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "330",
      precio: "$628,0000",
      monto: "$217.602,0010"
    },
    {
      fecha: "15/07/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "1000",
      precio: "$624,1200",
      monto: "$624.120,0000"
    },
    {
      fecha: "03/07/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "2680",
      precio: "$631,1000",
      monto: "$1.691.348,0000"
    },
    {
      fecha: "21/06/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "1500",
      precio: "$630,0000",
      monto: "$945.000,0000"
    },
    {
      fecha: "18/06/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "3300",
      precio: "$632,8800",
      monto: "$2.081.904,0000"
    }
  ];
  $scope.cartola14 = [{
      fecha: "03/07/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "2680",
      precio: "$631,1000",
      monto: "$1.691.348,0000"
    },
    {
      fecha: "22/07/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "330",
      precio: "$628,0000",
      monto: "$217.602,0010"
    },
    {
      fecha: "15/07/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "1000",
      precio: "$624,1200",
      monto: "$624.120,0000"
    },
    {
      fecha: "18/06/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "3300",
      precio: "$632,8800",
      monto: "$2.081.904,0000"
    },
    {
      fecha: "21/06/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "1500",
      precio: "$630,0000",
      monto: "$945.000,0000"
    },
    {
      fecha: "18/06/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "3300",
      precio: "$632,8800",
      monto: "$2.081.904,0000"
    },
    {
      fecha: "22/07/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "330",
      precio: "$628,0000",
      monto: "$217.602,0010"
    },
    {
      fecha: "15/07/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "1000",
      precio: "$624,1200",
      monto: "$624.120,0000"
    },
    {
      fecha: "18/06/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "3300",
      precio: "$632,8800",
      monto: "$2.081.904,0000"
    },
    {
      fecha: "21/06/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "1500",
      precio: "$630,0000",
      monto: "$945.000,0000"
    },
  ];
  $scope.cartola15 = [{
      fecha: "10/06/2017",
      producto: "Moneda Extranjera",
      transaccion: "Compra",
      instrumento: "USD/CLP",
      cantidad: "330",
      precio: "$628,0000",
      monto: "$217.602,0010"
    }
  ];
});
