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
    return Math.round(totalAverageSleep / totalAverageSleep.length)
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}