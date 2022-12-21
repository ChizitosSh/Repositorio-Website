let app = angular.module("MyApp",[])

app.controller("MyCtrl", function($scope){
    $scope.master = {codigo: 0, horas: 0, tarifa: 0, salarioBasico: 0, descuento: 0, salarioNeto: 0,};

    $scope.calcularSalario = function(){
        $scope.empleado = $scope.master
        $scope.master.salarioBasico = $scope.master.horas * $scope.master.tarifa;

        if ($scope.master.salarioBasico < 500){
            $scope.master.descuento = 0;
        } else if ($scope.master.salarioBasico >= 501 && $scope.master.salarioBasico <= 1000){
            $scope.master.descuento = 0.02
        } else if ($scope.master.salarioBasico >= 1001 && $scope.master.salarioBasico <= 4000){
            $scope.master.descuento = 0.08;
        } else if ($scope.master.salarioBasico >= 4001 && $scope.master.salarioBasico <= 8000){
            $scope.master.descuento = 0.15;
        } else if ($scope.master.salarioBasico >= 8001 && $scope.master.salarioBasico <= 10000){
            $scope.master.descuento = 0.21;
        } else if ($scope.master.salarioBasico >= 10000){
            $scope.master.descuento = 0.3;

        }
        
        $scope.master.salarioNeto = $scope.master.salarioBasico - ($scope.master.salarioBasico * $scope.master.descuento);
        
    }

        $scope.calcularSalario()

})