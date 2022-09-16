describe('custmer list from API response', () => {


    it('should return correct customer data and correct size for employee >=100 as small and <1000 as Medium and >1000 as big and should not see contact info for  customer United brands', () => {
          cy.request({
               method: 'POST',
               url: 'http://localhost:3001/',
               body: {
                   "name" : "test"
               }
          }).then((response) => { 
                  expect(response.body).has.property('name','test'); 
                  expect(response.body).has.property('timestamp'); 
                  expect(response.body).has.property('customers');
                  expect(response.body.customers[0]).has.property('name','Americas Inc.');
                  expect(response.body.customers[0]).has.property('employees', 10);
                  expect(response.body.customers[0]).has.property('size','Small');
                  expect(response.body.customers[0].contactInfo).has.property('name', 'John Smith');
                  // checking should not have contact info for customer 3
                  expect(response.body.customers[3]).not.has.property('contactInfo');
                  expect(response.body.customers[3]).has.property('name', 'United Brands');
                  for(let i= 0; i<6; i++) {
                  if(response.body.customers[i].employees <= 100){
                    expect(response.body.customers[i]).has.property('size','Small');
                  } else if(response.body.customers[i].employees > 100 && response.body.customers[i].employees <= 1000){
                    expect(response.body.customers[i]).has.property('size','Medium');
                  } if(response.body.customers[i].employees > 1000){
                    expect(response.body.customers[i]).has.property('size','Big');
                }
            }
          })
    })
 
})