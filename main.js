//Una empresa tiene 4 vendedores. Cada vendedor cuando realiza una venta emite una factura. Se procesan los datos hasta que se ingresa un numero de factura igual a 0. Los datos ingresados de la factura son: Numero de factura, numero de vendedor, monto de la factura. Se desea calcular e informar:
//A. Cuantas facturas emitio cada vendedor
//B. Total facturado por cada vendedor y el total final acumulado de los vendedores.

//Contadores y acumuladores
let cont_vend1 = 0, cont_vend2 = 0, cont_vend3 = 0, cont_vent4 = 0;
let acum_vend1 = 0, acum_vend2 = 0, acum_vend3 = 0, acum_vend4 = 0;

//Total monto (Suma de acumuladores) y total facturas (suma de los contadores). Globales en caso de necesitarse en el Main.
let total_mont, total_fact;

//Funciones 
function vendedores(num_factura, mont_factura, num_vendedor) {
  alert("El numero de factura es: " + num_factura);
  alert("El monto es: " + mont_factura);

  switch (num_vendedor) {
    case 1:
      cont_vend1 += 1;
      acum_vend1 += mont_factura;
      alert("Seleccionaste al vendedor 1");
      break;
    case 2:
      cont_vend2 += 1;
      acum_vend2 += mont_factura;
      alert("Selecionaste al vendedor 2");
      break;
    case 3:
      cont_vend3 += 1;
      acum_vend3 += mont_factura;
      alert("Seleccionaste al vendedor 3");
      break;
    case 4:
      cont_vent4 += 1;
      acum_vend4 += mont_factura;
      alert("Seleccionaste al vendedor 4");
      break;
    default:
      alert("No seleccionaste ningun vendedor!");
      break;
  }
}

function mostrar(vent_ind) {
  let total_fact = cont_vend1 + cont_vend2 + cont_vend3 + cont_vent4;
  let total_mont = acum_vend1 + acum_vend2 + acum_vend3 + acum_vend4;
  alert("El total de facturas emitidas fue de: " + total_fact);
  alert("El total vendido fue de: " + total_mont);

  if (vent_ind == "s") {
    alert("El vendedor 1 emitio" + cont_vend1 + " facturas\nEl total vendido fue de: " + acum_vend1);
    alert("El vendedor 2 emitio" + cont_vend2 + " facturas\nEl total vendido fue de: " + acum_vend2);
    alert("El vendedor 3 emitio" + cont_vend3 + " facturas\nEl total vendido fue de: " + acum_vend3);
    alert("El vendedor 4 emitio:" + cont_vend4 + " facturas\nEl total vendido fue de: " + acum_vend4);
  } else {
    alert("Fin");
  }
}



let numfact = parseInt(prompt("Ingresar numero de factura: "));

    while (numfact != 0) {
        let montfact = parseInt(prompt("Ingresar el monto de la factura: "));
        let numvend = parseInt(prompt("Indicar el vendedor (1 al 4): "));

        vendedores(numfact, montfact, numvend);

        numfact = parseInt(prompt("Ingresar numero de factura: "));
    }

let ventas_individuales = prompt("?Desea ver lo vendido por cada vendedor y las facturas vendidas cada una indivualmente? \ns/n (s=si. n=no): ");
mostrar(ventas_individuales);


