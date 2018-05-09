var a=10, b="3c";
var wynik= a+b;

//alert(wynik);
//alert (a+b);
console.log("tekst");
console.log (a);
console.log (typeof(a)); //number
console.log (typeof(b)); //string
console.log (typeof(a+b));
console.trace();
var _zmienna1 = 10;
// var 3liczba = 10; //będna nazwa zmiennej

var zmiennaZmiennoprzecinkowa = 2.5;
console.log (zmiennaZmiennoprzecinkowa);
console.log (typeof(zmiennaZmiennoprzecinkowa));

//float zmiennoprzecinkowa np. 2.5 (C++)
//int intiger liczba całkowita np. 3 (C++)

//bool

var prawda = true;
var falsz= false;
console.log(typeof(prawda));

//string

var tekst = "Janusz";
console.log (typeof(tekst)); //string

//undefined
var imie;
console.log(imie);
console.log(typeof(imie));
imie="Sandra";
// Imie / string
console.log(imie);
console.log(typeof(imie));

//object

var tablica = ["Janusz","Anna","Krystyna"];
console.log(tablica);
console.log(typeof(tablica));

// ##################################################################################################################################################################################################//#######

//var liczba = prompt("Podaj Liczbę")
//var liczba1= prompt("Podaj Pierwszą Liczbę","np. 3,4");
//var liczba2= prompt("Podaj Drugą Liczbę","np. 3,4");
// liczba1= parseInt(liczba1);
// liczba2= parseInt(liczba2);
//liczby całkowite

//liczba1 = parseFloat(liczba1)
//liczba2 = parseFloat(liczba2)
//Konwersja na typ zmiennoprzecinkowy
//console.log(typeof(liczba1));
//console.log(typeof(liczba2));

//var suma= liczba1 + liczba2;
//document.write(suma);
//console.log(typeof(suma));
// konkatenacja
//js -> +
//php -> .

// zadanie 1
//mama, tata i dziecko podają swój wiek z klawiatury
//Na ekranie wyświetle w formacie:
//Mama: lat
//Tata: lat
//Dziecko: lat
//Średni wiek :

// ##########################################################################################################################################################################################################################

var mama = prompt ("Podaj wiek Mamy","np. 30");
var tata = prompt ("Podaj wiek Taty","np. 30");
var dziecko = prompt ("Podaj wiek Dziecka","10");
mama=parseInt(mama);
tata=parseInt(tata);
dziecko=parseInt(dziecko);

var Srednia_Wieku= (mama + tata + dziecko) /3;
Srednia_Wieku = Srednia_Wieku.toFixed(2)
document.write("Wiek Mamy: " + mama + "<br>");
document.write("Wiek dziecka: " + dziecko + "<br>");
document.write("Wiek Taty: " + tata + "<br>");
document.write("Średnia Wieku: " + Srednia_Wieku + "<br>");


