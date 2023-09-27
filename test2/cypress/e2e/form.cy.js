describe('Form tests',()=>{
    beforeEach(()=>{
        cy.visit('/forms')
    })
    it('Contains correct testing form header',()=>{
        cy.getDataTest('Testing Forms-header').should('contain.text','Testing Forms')
    })
    it('Test subscribe form',()=>{
        cy.contains(/Testing Forms/i)
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type('dgdgd@gmail.com')
        cy.contains(/Successfully subbed: dgdgd@gmail.com!/i ).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed: dgdgd@gmail.com!/i ).should('exist')
        cy.wait(3000)
        cy.contains(/Successfully subbed: dgdgd@gmail.com!/i ).should('not.exist')
        
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type('dgdgd@gmail.io')
        cy.contains(/Invalid email: dgdgd@gmail.io!/i ).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Invalid email: dgdgd@gmail.io!/i ).should('exist')
        cy.wait(3000)
        cy.contains(/Invalid email: dgdgd@gmail.io!/i ).should('not.exist')

        
        cy.contains(/fail!/i ).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/fail!/i ).should('exist')

    })
})