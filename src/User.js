class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.friends = userData.friends 
    this.friendsNames = []
  }

  displayFirstNameOnly() {
    const firstName = this.name.split(" ")[0]
    return firstName
  }

  getUserDataById(id) {
    return this.userData.find(user => user.id === id)
  }

  displayUserFriendsNames() {
    this.friends.forEach(friend => {
     this.friendsNames.push(userData.find(user => user.id === friend))
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}