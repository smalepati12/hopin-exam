import {indexOf} from "cypress/types/lodash";

class customerList {
  get ecustomer() {
    return cy.get('tr td:nth-child(1)');
  }
  get nofEmployees() {
    return cy.get('tr td:nth-child(2)');
  }

  get size() {
    return cy.get('tr td:nth-child(3)');
  }
  verifySize() : void {
    this
      .nofEmployees
      .then(elems => {
        this
          .size
          .then(size => {
            const length = elems.length;
            const employeeNum = [...elems]
              .map(el => el.textContent.trim())
              .map(i => Number(i));
            const employeeSize = [...size].map(el => el.textContent.trim());

            for (let i = 0; i < length; i++) {
              if (employeeNum[i] <= 100) {
                expect(employeeSize[i]).contain('Small')
              } else if (employeeNum[i] >= 100 && employeeNum[i] <= 1000) {
                expect(employeeSize[i]).contain('Medium')
              } else if (employeeNum[i] > 1000) {
                expect(employeeSize[i]).contain('Big')
              }
            }

          });
      });
  }
}
export default new customerList();