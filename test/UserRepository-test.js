const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/sleep')
const UserRepository = require('../src/UserRepository')
const userDataTest = require('../data/userDataTest')
const sleepData = require('../data/sleepDataTest')

describe('UserRepository', function() {
  let userRepository;
  let sleep;

  beforeEach(() => {
    userRepository = new UserRepository(userDataTest, sleepData)
    sleep = new Sleep(sleepData, userDataTest)
  })

  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of user repository', function() {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });

  it('should return a user object when searching by id', function() {
    expect(userRepository.getUserDataById(2)).to.equal(userDataTest[1]);
  });

  it('should calculate the total users step goals', function() {
    expect(userRepository.calculateAverageStepGoalForAllUsers()).to.equal(6667)
  })




  // Required rubric methods that aren't called
  it('should be able to filter out users based on ids', function() {
    expect(userRepository.filterSleepDataByIDs()).to.deep.equal([1, 2, 3])
  })

  it('should be able to show best quality users', function() {
    expect(userRepository.calculateTotalSleepQualityWeekWith3AwesomeDays(2019/09/22)).to.deep.equal([])
  })

})
