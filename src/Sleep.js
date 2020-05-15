class Sleep {
  constructor(sleepData, user) {
    this.sleepData = sleepData;
    this.currentUser = user;
  }

  returnCurrentUserSleepData() {
    return this.sleepData.filter(entry => entry.userID === this.currentUser.id)
  }
  
}