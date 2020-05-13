const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User')
const userDataTest = require('../data/userDataTest')

describe('User', function() {
  let user;

  beforeEach(() => {
    user = new User(userDataTest)
  })
  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of user', function() {
    expect(user).to.be.an.instanceof(User);
  });

  it('should have a user id', function() {
    expect(user.id).to.equal(userDataTest.id);
  });

  it('should have a user name', function() {
    expect(user.name).to.equal(userDataTest.name);
  });

  it('should have a user address', function() {
    expect(user.address).to.equal(userDataTest.address);
  });

  it('should have a user email address', function() {
    expect(user.email).to.equal(userDataTest.email);
  });

  it('should have a user stride length', function() {
    expect(user.strideLength).to.equal(userDataTest.strideLength);
  });

  it('should have a user daily step goal', function() {
    expect(user.dailyStepGoal).to.equal(userDataTest.dailyStepGoal);
  });

  it('should have a user list of friends', function() {
    expect(user.friends).to.equal(userDataTest.friends);
  });

})
