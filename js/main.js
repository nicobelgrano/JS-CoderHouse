let material;
let peso;
let valor = 0;
const ganancia = 1.6;
let total;
let opcion;

alert("Bienvenidx a la Calculadora");


do{
    material = prompt("Ingrese el material del articulo, puede ser:\n plata 925\n enchapado en oro\n laminado en plata");

    //ESTO NO FUNCIONO!!!!!
    
    /*while (material != "plata 925"  || material != "enchapado en oro"  || material != "laminado en plata");
    {
        material = prompt("material invalido, ingrese un material correcto, puede ser:\n plata 925\n enchapado en oro\n laminado en plata");
    }

    if (material == "plata 925"){
        valor = 1.5
    }else if (material == "enchapado en oro"){
        valor = 0.4
    }else if (material == "laminado en plata"){
        valor = 0.35
    }*/

    switch (material){
        case "plata 925":
            valor = 1.5;
            break;

        case "enchapado en oro":
            valor = 0.4;
            break;

        case "laminado en plata":
            valor = 0.35;
            break;

        default:
            material = prompt("material invalido, ingrese un material correcto, puede ser:\n plata 925\n enchapado en oro\n laminado en plata");
            break;
    }


    peso = Number(prompt("Ingrese el peso del producto en gramos"));


    while(peso <= 0){
        peso = Number(prompt("Peso invalido, ingrese un peso mayor a 0"));
        }
    
    

    total = peso * valor * ganancia;


alert ( "El precio para la venta del producto es de " + "usd$" + total)

opcion = prompt("desea realizar otro calculo?")

} while (opcion == "si"  || opcion == "Si" || opcion == "SI" || opcion == "S" || opcion == "s");