describe('Custom Input Form Component', () => {

  const typeComponent = 'app-text-field-form'

  beforeEach(() => {
    cy.visit('/')
    cy.wait(1000)
  })

  it('Default', () => {
    cy.get(typeComponent).contains('Another name')
    cy.wait(1000)
  })

  it('Filled', () => {
    const foo = 'Hello, World';
    cy.get(typeComponent).type(foo)
    cy.get(`${typeComponent} > input`).should('have.value', foo)
    cy.wait(1000)
  })

  it('Active', () => {
    const foo = 'Hello, World';
    cy.get(`${typeComponent} > input`).first().focus()
    cy.get(`${typeComponent} > input`).should('have.css', 'border', '1px solid rgb(146, 119, 255)')
    cy.wait(1000)
  })
})
