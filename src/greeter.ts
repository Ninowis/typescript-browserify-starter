export type Person = {
  firstName: string;
  lastName: string;
}

export function greet(person: Person) {
  return `Hello, ${person.firstName} ${person.lastName}`
}
