describe('Front page', function () {
  it('site can be opened', function () {
    cy.visit('http://localhost:8000')
    cy.contains('elcome')
  })
})