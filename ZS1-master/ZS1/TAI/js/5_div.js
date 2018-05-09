//document.getElementById('blok1').innerHTML = 'Janusz';
var b1 = document.getElementById('blok1');
var b2 = document.getElementById('blok2');
var b3 = document.getElementById('blok3');
var b4 = document.getElementById('blok4');
var inner = document.getElementById('inner');
var content = document.getElementById('content')

b1.innerHTML = 'Anna';
b1.innerHTML = 'Agnieszka';
b2.innerHTML = 'Jacek';

var imie = prompt('podaj imię');
b3.innerHTML = imie;

b4.textContent ='Tomek';

// różnica pomiędzy innerhtml a textcontent

inner.innerHTML = '<h1>inner</h1>';
content.textContent = '<h1>content</h1>';

inner.innerHTML = '<a href="http://wp.pl"> <h1> inner </h1>';
content.textContent = '<a href="http://wp.pl"><h1> content </h1>';


/*
zad 1 -> Użytkownik podaje z klawiatury dwie wartości: długość podstawy oraz wysokość trójkąta. Wyświetl wynik w div w formacie: "Pole trójkąta wynosi: .... cm2";
Wynic ma być w kolorze białym, na tle czarnym
Ogranicz blok wyświetlający do szerokości 200px.
Zaokrąglij wynik do dwóch miejsc po przecinku.
W arkuszu stylów ustaw wyrównanie textu do środka.
XDDDDDD
*/

var dlugosc = prompt('Podaj długość');
var wysokosc = prompt('Podaj wysokość');
var oblicz = 0.5 * dlugosc * wysokosc;
oblicz = oblicz.toFixed(2);
wynik.innerHTML = 'Pole trójkąta wynosi:' + oblicz + 'cm2';



