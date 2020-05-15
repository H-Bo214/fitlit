class Activity {
  constructor(activityData, user) {
    this.activityData = activityData;
    this.currentUser = user;
  }

  returnCurrentUserActivityData() {
   return this.activityData.filter(entry => entry.userID === this.currentUser.id)
  
  }
  
}







if (typeof module !== 'undefined') {
  module.exports = Activity;
}