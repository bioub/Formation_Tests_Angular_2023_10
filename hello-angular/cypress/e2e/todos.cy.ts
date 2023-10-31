describe('template spec', () => {
  it('passes', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/todos',
    }, {
      statusCode: 200,
      body: [ { id: 1, title: 'DEF'}, { id: 2, title: 'GHI'}],
      headers: { 'access-control-allow-origin': '*' },
      delayMs: 500,
    }).as('getTodos')


    cy.visit('/todos')

    cy.wait('@getTodos')
    cy.contains('DEF')

    cy.get('input[name="todo"]')
      .type('ABC{enter}')
      .clear()

    cy.contains('ABC')
  })
})
