class Activity {
  constructor(activityData, user) {
    this.activityData = activityData;
    this.currentUser = user;
  }

  returnCurrentUserActivityData() {
   return this.activityData.filter(entry => entry.userID === this.currentUser.id)
  
  }

  activeMinutesForToday(date) {
    const currentUserActivityData = this.returnCurrentUserActivityData();
    let activeMinutes = currentUserActivityData.find(today => today.date === date) 
    return activeMinutes.minutesActive
  }

  totalNumberOfSteps() {
    const currentUserActivityData = this.returnCurrentUserActivityData()
    return currentUserActivityData.reduce((acc, step) => acc += step.numSteps,0)
  }

  calculateUserTotalMiles() {
    const stepsPerMile = Math.round(5280 / user.strideLength)
    const result = Math.round(this.totalNumberOfSteps() / stepsPerMile)
    return result
  }

  calculateUserDailyMiles (date) {
    const currentUserActivityData = this.returnCurrentUserActivityData()
    const activeSteps = currentUserActivityData.find(today => today.date === date) 
    const stepsPerMile = Math.round(5280 / user.strideLength)
    const result = Math.round(activeSteps.numSteps / stepsPerMile)
    return result
  }
}







if (typeof module !== 'undefined') {
  module.exports = Activity;
}