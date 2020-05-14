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
    console.log('currentUserHydrationData', currentUserHydrationData[0]);
    
    const totalAverageFlOz = currentUserHydrationData.reduce((acc, dailyOzIntake) => {
      acc += dailyOzIntake.numOunces
      console.log('acc', acc);
      return acc
    }, 0)
    return Math.round(totalAverageFlOz / currentUserHydrationData.length)
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}