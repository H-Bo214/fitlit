class Sleep {
  constructor(sleepData, user) {
    this.sleepData = sleepData;
    this.currentUser = user;
  }

  returnCurrentUserSleepData() {
    return this.sleepData.filter(entry => entry.userID === this.currentUser.id)
  }

  calculateUserTotalAverageSleepHours() {
    const currentUserSleepData = this.returnCurrentUserSleepData();
    const totalAverageSleep = currentUserSleepData.reduce((acc, dailySleep) => {
      return acc += dailySleep.hoursSlept
    }, 0)
    let hours = Math.floor(totalAverageSleep / currentUserSleepData.length)
    return hours
  }

  calculateUserTotalAverageSleepQuality() {
    const currentUserSleepData = this.returnCurrentUserSleepData();
    const totalAverageSleep = currentUserSleepData.reduce((acc, dailySleep) => {
      return acc += dailySleep.sleepQuality
    }, 0)
    let hours = Math.floor(totalAverageSleep / currentUserSleepData.length)
    return hours
  }
  
  calculateTotalSleepDataPerWeek(date) {
    const lastSevenDays = []
    const currentUserSleepData = this.returnCurrentUserSleepData();
    const selectedDate = currentUserSleepData.find(entry => entry.date === date)
    const latestEntry = currentUserSleepData.indexOf(selectedDate)
    for (let i = 0; i < 7; i++) {
      lastSevenDays.push(currentUserSleepData[latestEntry - i])
    }
    return lastSevenDays
  }



  // Methods that aren't actually called

}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}