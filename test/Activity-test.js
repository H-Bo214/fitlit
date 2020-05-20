const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User')
const Activity = require('../src/Activity')
const activityDataTest = require('../data/activityDataTest')

describe('Activity', function() {
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
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
    },
    {
      "userID": 1,
      "date": "2019/09/17",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
    },
    {
      "userID": 1,
      "date": "2019/09/18",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
     },
     {
      "userID": 1,
      "date": "2019/09/19",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
     },
     {
      "userID": 1,
      "date": "2019/09/20",
      "numSteps": 3486,
      "minutesActive": 114,
      "flightsOfStairs": 32
    },
    {
      "userID": 1,
      "date": "2019/09/21",
      "numSteps": 2634,
      "minutesActive": 107,
      "flightsOfStairs": 5
    },
    {
      "userID": 1,
      "date": "2019/09/22",
      "numSteps": 8015,
      "minutesActive": 106,
      "flightsOfStairs": 37
    },
  ]
    activity = new Activity(data, user)
    
  })
  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', function() {
    expect(activity).to.be.an.instanceof(Activity);
  });

  it('should be an instance of User', function() {
    expect(activity.currentUser).to.deep.equal(user);
  });

  it('should have a activity data', function() {
    expect(activity.activityData).to.equal(activity.activityData);
  });

  it('should have a a current user', function() {
    expect(activity.currentUser).to.equal(activity.currentUser);
  });

  it('should be able to get the current users activity data', function() {
    expect(activity.returnCurrentUserActivityData()).to.deep.equal(user1Data) 
  });

  it('should get the active minutes for today', function() {
    expect(activity.activeMinutesForToday("2019/09/22")).to.equal(106)
  });

  it('should calculate total number of steps for a user', function() {
    expect(activity.totalNumberOfSteps()).to.equal(28443)
  });

  it('should calculate total number of miles for a user', function() {
    expect(activity.calculateUserTotalMiles()).to.equal(23)
  });

  it('should calculate total daily of miles for a user', function() {
    expect(activity.calculateUserDailyMiles('2019/09/22')).to.equal(7)
  });

  it('should calculate weekly number of miles for a user', function() {
    expect(activity.calculateTotalActivityDataPerWeek('2019/09/22')).to.deep.equal([
      {
      userID: 1,
      date: '2019/09/22',
      numSteps: 8015,
      minutesActive: 106,
      flightsOfStairs: 37
     },
     {
      userID: 1,
      date: '2019/09/21',
      numSteps: 2634,
      minutesActive: 107,
      flightsOfStairs: 5
     },
     {
      userID: 1,
      date: '2019/09/20',
      numSteps: 3486,
      minutesActive: 114,
      flightsOfStairs: 32
     },
     {
      userID: 1,
      date: '2019/09/19',
      numSteps: 3577,
      minutesActive: 140,
      flightsOfStairs: 16
     },
     {
      userID: 1,
      date: '2019/09/18',
      numSteps: 3577,
      minutesActive: 140,
      flightsOfStairs: 16
     },
     {
      userID: 1,
      date: '2019/09/17',
      numSteps: 3577,
      minutesActive: 140,
      flightsOfStairs: 16
     },
     {
      userID: 1,
      date: '2019/09/16',
      numSteps: 3577,
      minutesActive: 140,
      flightsOfStairs: 16
     }
    ])
  
  });

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
