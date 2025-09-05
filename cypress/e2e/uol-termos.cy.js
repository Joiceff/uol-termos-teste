describe('Validação Termos de Uso - UOL', () => {
  it('Deve acessar os termos de uso e validar a última atualização', () => {
    cy.visit('https://www.uol.com.br/termos-de-uso');
    cy.contains(/Última atualização/i).should('exist');

    // Capturar a data no log
    cy.get('body').then(($body) => {
      const texto = $body.text();
      const regex = /Última atualização\s*[:\-]?\s*(.*)/i;
      const match = texto.match(regex);
      if (match) {
        cy.log('Data encontrada: ' + match[1]);
      }
    });
  });
});