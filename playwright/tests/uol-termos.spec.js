const { test, expect } = require('@playwright/test');

test('Validar última atualização dos Termos de Uso - UOL', async ({ page }) => {
  await page.goto('https://www.uol.com.br/termos-de-uso');
  await expect(page.locator('body')).toContainText(/Última atualização/i);

  // Captura e exibe no console a data
  const texto = await page.locator('body').innerText();
  const regex = /Última atualização\s*[:\-]?\s*(.*)/i;
  const match = texto.match(regex);
  if (match) {
    console.log('📅 Data encontrada:', match[1]);
  }
});