// alert("Hallo Kurs");

// Basics
let kuscheltiere = "Panda";

let balance = 42;

console.log(kuscheltiere);
console.log(balance);

let vorname = "Basti";
console.log("Wert von vorname", vorname);

vorname = "Daniel";
console.log("Wert von vorname", vorname);

const PI = 3;
// PI = 4 // not possible
const DAYS_OF_WEEK = 7;

console.log(DAYS_OF_WEEK);

/**
 * Math
 */
const a = 5;
const b = 10;

const addition = a + b;
console.log(addition);

const substraction = a - b;
console.log("substraction:", substraction);

const multiplication = a * b;
console.log(multiplication);

const division = a / b;
console.log(division);

// Remainder 5 % 2 // 1
// Exponential 5 ** 2 // 25

const kursleiter = vorname + "," + " Basti";
console.log(kursleiter);

/**
 * Conditional Branching
 */
let alter = 12; // kommt aus einem HTML Input Field
let preis;

// let liste = [12, 24, 25];
const CHECK_KIND = alter < 6;

if (CHECK_KIND) {
  preis = 0;
  console.log("Du hast kostenlosen Eintritt");
} else if (alter < 16) {
  preis = 10;
  console.log("Du hast den reduzierten Preis");
} else {
  preis = 15;
  console.log("Du musst den vollen Preis bezahlen");
}

console.log("Der Preis lautet:", preis);

let wahr = true;
let falsch = false;

if (wahr) {
  // Das ist wahr
} else {
  // Das ist falsch
}

/**
 * Functions
 */
function showMessage() {
  console.log("Hallo Kurs, ist das nicht toll?");
  console.log("Rechnen:", 5 + 7);
}

showMessage();
showMessage();

function greeter(vorname) {
  const nachricht = "Hallo, herzlich willkommen, " + vorname;
  console.log(nachricht);
}

greeter("Julius");
greeter("Mia");
greeter("Ali");

// Addiert zwei Zahlen mit einer kleinen Überraschung
function add(a, b) {
  const ergebnis = a + b;

  const zahl = 5;

  return ergebnis + zahl;
}

// ergebnis gibt es nicht mehr

// Math.random()

let x = add(5, 500);
console.log("Der Wert von x ist", x);
