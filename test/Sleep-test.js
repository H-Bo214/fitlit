const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User')
const Sleep = require('../src/Sleep')
const sleepDataTest = require('../data/sleepDataTest')

describe('Hydration', function() {
  let user;
  let data;
  let sleep;
  let user1Data;
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
    })

    data = sleepDataTest

    user1Data = [ {
      
    }
  })


}