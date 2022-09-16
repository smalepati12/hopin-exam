 class hopin {
get header() {
    return cy.get('div  h1')
}
get title() {
    return cy.get('div  p');
}

get inputName() {
    return cy.get('input[type="text"]');
}
get button() {
    return cy.get('input[type="button"]');
}
get nofEmployees() {
    return cy.get('tr td:nth-child(2)');
}

get nsize() {
    return cy.get('tr td:nth-child(3)');
}
}
export default new hopin();