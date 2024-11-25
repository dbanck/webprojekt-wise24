console.log("JS wird ausgeführt!");

function buttonClick() {
  console.log("click");
  const button = document.getElementById("my-button");
  button.classList.add("larger");

  document.getElementById("headline").textContent = "JS is cool";

  document.getElementById("bild").src =
    "https://images.pexels.com/photos/40784/drops-of-water-water-nature-liquid-40784.jpeg?auto=compress&cs=tinysrgb&w=400";

  setTimeout(reset, 5000);
}

function fancy() {
  document.getElementById("bild").style.transform = "translateX(150px)";

  reset();
}

function reset() {
  console.log("Reset ausgefuehrt");
  document.getElementById("my-button").classList.remove("larger");
  document.getElementById("headline").textContent = "Langweilig Überschrift";
  document.getElementById("bild").src =
    "https://images.pexels.com/photos/2928428/pexels-photo-2928428.jpeg?auto=compress&cs=tinysrgb&w=400";
}

function preisberechnen(element) {
  const preisElement = document.getElementById("preis");

  let preis;
  const alter = element.value;
  if (alter < 6) {
    preis = 0;
    console.log("Du hast kostenlosen Eintritt");
  } else if (alter < 16) {
    preis = 10;
    console.log("Du hast den reduzierten Preis");
  } else {
    preis = 15;
    console.log("Du musst den vollen Preis bezahlen");
  }

  preisElement.innerText = preis + " Euro";
}
