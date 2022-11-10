import { Person, greet } from "./greeter";

const user:Person = {
  firstName: "Guillaume",
  lastName: "Simonin"
}

function init() {
  document.body.textContent = greet(user)
}

window.addEventListener('load', init, false);
