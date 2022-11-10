import './main'

function innerHTML(selector: string) {
  return document.querySelector(selector)?.innerHTML || undefined;
}

describe('main.ts', () => {
  it("displays a greeting on screen", () => {
    expect(innerHTML('body')).toContain('Hello')
  })
})
