class customerDetails {
   
    get backButton() {
        return cy.get('input[type="button"]');
    }
    get title() {
        return cy.get('div p b')
    }
    }
    export default new customerDetails();