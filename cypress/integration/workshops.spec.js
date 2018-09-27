describe('PGS Workshops', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('https://workshops.pgs-soft.com');
  });

  it('should redirect to workshops list after login', () => {
    cy.url().should('contain', 'app/workshops');
  });

  it('should filter by workshop title', () => {
    cy.get('.table-link > a').should('have.length', 3);

    cy.get('#titleFilter').type('Cypress');
    cy.get('#btnSearchFilter').click();

    cy
      .get('.table-link > a')
      .should('have.length', 1)
      .should('contain', 'Cypress');
  });
});

describe('PGS Workshops with mock API', () => {
  beforeEach(() => {
    cy.login();

    cy.server();
    cy.route({
      method: 'POST',
      url: 'api/workshops',
      response: 'fixture:workshops.json',
      status: 200,
      delay: 5000,
    }).as('workshops');

    cy.visit('https://workshops.pgs-soft.com');
  });

  it('should display loading spinner when workshops are loading', () => {
    cy.get('.sk-circle12').should('be.visible');
    cy.wait('@workshops');
    cy.get('.sk-circle12').should('not.be.visible');
  });
});