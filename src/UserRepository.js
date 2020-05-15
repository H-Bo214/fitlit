class UserRepository {
  constructor(userData, hydrationData, sleepData) {
    this.userData = userData;
    this.hydrationData = hydrationData;
    this.sleepData = sleepData;
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

  // Methods that aren't called
  calculateTotalSleepQualityWeekWith3AwesomeDays(date) {
    const lastSevenDays = []
    // const currentUserData = this.getUserDataById(id);
    const selectedDate = this.sleepData.filter(entry => entry.date === date 
    )
    const datesArray = this.sleepData.map(date => date.date)
    const endDate = datesArray.lastIndexOf(date)
    const weekData = this.sleepData.slice(endDate - 349, endDate + 1)
    console.log('weekData', weekData)
    // const selectedData = this.sleepData.indexOf(selectedDate.date)
    // average the individual user quality, and for those over 3, return those users
    // filter on id, 
    // math to calculate average over those 7 days
    // filter on average > 3
    for (let i = 0; i < 7; i++) {
      lastSevenDays.push(currentUserData[latestEntry - i])
    }
    return lastSevenDays
  }
  // have an array, and getting out a weeks worth of data given a single date
  
}

   

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}