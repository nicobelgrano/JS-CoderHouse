let material;
let peso;
let valor;
const ganancia = 1.6;
let total;
let opcion;

alert("Bienvenidx a la Calculadora");

do{
    material = prompt("Ingrese el material del articulo, puede ser:\n Plata 925\n Enchapado en oro\n Laminado en plata").toLowerCase();


    
    while (material != "plata 925" && material != "enchapado en oro" && material != "laminado en plata"){
        material = prompt("Material inválido, ingrese un material correcto, puede ser:\n Plata 925\n Enchapado en oro\n Laminado en plata").toLowerCase();
    }


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
    }


    peso = Number(prompt("Ingrese el peso del producto en gramos"));


    while(peso <= 0){
        peso = Number(prompt("Peso inválido, ingrese un peso mayor a 0"));
        }

    total = (peso * valor * ganancia).toFixed(2);

    alert ( "El precio para la venta del producto es de USD$" + total)

    opcion = prompt("¿Desea realizar otro cálculo?").toLowerCase();

} while (opcion == "si" || opcion == "s");