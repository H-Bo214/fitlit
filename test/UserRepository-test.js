const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User')
const Sleep = require('../src/sleep')
const UserRepository = require('../src/UserRepository')
const userData = require('../data/userDataTest')
const sleepData = require('../data/sleepDataTest')
const activityData = require('../data/activityDataTest')
const hydrationData = require('../data/hydrationDataTest')

describe('UserRepository', function() {
  let user;
  let userRepository;
  let sleep;

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

    userRepository = new UserRepository(userData, hydrationData, sleepData, activityData),
    sleep = new Sleep(sleepData, userData);
  })

  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of user repository', function() {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });

  it('should return a user object when searching by id', function() {
    expect(userRepository.getUserDataById(1)).to.deep.equal(user);
  });

  
  it('should be able to find a users friends', function() {
    expect(userRepository.findUserFriendsInformation(1)).to.deep.equal([{
      "address": "30086 Kathryn Port, Ciceroland NE 07273",
      "dailyStepGoal": 5000,
      "email": "Dimitri.Bechtelar11@gmail.com",
      "friends": [
        1,
        3
      ],
      "id": 2,
      "name": "Jarvis Considine",
      "strideLength": 4.5
    },
    {
      "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
      "dailyStepGoal": 5000,
      "email": "Elwin.Tromp@yahoo.com",
      "friends": [
        2
      ],
      "id": 3,
      "name": "Herminia Witting",
      "strideLength": 4.4
    }
    ])
  })

  it('should calculate the total users step goals', function() {
    expect(userRepository.calculateAverageStepGoalForAllUsers()).to.equal(6667)
  })

  it('should calculate the total activity for all user for 2019/09/22', function() {
    expect(userRepository.calculateActivityComparedToAllUsersForToday()).to.deep.equal({
      "date": "2019/09/22",
      "flightsOfStairs": 111,
      "minutesActive": 318,
      "numSteps": 24045,
      "userID": 1000
    })
  })

  it('should be able to calculate the friends steps', function() {
    expect(userRepository.calculateFriendsNumStepsTotal(1)).to.deep.equal({})
  })

  it('should be able to find the WORST sleeper(s)', function() {
    expect(userRepository.getWorstSleeper('2019/09/22')).to.deep.equal([
      {
       "date": "2019/09/22",
       "hoursSlept": 4.6,
       "sleepQuality": 1.2,
       "userID": 1
      }
    ])
  })

  it('should be able to find the BEST sleeper(s)', function() {
    expect(userRepository.getWorstSleeper('2019/09/22')).to.deep.equal([
      {
       "date": "2019/09/22",
       "hoursSlept": 4.6,
       "sleepQuality": 1.2,
       "userID": 1
      }
    ])
  })

  it('should be able to filter out users based on ids', function() {
    expect(userRepository.filterSleepDataByIDs()).to.deep.equal([1, 2, 3])
  })
  
  // Required rubric methods that aren't called
  it('should be able to filter out users based on ids', function() {
    expect(userRepository.filterSleepDataByIDs()).to.deep.equal([1, 2, 3])
  })

  it('should be able to show best quality users', function() {
    expect(userRepository.calculateTotalSleepQualityWeekWith3AwesomeDays(2019/09/22)).to.deep.equal([])
  })

})
