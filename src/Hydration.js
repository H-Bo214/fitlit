class Hydration {
  constructor(hydrationData, user) {
    this.hydrationData = hydrationData;
    this.currentUser = user;
  }

  returnCurrentUserHydrationData() {
    return this.hydrationData.filter(entry => entry.userID === this.currentUser.id)
  }
  
  calculateTotalAverageDailyFlOz(id) {
    const currentUserHydrationData = this.returnCurrentUserHydrationData();
    const totalAverageFlOz = currentUserHydrationData.reduce((acc, dailyOzIntake) => {
     return acc += dailyOzIntake.numOunces
    }, 0)
    return Math.round(totalAverageFlOz / currentUserHydrationData.length)
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}