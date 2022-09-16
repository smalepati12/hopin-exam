import hopin from "../../page-objects/hopin.page";
import customerList from "../../page-objects/customerlist.page";
import customerdetailsPage from "../../page-objects/customerdetails.page";
describe('I am on hopin web app', () => {
    it('Should see header , titles and enter user name and see enabled button', () => {
        cy.visit('http://localhost:3000/');
        hopin
            .header
            .should('contain', 'Welcome to Customer App');
        hopin
            .title
            .should('contain', 'Please provide your name:');
        hopin
            .inputName
            .type('suneela');
        hopin
            .button
            .should('be.enabled');
        hopin
            .button
            .click();
    });

    it('Should see Table List and see correct size for employee >=100 as small and <1000' +
            ' as Medium and >1000 as big',
    () => {
        hopin
            .header
            .should('contain', 'Welcome to Customer App');
        customerList.verifySize();
    });
    it('Should able to click on customer and navigate to details', () => {
        customerList
            .ecustomer
            .first()
            .click();
        customerdetailsPage
            .title
            .should('contain', 'Customer Details')
        customerdetailsPage
            .backButton
            .should('be.visible');
    });
    it('Should navigate back to the list after clicking on back button', () => {
        customerdetailsPage
            .backButton
            .click();
        hopin
            .header
            .should('contain', 'Welcome to Customer App');
        customerList
            .ecustomer
            .first()
            .should('be.visible');
    });

});