totalIngresos = 0;
totalGastos = 0;

// funciones sumadoras

function sumarIngresos() {
  for (let i = 0; i < misIngresos.length; i++) {
    totalIngresos = totalIngresos + misIngresos[i].monto;
  }
  return totalIngresos;
}

function sumarGastos() {
  for (let i = 0; i < misGastos.length; i++) {
    totalGastos = totalGastos + misGastos[i].monto;
  }
  return totalGastos;
}

// clase constructora de objetos

class Dinero {
  constructor(concepto, monto) {
    this.concepto = concepto.toUpperCase();
    this.monto = parseInt(monto);
  }
}

// Arrays agrupando objetos de ingreso/gasto
const misIngresos = [];
const misGastos = [];

// CARGA DE INGRESOS DEL USUARIO

for (let i = 1; i < 11; i++) {
  alert("Describa el ingreso n° " + i);
  let conceptoIngreso = prompt(
    "Concepto del ingreso. Si desea salir sin colocar más nada, escriba " +
      "ESC"
  );
  conceptoIngreso = conceptoIngreso.toUpperCase();

  if (conceptoIngreso != "ESC") {
    let montoIngreso = prompt("Monto del ingreso:");

    while (isNaN(montoIngreso) == true || parseInt(montoIngreso) < 0) {
      alert("ERROR. Sólo carácteres numéricos mayores a 0 válidos.");
      montoIngreso = prompt("Coloque nuevamente el monto del ingreso:");
      if (isNaN(montoIngreso) == false && parseInt(montoIngreso) > 0) {
        break;
      }
    }
    misIngresos.push(new Dinero(conceptoIngreso, montoIngreso)); //cargo al array de ingresos, el que cumplió el ciclo de validación con éxito
  } else {
    break;
  }
}

// CARGA DE GASTOS DEL USUARIO

for (let i = 1; i < 11; i++) {
  alert("Describa el gasto n° " + i);
  let conceptoGasto = prompt(
    "Concepto del gasto. Si desea salir sin colocar más nada, escriba " + "ESC"
  );
  conceptoGasto = conceptoGasto.toUpperCase();

  if (conceptoGasto != "ESC") {
    let montoGasto = prompt("Monto del gasto:");

    while (isNaN(montoGasto) == true || parseInt(montoGasto) < 0) {
      alert("ERROR. Sólo carácteres numéricos mayores a 0 válidos.");
      montoGasto = prompt("Coloque nuevamente el monto del gasto:");
      if (isNaN(montoGasto) == false && parseInt(montoGasto) > 0) {
        break;
      }
    }
    misGastos.push(new Dinero(conceptoGasto, montoGasto)); //cargo al array de gastos, el que cumplió el ciclo de validación con éxito
  } else {
    break;
  }
}

// MUESTRA DE SALDOS

sumarIngresos();
sumarGastos();
let saldo = totalIngresos - totalGastos;

alert(
  "Tienes un total de ingresos por la cantidad de: $" +
    totalIngresos +
    "\n" +
    "Tus gastos de este mes, suman: $" +
    totalGastos +
    "\n" +
    "Por lo tanto, tu saldo es de: $" +
    saldo
);

// MUESTRA DE INFO DETALLADA

let mensajeIngresos = "";
for (let i = 0; i < misIngresos.length; i++) {
  mensajeIngresos +=
    "Concepto: " +
    misIngresos[i].concepto +
    " | Monto: $" +
    misIngresos[i].monto +
    "\n";
}

let mensajeGastos = "";
for (let i = 0; i < misGastos.length; i++) {
  mensajeGastos +=
    "Concepto: " +
    misGastos[i].concepto +
    " | Monto: $" +
    misGastos[i].monto +
    "\n";
}

alert(
  "\n" +
    "Tus ingresos:" +
    "\n" +
    mensajeIngresos +
    "\n" +
    "\n" +
    "Tus Gastos" +
    "\n" +
    mensajeGastos);

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
