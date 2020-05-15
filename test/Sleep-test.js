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
    }),

    data = sleepDataTest

    user1Data = [ 
      {
        "userID": 1,
        "date": "2019/09/22",
        "hoursSlept": 4.6,
        "sleepQuality": 1.2
      },
      {
        "userID": 1,
        "date": "2019/09/21",
        "hoursSlept": 9,
        "sleepQuality": 3.1
      },
      {
        "userID": 1,
        "date": "2019/09/20",
        "hoursSlept": 7.9,
        "sleepQuality": 1.6
      },
      {
        "userID": 1,
        "date": "2019/09/19",
        "hoursSlept": 6.1,
        "sleepQuality": 3.5
      },
      {
        "userID": 1,
        "date": "2019/09/18",
        "hoursSlept": 10.1,
        "sleepQuality": 1.8
      },
      {
        "userID": 1,
        "date": "2019/09/17",
        "hoursSlept": 4.4,
        "sleepQuality": 1.6
      },
      {
        "userID": 1,
        "date": "2019/09/16",
        "hoursSlept": 5.1,
        "sleepQuality": 2.6
      },
      {
        "userID": 1,
        "date": "2019/09/15",
        "hoursSlept": 5.4,
        "sleepQuality": 3
      }
    ]

    sleep = new Sleep(data, user)
  })

    it('should be a function', function() {
      expect(Sleep).to.be.a('function');
    });
  
    it('should be an instance of Sleep', function() {
      expect(sleep).to.be.an.instanceof(Sleep);
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
      expect(hydration.returnCurrentUserHydrationData()).to.deep.equal(user1Data)
    });
 

})