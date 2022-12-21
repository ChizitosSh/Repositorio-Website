// const app = angular.module('MyApp', []); // El arreglo vacío es para agregar librerías adicionales

// app.controller('MyCtrl', function($scope){
//     let carro = this; // this se refiere al $scope
//     carro.carrito = [];

//     carro.addProducto = function() {
//         const distancia = carro.distancia;
//         const costo = carro.costo;

//         if(distancia != "" && !isNaN(distancia) && costo != "" && !isNaN(costo)){
//             console.log('Funciona')
//         }
//     }

// });


const app = angular.module("MyApp",[])

app.controller("MyCtrl", function($scope){
    // let distancia = this;
    $scope.km = {recorrido: null, pago: 0, descuento: 0, pagoFinal: 0};

    $scope.calcularPagoFinal = function(){
        let distancia = $scope.km.recorrido;
        
    if (distancia <= 300){
        pago = 250;
    } else if (distancia > 300 &&  distancia <= 1000){
        pago = 250 + ((distancia - 300) * 30);
    } else if (distancia > 1000){
        pago = 250 + (700 * 30) + (distancia - 1000) * 20;
    } else {
        pago = 250;
    }

    //Condiciòn para descuento
    if (pago > 500){
        descuento = pago * 0.1;
    } else {
        descuento = 0;
    }

    pagoFinal = pago - descuento;

    $scope.km.pago = pago;
    $scope.km.descuento = descuento;
    $scope.km.pagoFinal = pagoFinal;

    }

    $scope.calcularPagoFinal()
});