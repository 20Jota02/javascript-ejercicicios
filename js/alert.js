
function suma(){

    var num1;
    var num2;
    var r;
   num1=parseInt (prompt("ingrese un numero :",""));


   num2=prompt("ingrese otro numero  :","");
 



   r=(num1)+ parseInt(num2);
   alert("EL RESULTADO ES: "+ r)


}




function mayor(){

    var num1;
    var num2;
   
   num1=parseInt (prompt("ingrese un numero :",""));


   num2=prompt("ingrese otro numero  :","");
 

if (num1>num2) {
	alert("el numeromayor es: "+ num1)
}

alert("EL numero mayor es : "+ num2)
  


}



function mayor(){

    var num1;
    var num2;
   
   num1=parseInt (prompt("ingrese un numero :",""));


   num2=prompt("ingrese otro numero  :","");
 

if (num1>num2) {
	alert("el numeromayor es: "+ num1)
}

alert("EL numero mayor es : "+ num2)
  


}



function ejerc_3(){

    var num1;
    var num2;
	var num3;
   
   num1=parseInt (prompt("ingrese un numero :",""));


   num2=prompt("ingrese otro numero  :","");
   
   num3=prompt("ingrese otro numero  :","");
 

if (num1>=num2 && num1 >= num3) {
	alert("el numeromayor es: "+ num1)
}
else if (num2>=num1 && num2 >= num3) {
	alert("el numeromayor es: "+ num2)
}
else if (num3>=num1 && num3 >= num2) {
	alert("el numero mayor es: "+ num3)
}


}


function ejerc_4(){

    var num1;
    var num2;
	var num3;
   
   num1=parseInt (prompt("ingrese un numero :",""));


   num2=2;
   
 

if (num1 % num2 === 0) {
	alert("si es divisible por 2 ")
}
else  
alert("no es divisible por 2 ")

}



function ejerc_5(){
	var cadena = prompt('Escribe un texto: ' );
	
	var numeroVocales = cadena.match(/[a]/gi).length;
	
	alert("La cantidad que se repite la a es : " + numeroVocales);

}


function ejerc_6(){
	var cadena = prompt('Escribe un texto: ' );
	
var numeroVocales = cadena.match(/[aeiou]/gi).length;

alert("La cantidad de vocales es " + numeroVocales);

}




function ejerc_7(){
	var cadena = prompt('Escribe un texto: ' );
	
var numeroVocales = cadena.match(/[aeiou]/gi).length;

alert("La cantidad que se repite la a es : " + numeroVocales);

}



