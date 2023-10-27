Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Ana Carla')
    cy.get('#lastName').type('Amador')
    cy.get('#email').type('anacarla@teste.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()

})