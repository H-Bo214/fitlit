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
    console.log('totalAverageSleep', totalAverageSleep)
    return (Math.round(totalAverageSleep / totalAverageSleep.length)).toFixed(0)
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}