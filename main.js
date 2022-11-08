// Una aplicacion para calcular el importe total y unitario en cuotas en base a una tasa de interes

function calculo_cuotas() {
  let acumulado = 0;
  let arr_cuotas = [""];

  do {
    n1 = prompt("Ingrese Capital", "10000");
  } while (n1.trim() == "");

  do {
    n2 = prompt("Ingrese la cantidad de cuotas", "12");
  } while (n2.trim() == "");

  do {
    n3 = prompt("Ingrese tasa de interes", "7.5");
  } while (n3.trim() == "");

  //Creo Objeto con propiedades y funciones
  const credito = {
    importe_capital: n1,
    numero_cuotas: n2,
    tasa_interes: n3,

    presentacion: function () {
      return (
        "Simularemos un prestamo de " +
        this.importe_capital +
        " en " +
        this.numero_cuotas +
        " cuotas con una tasa de interes del " +
        this.tasa_interes +
        "%"
      );
    },

    capitalXcuota: function () {
      return Number(this.importe_capital / this.numero_cuotas).toFixed(2);
    },

    interesXcuota: function () {
      return (
        (Number(this.importe_capital / this.numero_cuotas) *
          this.tasa_interes) /
        100
      ).toFixed(2);
    },

    importeXcuota: function () {
      return (
        Number(this.importe_capital / this.numero_cuotas) +
        (Number(this.importe_capital / this.numero_cuotas) *
          this.tasa_interes) /
          100
      ).toFixed(2);
    },
  };

  //Ejecuto una funcion del objeto
  console.log(credito.presentacion());
  //console.log("capitalXcuota: "+credito.capitalXcuota());
  //console.log("interesXcuota: "+credito.interesXcuota());
  //console.log("importeXcuota: "+credito.importeXcuota());

  function Acumular(imp) {
    return (acumulado += Number(imp));
  }

  let inicio = Date.now();

  // Muestro los datos de cada cuota
  for (i = 1; i < Number(credito.numero_cuotas) + 1; i++) {
    console.log(
      "Cuota nro " +
        i +
        ": Capital $" +
        credito.capitalXcuota() +
        " Interes $" +
        credito.interesXcuota() +
        " Total $" +
        credito.importeXcuota() +
        " Acumulado $" +
        Acumular(credito.importeXcuota()).toFixed(2)
    );

    // Creo Array para buscar la cuota luego de hacer los calculos
    arr_cuotas.push(
      "Cuota nro " +
        i +
        ": Capital $" +
        credito.capitalXcuota() +
        " Interes $" +
        credito.interesXcuota() +
        " Total $" +
        credito.importeXcuota()
    ); //+" Acumulado $"+ Acumular(credito.importeXcuota()).toFixed(2));
  }

  let final = Date.now();
  let ejecucion = final - inicio;
  console.log("Tiempo de ejecucion del for " + ejecucion + " milisegundos.");

  do {
    busqueda_cuota = prompt("Ingrese el numero de cuota que quiere ver", "1");
  } while (busqueda_cuota.trim() == "");

  console.log(arr_cuotas[busqueda_cuota]);
}







/* Simulador de autos
  class Autos {
  constructor (modelo, precio) {
    this.modelo = modelo;
    this.precio = parseFloat(precio);
    this.vendido= false;
  }
  sumaIva () {
    this.precio += this.precio * 1.21;
  }
  vender () {
    this.vendido = true;
  }
}


//Contadores y acumuladores
let cont_renault = 0, cont_chevrolet = 0, cont_fiat = 0; 



//Funciones
function calcular (pre, op, numero_cuotas) {
  alert ("El usuario indico que desea comprar? " + pre);
  alert ("La opcion que indico fue: " + op);
  alert ("Y las cuotas de: " + numero_cuotas);

  
}


//Main
let pregunta = parseInt(prompt("?Desea comprar?: 1.Si   2.No"));

while (pregunta == 1) {
  let opciones = parseInt(prompt("?Que quieres comprar?: 1.Renault Clio 2.Chevrolet Agile 3.Fiat Cronos"));
  let numCuot = parseInt(prompt("Indicar (numero entero) con cuantas cuotas:  12, 8, 6 o 2 "));
  
 calcular (pregunta, opciones, numCuot);

  pregunta = parseInt(prompt("?Desea seguir comprando?: 1.Si 2.No"));
}

let ventas_individuales = prompt(
  "?Desea ver lo vendido por cada vendedor y las facturas vendidas cada una indivualmente? \ns/n (s=si. n=no): "
);
mostrar(ventas_individuales); */

//Fin Main

/* const auto1 = new Autos ("Renault", "250");
const auto2 = new Autos ("Chevrolet", "400"); */

/* 
//Una empresa tiene 4 vendedores. Cada vendedor cuando realiza una venta emite una factura. Se procesan los datos hasta que se ingresa un numero de factura igual a 0. Los datos ingresados de la factura son: Numero de factura, numero de vendedor, monto de la factura. Se desea calcular e informar:
//A. Cuantas facturas emitio cada vendedor
//B. Total facturado por cada vendedor y el total final acumulado de los vendedores.

//Contadores y acumuladores
let cont_vend1 = 0, cont_vend2 = 0, cont_vend3 = 0, cont_ven4 = 0;
let acum_vend1 = 0, acum_vend2 = 0, acum_vend3 = 0, acum_vend4 = 0;

//Total monto (Suma de acumuladores) y total facturas (suma de los contadores). Globales en caso de necesitarse en el Main.
let total_mont, total_fact;

//Main
let numfact = parseInt(prompt("Ingresar numero de factura: "));

while (numfact != 0) {
  let montfact = parseInt(prompt("Ingresar el monto de la factura: "));
  let numvend = parseInt(prompt("Indicar el vendedor (1 al 4): "));

  vendedores(numfact, montfact, numvend);

  numfact = parseInt(prompt("Ingresar numero de factura: "));
}

let ventas_individuales = prompt(
  "?Desea ver lo vendido por cada vendedor y las facturas vendidas cada una indivualmente? \ns/n (s=si. n=no): "
);
mostrar(ventas_individuales);

//Fin Main

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
  let total_fact = cont_vend1 + cont_vend2 + cont_vend3 + cont_ven4;
  let total_mont = acum_vend1 + acum_vend2 + acum_vend3 + acum_vend4;
  alert("El total de facturas emitidas fue de: " + total_fact);
  alert("El total vendido fue de: " + total_mont);

  if (vent_ind == "s") {
    alert("El vendedor 1 emitio" + cont_vend1 + " facturas\nEl total vendido fue de: " + acum_vend1);
    alert("El vendedor 2 emitio" + cont_vend2 + " facturas\nEl total vendido fue de: " + acum_vend2);
    alert("El vendedor 3 emitio" + cont_vend3 + " facturas\nEl total vendido fue de: " + acum_vend3);
    alert("El vendedor 4 emitio:" + cont_ven4 + " facturas\nEl total vendido fue de: " + acum_vend4);
  } else {
    alert("Fin");
  }
} */
