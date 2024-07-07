describe('Trasações',() => {

  beforeEach(() => {
      cy.visit("https://dev-finance.netlify.app/")
  })


  it('Cadastrar uma entrada', () => {
      
      criarTransacao("Freelance", 250)
      cy.get("tbody tr td.description").should("have.text", "Freelance")
      
  });
  
  it('Cadastrar uma saída', () => {
      
      criarTransacao("Cinema", -50)

      cy.get("tbody tr td.description").should("have.text", "Cinema")
  });

  it('Excluir transação',() => {
      criarTransacao("Bolsa", 350)
      cy.contains(".description", "Bolsa")
      .parent()
      .find("img")
      .click()
  });
});

function criarTransacao(descricao, valor){
       cy.contains("Nova Transação").click()
       cy.get('#description').type(descricao)
       cy.get('#amount').type(valor)
       cy.get('#date').type("2024-04-08")
       cy.contains('Button', 'Salvar').click()
      
}