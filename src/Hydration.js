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
    const todaysDate = currentUserHydrationData.find(entry => entry.date === date 
    )
    const latestEntry = currentUserHydrationData.length - 1
    for (let i = 0; i < 7; i++) {
      lastSevenDays.push(currentUserHydrationData[latestEntry - i])
    }
    return lastSevenDays
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}