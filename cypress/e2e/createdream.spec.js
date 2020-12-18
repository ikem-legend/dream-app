describe('Create Dream', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it('requires first name', () => {
    cy.get("#firstName")
      .get("button")
      .click()
      .get(".errors")
      .should('contain', 'Your first name is required')
  })

  it('requires first name to be letters only', () => {
    cy.get("#firstName")
      .type("Ikem 1234")
      .get("button")
      .click()
      .get(".errors")
      .should('contain', 'Please enter valid first name')
  })

  it('requires first name to be a minimum of 3 letters', () => {
    cy.get("#firstName")
      .type("Ik")
      .get("button")
      .click()
      .get(".errors")
      .should("contain", "First name must be a minimum of 3 letters")
  })

  it('requires dream description', () => {
    cy.get("#dreamDesc")
      .get("button")
      .click()
      .get(".errors")
      .should('contain', 'Please enter dream description')
  })

  it('requires dream description to be a minimum of 5 letters', () => {
    cy.get("#dreamDesc")
      .type("Drea")
      .get("button")
      .click()
      .get(".errors")
      .should("contain", "Dream description must be a minimum of 5 letters")
  })

  it('create a dream', () => {
    cy.get("#firstName")
      .type("Ikemefuna")
      .get("#dreamDesc")
      .type("This is a sample dream description")
      .get("button")
      .click()
      .get(".dream-db")
      .should('be.visible')
  })
})