function suma() {
  var num1;
  var num2;
  var r;
  num1 = parseInt(prompt("ingrese un numero :", ""));

  num2 = prompt("ingrese otro numero  :", "");

  r = num1 + parseInt(num2);
  alert("EL RESULTADO ES: " + r);
}

function mayor() {
  var num1;
  var num2;

  num1 = parseInt(prompt("ingrese un numero :", ""));

  num2 = prompt("ingrese otro numero  :", "");

  if (num1 > num2) {
    alert("el numeromayor es: " + num1);
  }

  alert("EL numero mayor es : " + num2);
}

function mayor() {
  var num1;
  var num2;

  num1 = parseInt(prompt("ingrese un numero :", ""));

  num2 = prompt("ingrese otro numero  :", "");

  if (num1 > num2) {
    alert("el numeromayor es: " + num1);
  }

  alert("EL numero mayor es : " + num2);
}

function ejerc_3() {
  var num1;
  var num2;
  var num3;

  num1 = parseInt(prompt("ingrese un numero :", ""));

  num2 = prompt("ingrese otro numero  :", "");

  num3 = prompt("ingrese otro numero  :", "");

  if (num1 >= num2 && num1 >= num3) {
    alert("el numeromayor es: " + num1);
  } else if (num2 >= num1 && num2 >= num3) {
    alert("el numeromayor es: " + num2);
  } else if (num3 >= num1 && num3 >= num2) {
    alert("el numero mayor es: " + num3);
  }
}

function ejerc_4() {
  var num1;
  var num2;
  var num3;

  num1 = parseInt(prompt("ingrese un numero :", ""));

  num2 = 2;

  if (num1 % num2 === 0) {
    alert("si es divisible por 2 ");
  } else alert("no es divisible por 2 ");
}

function ejerc_5() {
  var cadena = prompt("Escribe un texto: ");

  var numeroVocales = cadena.match(/[a]/gi).length;

  alert("La cantidad que se repite la a es : " + numeroVocales);
}

function ejerc_6() {
  var cadena = prompt("Escribe un texto: ");

  var numeroVocales = cadena.match(/[aeiou]/gi).length;

  alert("La cantidad de vocales es " + numeroVocales);
}

function ejerc_7() {
  frase = prompt("Digite una frase: ", "");

  let arr = Array.from(frase);
  var length1 = arr.length;
  cont = 0;
  for (var i = 0; i < length1; i++) {
    if (arr[i] == "a") cont++;
    if (arr[i] == "e") cont++;
    if (arr[i] == "i") cont++;
    if (arr[i] == "o") cont++;
    if (arr[i] == "u") cont++;
  }

  cont;

  alert("En la frase -" + frase + "- se encuentran " + cont + " vocales");
}

function ejerc_8() {
  frase = prompt("Digite una frase: ", "");

  let arr = Array.from(frase);
  var length1 = arr.length;
  (conta = 0), (conte = 0), (conti = 0), (conto = 0), (contu = 0);

  for (var i = 0; i < length1; i++) {
    if (arr[i] == "a") conta++;
    if (arr[i] == "e") conte++;
    if (arr[i] == "i") conti++;
    if (arr[i] == "o") conto++;
    if (arr[i] == "u") contu++;
  }

  conta, conte, conti, conto, contu;

  alert(
    "En la frase -" +
      frase +
      "- se encuentra... la a:" +
      conta +
      ", la e:" +
      conte +
      ", la i:" +
      conti +
      ", la o:" +
      conto +
      ", la u:" +
      contu
  );
}

function ejerc_9() {
  num = prompt("Digite el valor para ver si sisas: ", "");
  if (num % 2 == 0) alert("Efectivamente es divisible por 2");
  else if (num % 3 == 0) alert("Efectivamente es divisible por 3");
  else if (num % 5 == 0) alert("Efectivamente es divisible por 5");
  else if (num % 7 == 0) alert("Efectivamente es divisible por 7");
  else alert("Mal ahí mani, no es divisible por 2, 3, 5 o 7");
}

function ejerc_10() {
  num = prompt("Digite el valor para ver si sisas: ", "");
  divis = "";

  if (num % 2 == 0) divis = divis + "2 ";
  if (num % 3 == 0) divis = divis + "3 ";
  if (num % 5 == 0) divis = divis + "5 ";
  if (num % 7 == 0) divis = divis + "7 ";

  if (divis == "") alert("Mal ahí mani, no es divisible por 2, 3, 5 o 7");
  else alert("Efectivamente es divisible por " + divis);
}

function ejerc_11() {
  num = prompt("Digite el valor para ver sus divisores: ", "");
  divisores = [];
  j = 0;
  for (var i = 0; i < 100; i++) {
    if (num % i == 0) {
      divisores[j] = i;
      j++;
    }
  }
  divisores;

  alert("Los diviores son: " + divisores);
}

function ejerc_12() {
  num1 = prompt("Digite un valor: ", "");
  num2 = prompt("Digite otro pues: ", "");
  divisores = [];
  j = 0;
  for (var i = 0; i < 100; i++) {
    if (num1 % i == 0) {
      if (num2 % i == 00) {
        divisores[j] = i;
        j++;
      }
    }
  }
  divisores;

  alert("Los divisores comunes son: " + divisores);
}
