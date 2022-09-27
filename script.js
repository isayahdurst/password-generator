// Assignment Code
const generateBtn = document.querySelector("#generate");
const createPasswordBtn = document.querySelector(".create");
const copyButton = document.querySelector(".copy-link-button");
const passwordBox = document.querySelector("#password");

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-modal");
const uppercaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowercaseLetters = uppercaseLetters.map((Element) => {
  return Element.toLowerCase();
});
const numbersList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbolsList = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "=",
  "+",
  "?",
];
let allowedCharacters = [];

const passwordLengthSliderValue = document.querySelector(".value");
const passwordLengthSlider = document.getElementById("password-length-slider");

passwordLengthSliderValue.textContent = passwordLengthSlider.value;

// Character Type Checkboxes:
const lowercaseCB = document.querySelector(".lowercase");
const uppercaseCB = document.querySelector(".uppercase");
const numbersCB = document.querySelector(".numbers");
const specialCB = document.querySelector(".special");

// Min character boxes

const minLowerBox = document.getElementById("min-lowercase");
const minUpperBox = document.getElementById("min-uppercase");
const minNumbersBox = document.getElementById("min-numbers");
const minSpecialBox = document.getElementById("min-special");

// Code to display the modal window
const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Code to close the modal window
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Checks to ensure that at least one character type is seleccted, or shows an alert
const checkCriteria = function () {
  allowedCharacters = [];
  if (
    lowercaseCB.checked ||
    uppercaseCB.checked ||
    numbersCB.checked ||
    specialCB.checked
  ) {
    if (lowercaseCB) allowedCharacters.push(...lowercaseLetters);
    if (uppercaseCB) allowedCharacters.push(...uppercaseLetters);
    if (numbersCB) allowedCharacters.push(...numbersList);
    if (specialCB) allowedCharacters.push(...symbolsList);
    return true;
  } else {
    window.alert("Please select at least one type of character");
    return false;
  }
};

// Whenever a checkbox is changed, this function will toggle the corresponding minimuim box on or off
const toggleMinBoxes = function () {
  if (lowercaseCB.checked) {
    minLowerBox.classList.remove("invisible");
  } else {
    minLowerBox.classList.add("invisible");
    minLowerBox.value = "0";
  }
  if (uppercaseCB.checked) {
    minUpperBox.classList.remove("invisible");
  } else {
    minUpperBox.classList.add("invisible");
    minUpperBox.value = "0";
  }
  if (numbersCB.checked) {
    minNumbersBox.classList.remove("invisible");
  } else {
    minNumbersBox.classList.add("invisible");
    minNumbersBox.value = "0";
  }
  if (specialCB.checked) {
    minSpecialBox.classList.remove("invisible");
  } else {
    minSpecialBox.classList.add("invisible");
    minSpecialBox.value = "0";
  }
};

// Updates password length value as the slider moves
const updateLength = function () {
  passwordLengthSliderValue.textContent = passwordLengthSlider.value;
};

const getMinimumValues = function () {
  const minLower = Number(document.getElementById("min-lowercase").value);
  const minUpper = Number(document.getElementById("min-uppercase").value);
  const minNumbers = Number(document.getElementById("min-numbers").value);
  const minSpecial = Number(document.getElementById("min-special").value);
  const passwordLength = Number(
    document.getElementById("password-length-slider").value
  );

  let totalMin = minLower + minUpper + minNumbers + minSpecial;
  if (totalMin <= passwordLength) {
    return [
      minLower,
      minUpper,
      minNumbers,
      minSpecial,
      passwordLength,
      totalMin,
    ];
  } else {
    window.alert(
      "Password is too short to meet defined criteria, please try again."
    );
  }
};

// Ensures the minimum number of each character type is assigned to the password
const assignMinimums = function (minLower, minUpper, minNumbers, minSpecial) {
  let password = [];
  if (minLower) {
    for (let i = 0; i < minLower; i++) {
      password.push(
        lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]
      );
    }
  }
  if (minUpper) {
    for (let i = 0; i < minUpper; i++) {
      password.push(
        uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]
      );
    }
  }
  if (minNumbers) {
    for (let i = 0; i < minNumbers; i++) {
      password.push(
        numbersList[Math.floor(Math.random() * numbersList.length)]
      );
    }
  }
  if (minSpecial) {
    for (let i = 0; i < minSpecial; i++) {
      password.push(
        symbolsList[Math.floor(Math.random() * symbolsList.length)]
      );
    }
  }
  return password;
};

// Shuffles all elements inside the array
const shuffle = function (password) {
  for (let i = 0; i < password.length; i++) {
    randomIndex = Math.floor(Math.random() * password.length);
    temp = password[i];
    password[i] = password[randomIndex];
    password[randomIndex] = temp;
  }
};

// Main generation method which triggers all other minor functions.
const generatePassword = function () {
  let password = [];
  if (checkCriteria()) {
    const [minLower, minUpper, minNumbers, minSpecial, PWLength, totalMin] =
      getMinimumValues();
    password = assignMinimums(minLower, minUpper, minNumbers, minSpecial);
    for (let i = password.length; i < PWLength; i++) {
      password[i] =
        allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)];
    }

    // Password is shuffled because the first characters are always printed in order if there are minimum values set, which is a security vulnerability.
    shuffle(password);
    let passwordText = document.querySelector("#password");
    passwordText.value = password.join("");
    copyButton.classList.remove("hidden");
    closeModal();
  }
};

// Write password to the #password input
function writePassword() {
  showModal();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
overlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);
createPasswordBtn.addEventListener("click", generatePassword);

// Checkbox listener to display or hide Minimum Boxes
lowercaseCB.addEventListener("click", toggleMinBoxes);
uppercaseCB.addEventListener("click", toggleMinBoxes);
numbersCB.addEventListener("click", toggleMinBoxes);
specialCB.addEventListener("click", toggleMinBoxes);
passwordLengthSlider.addEventListener("mousemove", updateLength);

copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordBox.value);
  let password = passwordBox.value;
  passwordBox.value = "Password copied to clipboard!";
  setTimeout(() => (passwordBox.value = password), 1000);
  setTimeout(() => passwordBox.select(), 1000);
});
