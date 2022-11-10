import { greet } from './greeter'

describe("greeter.ts", () => {
  const mockUser = {
    firstName: 'test',
    lastName: 'user'
  }

  it("returns a string", () => {
    expect(typeof greet(mockUser)).toBe('string')
  })

  it("returns a 'Hello...' greeting with the user firstname and lastname", () => {
    expect(greet(mockUser)).toBe("Hello, test user")
  })
})
