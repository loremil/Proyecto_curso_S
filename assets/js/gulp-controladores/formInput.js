cursosApp.controller('formInput', function ($scope) {
$scope.showHints = true;

    $scope.formatMoneda = function (dato) {
        if (!dato) return;
        var cifra = dato.toString().split('.').join('');
        dato = formatMonedaDec(cifra);
    }

    formatMonedaDec = function (cifra, decimales) {
        var configMoneda = { minimumFractionDigits: decimales, maximumFractionDigits: decimales };
        var result = new Intl.NumberFormat("es-CL", configMoneda).format(cifra);
        $scope.totalCotizaciones = result;
        return result;
    }
});
