const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User')
const Activity = require('../src/Activity')
const activityDataTest = require('../data/activityDataTest')

describe('Hydration', function() {
  let user;
  let data;
  let activity;
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

    data = activityDataTest

    user1Data = [  {
      "userID": 1,
      "date": "2019/09/16",
      "numOunces": 37
    },
    {
      "userID": 1,
      "date": "2019/09/17",
      "numOunces": 85
    },
    {
      "userID": 1,
      "date": "2019/09/18",
      "numOunces": 94
    },
    {
      "userID": 1,
      "date": "2019/09/19",
      "numOunces": 75
    },
    {
      "userID": 1,
      "date": "2019/09/20",
      "numOunces": 30
    },
    {
      "userID": 1,
      "date": "2019/09/21",
      "numOunces": 40
    },
    {
      "userID": 1,
      "date": "2019/09/22",
      "numOunces": 62
    },
  ]

    activity = new Activity(data, user)
    
  })
  it.only('should be a function', function() {
    expect(Activity).to.be.a('function');
  });

  it.only('should be an instance of Hydration', function() {
    expect(activity).to.be.an.instanceof(Activity);
  });

  // it('should be an instance of User', function() {
  //   expect(hydration.currentUser).to.deep.equal(user);
  // });

  // it('should have a hydration Data', function() {
  //   expect(hydration.hydrationData).to.equal(hydration.hydrationData);
  // });

  // it('should have a a current user', function() {
  //   expect(hydration.currentUser).to.equal(hydration.currentUser);
  // });

  // it('should be able to get the current users hydration data', function() {

  //   expect(hydration.returnCurrentUserHydrationData()).to.deep.equal(user1Data)
  // });

  // it('should get the current total Average Daily', function() {
  //   expect(hydration.calculateTotalAverageDailyFlOz()).to.deep.equal(60)
  // });

  // it('should get the current total daily fluid ounces per week', function() {
  //   expect(hydration.calculateTotalDailyFlOzPerWeek('2019/09/22')).to.deep.equal([
  //     { userID: 1, date: '2019/09/22', numOunces: 62 },
  //     { userID: 1, date: '2019/09/21', numOunces: 40 },
  //     { userID: 1, date: '2019/09/20', numOunces: 30 },
  //     { userID: 1, date: '2019/09/19', numOunces: 75 },
  //     { userID: 1, date: '2019/09/18', numOunces: 94 },
  //     { userID: 1, date: '2019/09/17', numOunces: 85 },
  //     { userID: 1, date: '2019/09/16', numOunces: 37 }
  //   ])
  // });

})
