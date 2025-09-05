describe('Validação Termos de Segurança e Privacidade - UOL', () => {
  beforeEach(() => {
    // Ignora erros de scripts externos (Google Analytics, anúncios, etc.)
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('Deve acessar os termos de segurança e validar o título da página', () => {
    cy.visit('https://sobreuol.noticias.uol.com.br/normas-de-seguranca-e-privacidade');

    // Valida se o título principal aparece
    cy.contains('Normas de Segurança e Privacidade').should('exist');

    // Opcional: validar subtítulo "POLÍTICA DE PRIVACIDADE GLOBAL – GRUPO UOL"
    cy.contains(/POL[IÍ]TICA DE PRIVACIDADE GLOBAL/i).should('exist');
  });
});
