class Hydration {
  constructor(hydrationData, user) {
    this.hydrationData = hydrationData;
    this.currentUser = user;
  }

  returnCurrentUserHydrationData() {
    return this.hydrationData.filter(entry => entry.userID === this.currentUser.id)
  }
  
  calculateTotalAverageDailyFlOz() {
    const currentUserHydrationData = this.returnCurrentUserHydrationData();
    const totalAverageFlOz = currentUserHydrationData.reduce((acc, dailyOzIntake) => {
      return acc += dailyOzIntake.numOunces
    }, 0)
    return Math.round(totalAverageFlOz / currentUserHydrationData.length)
  }

  calculateTotalDailyFlOzPerWeek(date) {
    const lastSevenDays = []
    const currentUserHydrationData = this.returnCurrentUserHydrationData();
    const todaysDate = currentUserHydrationData.find(entry => {
      entry.date === date 
    })
    const latestEntry = currentUserHydrationData.indexOf(todaysDate)
    for (var i = 1; i < 8; i++) {
      lastSevenDays.push(currentUserHydrationData[latestEntry + 1])
    }
  }
}



if (typeof module !== 'undefined') {
  module.exports = Hydration;
}