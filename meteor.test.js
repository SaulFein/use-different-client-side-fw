// import { resetDatabase } from 'meteor/xolvio:cleaner';
//
// describe('my module', function () {
//   beforeEach(function () {
//     resetDatabase();
//   });
//   it('does something that should be tested', function () {
//     expect(true).to.be(true);
//    // This code will be executed by the test driver when the app is started
//    // in the correct mode
//  })
// });
if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("a group of tests", function(){
      it("should respect equality", function(){
        chai.assert.equal(5,5);
      });
    });
  });
}
if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("Server initialization", function(){
      it("should have a Meteor version defined", function(){
        chai.assert(Meteor.release);
      });
    });
  });
}
