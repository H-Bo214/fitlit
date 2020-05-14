class UserRepository {
  constructor(userData, hydrationData) {
    this.userData = userData;
    this.hydrationData = hydrationData;
  }

  getUserDataById(id) {
    return this.userData.find(user => user.id === id)
  }
  
  calculateAverageStepGoalForAllUsers() {
    const totalDailyStepGoal = this.userData.reduce((acc, data) => {
      return acc += data.dailyStepGoal
    }, 0)
    return Math.round(totalDailyStepGoal / this.userData.length)
  }

  
}

   

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}