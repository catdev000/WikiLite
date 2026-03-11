beforeEach(() => {

  cy.visit('https://catdev000.github.io/WikiLite/#/page/home') // testing
  //cy.visit('index.html') // production

})


describe('Testing', () => {
  
  it('1 equals 1', () => {
    expect(1).to.equal(1);
  });

});
