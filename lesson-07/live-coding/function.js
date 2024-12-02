function enlargeImg(clickedImage) {
  //   console.log(clickedImage);

  const largeImage = document.getElementById("large-image");
  //   console.log(largeImage);

  // 1. geklickte Bild-URL auf das große Bild setzen
  // console.log(clickedImage.src);
  largeImage.src = clickedImage.src;

  // 2. geklickten Bild Alt-Text auf das große Bild setzen
  //   console.log(clickedImage.alt);
  largeImage.alt = clickedImage.alt;

  // 3. preview-active Klasse entfernen
  const previouslyActiveImage = document.querySelector(".preview-active");
  //   console.log(previouslyActiveImage);
  previouslyActiveImage.classList.remove("preview-active");

  // 4. preview-active Klasse auf geklicktes Bild setzen
  clickedImage.classList.add("preview-active");
}

function openSoldOutModal() {
  const modal = document.getElementById("sold-out-modal");
  modal.classList.add("open");
}

function closeModal() {
  const modal = document.getElementById("sold-out-modal");
  modal.classList.remove("open");

  // email input zurücksetzen
  const emailInput = document.getElementById("email-input");
  emailInput.value = "";

  // fehlermeldung zurücksetzen
  const errorContainer = document.getElementById("error-container");
  errorContainer.textContent = "";
}

// Auslösen wenn "Remind me" geklickt wird
function validateEmail() {
  // Zugriff auf das Input-Feld
  const emailInput = document.getElementById("email-input");
  //   console.log(emailInput);

  // email adresse auslesen
  const email = emailInput.value;
  //   console.log(email);

  // email validieren
  const isValidEmail = email.includes("@") && email.includes(".de");
  //   console.log(isValidEmail);

  // Zugriff auf error-container
  const errorContainer = document.getElementById("error-container");
  // console.log(errorContainer);

  const signUpBtn = document.getElementById("sign-up-btn");

  if (isValidEmail) {
    // --- email ist gültig

    // fehlermeldung zurücksetzen
    errorContainer.textContent = "";

    // button aktivieren
    signUpBtn.disabled = false;
  } else {
    // --- email ist nicht gültig
    // Fehlermeldung in error-container anzeigen
    errorContainer.textContent = "Ungültige E-Mail";

    // button deaktivieren
    signUpBtn.disabled = true;
  }
}

function signUp() {
  // Zugriff auf das Input-Feld
  const emailInput = document.getElementById("email-input");
  //   console.log(emailInput);

  // email adresse auslesen
  const email = emailInput.value;

  console.log("Saving email to database...", email);

  closeModal();
}
