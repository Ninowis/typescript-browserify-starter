import { Person, greet } from "./greeter"

const user:Person = {
  firstName: "Guillaume",
  lastName: "Simonin"
}

export default (function () {
  document.body.textContent = greet(user)
})()
