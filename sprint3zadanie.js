// a) Zadeklaruj zmienną typu number i przypisz do niej dowolną liczbę całkowitą.
let number = -1;
console.log(number);

// b) Utwórz zmienną typu string przechowującą twoje imię.
let myName = "Mateusz";
console.log(myName);

// c) Zainicjalizuj zmienną bez wartości, a następnie przypisz do niej dowolny tekst.
let myVariable;
myVariable = "Przypisano";
console.log(myVariable);

// d) Stwórz zmienną const i przypisz do niej obiekt z dwoma kluczami: name (string) i age (number).
const person = {
  name: "Mateusz",
  age: 32,
};
console.log(person);

// e) Zadeklaruj dwie zmienne: jedną używając let, drugą const i przypisz do nich wartości logiczne.
let isTodayRaining = false;
const is2Plus2Equals4 = true;
console.log(isTodayRaining + " " + is2Plus2Equals4);

// f) Stwórz zmienną, która będzie przechowywać sumę dwóch liczb.
let numbersOfDaysInWeek = 5 + 2;
console.log(numbersOfDaysInWeek);

// g) Utwórz zmienną przechowującą twoje pełne imię i nazwisko jako jedną wartość typu string.
const nameAndSurname = "Mateusz Moqbil";
console.log(nameAndSurname);

// h) Zainicjalizuj zmienną z liczbą zmiennoprzecinkową.
const pi = 3.14;
console.log(pi);

// i) Zadeklaruj zmienną i przypisz do niej wynik działania matematycznego (np. dodawanie).
let daysToDecember;
daysToDecember = 30 - 22;
console.log(daysToDecember);

// j) Stwórz zmienną przechowującą twoje miasto jako ciąg znaków.
let myCityName;
myCityName = "Ł" + "Ó" + "D" + "Ź";
console.log(myCityName);

// Zadania z Prostych i Złożonych Typów Danych
// a) Utwórz tablicę zawierającą trzy różne typy danych.
const array = [2, "Czy pierwsza wartość w tablicy jest równa 2?", true];
console.log(array);

// b) Stwórz obiekt car z właściwościami make, model i year.
const car = {
  make: true,
  model: "Yaris",
  year: 2017,
};
console.log(car);

// c) Zadeklaruj tablicę z trzema różnymi wartościami liczbowymi.
const badPassword = [1, 2, 3];
console.log(badPassword);

// d) Utwórz obiekt reprezentujący osobę, zawierający klucze name, age i isStudent (boolean).
const moqbil = {
  name: "Mateusz",
  age: 32,
  isStudent: false,
};
console.log(moqbil);

// e) Zadeklaruj zmienną przechowującą pusty obiekt, a następnie dodaj do niego klucz color z wartością typu string.
let myObject = {};
myObject.color = "blue";
console.log(myObject);

// f) Stwórz tablicę obiektów, gdzie każdy obiekt reprezentuje zwierzę z kluczami name (string) i age (number).
const myPets = [
  {
    name: "Kluska",
    age: 10,
  },
  {
    name: "Bojack",
    age: 1,
  },
  {
    name: "Tina",
    age: 12,
  },
];
console.log(myPets);

// g) Utwórz zmienną przechowującą tablicę z różnymi wartościami boolean.
const arrayOfBooleans = [true, true, false, true, false];
console.log(arrayOfBooleans);

// h) Stwórz obiekt student z kluczami name (string), grades (tablica liczb) i isActive (boolean).
const student = {
  name: "Jacek",
  grades: [4, 4, 3.5, 5, 2],
  isActive: true,
};
console.log(student);

// i) Zadeklaruj tablicę zawierającą różne typy danych, w tym co najmniej jeden obiekt.
const diffrentTypes = [
  true,
  "GitHub",
  24,
  {
    name: "Mateusz",
    age: 32,
  },
  [1, true, "Hej"],
  "End",
];
console.log(diffrentTypes);

// j) Utwórz obiekt reprezentujący książkę z kluczami title, author i yearPublished.
const book = {
  title: "Harry Potter",
  author: "J.K. Rowling",
  yearPublished: 2000,
};
console.log(book);

// Zadania z Warunków i Operatorów Trójargumentowych
// a) Napisz warunek if, który sprawdzi, czy zmienna typu number jest większa od 10.
const myNumber = 9;
if (myNumber > 10) {
  console.log(true);
} else {
  console.log(false);
}
console.log(myNumber);

// b) Stwórz warunek if, który sprawdzi, czy zmienna tekstowa jest równa "Hello".
const myText = "Hello";
if (myText === "Hello") {
  console.log(true);
} else {
  console.log(false);
}

// c) Użyj operatora ternarnego do przypisania do zmiennej wartości w zależności od innego warunku logicznego.
const maxWidth = 1920;
let isMaxWidthEquals1920 = maxWidth == 1920 ? true : false;
console.log(isMaxWidthEquals1920);

// d) Napisz warunek, który sprawdzi, czy zmienna age jest większa lub równa 18.
const age = 21;
let isAgeMoreOrEqual18 = age >= 21 ? true : false;
console.log(isAgeMoreOrEqual18);

// e) Stwórz warunek if-else, który sprawdzi, czy tablica jest pusta.
let myArray = [];

if (myArray.length == 0) {
  console.log("Tablica jest pusta.");
} else {
  console.log("Tablica nie jest pusta.");
}

// f) Użyj operatora ternarnego do sprawdzenia, czy zmienna isMember jest prawdziwa, i na tej podstawie przypisz rabat.
let discount = 0;
const isMember = true;
discount = isMember == true ? (discount += 320) : (discount = 0);
console.log(discount);

// g) Napisz warunek if, który sprawdzi, czy długość ciągu znaków w zmiennej jest większa niż 5.
const variableText = "To już ostatnie podpunkty";
if (variableText.length > 5) {
  console.log("Tekst jest dłuższy niż 5");
}

// h) Stwórz warunek if-else, który sprawdzi, czy liczba jest parzysta lub nieparzysta.
const oddOrEvenNumber = 23;
if (oddOrEvenNumber % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// i) Użyj operatora ternarnego do wyboru między dwoma różnymi wartościami tekstowymi w zależności od warunku.
let mixedNumber = 321;
let isEven =
  mixedNumber % 2 == 0
    ? "Tak, liczba jest parzysta"
    : "Nie, liczba jest nieparzysta";
console.log(isEven);

// j)Napisz warunek if, który sprawdzi, czy obiekt ma określony klucz.
let object = {
  name: "Helena",
  age: 25,
};
if ("name" in object) {
  console.log("Tak, object posiada klucz name");
}
