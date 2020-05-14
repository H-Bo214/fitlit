class Hydration {
  constructor(hydrationData, user) {
    this.hydrationData = hydrationData;
    this.currentUser = user;
  }

  calculateCurrentUserTotalFlOz(id) {
    return this.hydrationData.filter(entry => entry.userID === this.currentUser.id)
  }
}