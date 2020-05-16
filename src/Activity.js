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
}







if (typeof module !== 'undefined') {
  module.exports = Activity;
}