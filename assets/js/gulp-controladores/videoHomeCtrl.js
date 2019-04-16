cursosApp.controller('videoHomeEmpresasCtrl', function ($scope, $timeout, $mdSidenav, $log) {
  var videoEmpresas = new Array("assets/media/videoHome/Banchile_VideoEmpresas001.mp4", "assets/media/videoHome/Banchile_VideoEmpresas002.mp4", "assets/media/videoHome/Banchile_VideoEmpresas003.mp4");

  function videoHomeRandom() {
    var randomNum = Math.floor(Math.random() * videoEmpresas.length);
    document.getElementById("videoHomeEmpresas").src = videoEmpresas[randomNum];
  }

  videoHomeRandom();
});

cursosApp.controller('videoHomePersonasCtrl', function ($scope, $timeout, $mdSidenav, $log) {
  var videoPersonas = new Array("assets/media/videoHome/Banchile_VideoPersonas001.mp4", "assets/media/videoHome/Banchile_VideoPersonas002.mp4", "assets/media/videoHome/Banchile_VideoPersonas003.mp4");

  function videoHomeRandom() {
    var randomNum = Math.floor(Math.random() * videoPersonas.length);
    document.getElementById("videoHomePersonas").src = videoPersonas[randomNum];
  }

  videoHomeRandom();
});