class Hydration {
  constructor(hydrationData, user) {
    this.id = hydrationData.id;
    this.date = hydrationData.date;
    this.ounces = hydrationData.numOunces;
    this.userHydration(user)
  }

}