const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User')
const Hydration = require('../src/Hydration')

describe('Hydration', function() {
  let user;
  let data;
  let hydration;

  beforeEach(() => {
    user = new User({
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        2,
        3
      ]
    }),
    data = [{
      "userID": 1,
      "date": "2019/09/16",
      "numOunces": 37
    }],

    hydration = new Hydration(data, user)

  })
  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', function() {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should be an instance of User', function() {
    expect(hydration.currentUser).to.deep.equal(user);
  });

  it('should have a hydration Data', function() {
    expect(hydration.hydrationData).to.equal(hydration.hydrationData);
  });

  it('should have a a current user', function() {
    expect(hydration.currentUser).to.equal(hydration.currentUser);
  });

  it('should be able to get the current users hydration data', function() {
    expect(hydration.returnCurrentUserHydrationData()).to.deep.equal(data)
  });


  // it('should display the users first name', function() {
  //   expect(user.displayFirstNameOnly()).to.equal('Luisa');
  // });

})
