class UserRepository {
  constructor(userData, hydrationData, sleepData, activityData) {
    this.userData = userData;
    this.hydrationData = hydrationData
    this.sleepData = sleepData;
    this.activityData = activityData;
    this.friendsNames = [];
  }

  getUserDataById(id) {
    return this.userData.find(user => user.id === id)
  }

  findUserFriendsInformation(id) {
    const user = this.getUserDataById(id)
    console.log('user', user)
    const friendsNames = user.friends.reduce((acc, friend) => {
     acc.push(userData.find(user => user.id === friend))
     return acc
    }, [])
    return friendsNames
  }
  
  calculateFriendsNumStepsTotal(id) {
    const friends = this.findUserFriendsInformation(id)
    const selectedData = this.activityData.slice(4650, 5000)
    const friendData = []
    selectedData.forEach(entry => {
      friends.forEach(friend => {
        if(friend.id === entry.userID) {
          friendData.push({
              name : friend.name,
              id : friend.id,
              date : entry.date,
              numSteps : entry.numSteps
          })
        }
      })
    })
    return friendData.reduce((acc, entry) => {
      if(!acc[entry.name]) {
        acc[entry.name] = 0
      }
      acc[entry.name] += entry.numSteps
      return acc
    }, {})
  }

  calculateAverageStepGoalForAllUsers() {
    const totalDailyStepGoal = this.userData.reduce((acc, data) => {
      return acc += data.dailyStepGoal
    }, 0)
    return Math.round(totalDailyStepGoal / this.userData.length)
  }

  calculateActivityComparedToAllUsersForToday() {
    const totalDailyData = this.activityData.filter(entry => entry.date === '2019/09/22')
    .reduce((acc, element) => {
      acc.numSteps += element.numSteps
      acc.minutesActive += element.minutesActive
      acc.flightsOfStairs += element.flightsOfStairs
    return acc
    }, {
      userID : 1000,
      date : "2019/09/22",
      numSteps : 0,
      minutesActive : 0,
      flightsOfStairs : 0
    })
    return totalDailyData
  }
  
  // Required rubric methods that aren't called
  filterSleepDataByIDs() {
    return this.sleepData.reduce((acc, id) => {
      !acc.includes(id.userID) && acc.push(id.userID);
      return acc;
    }, []);
  }
  
  calculateTotalSleepQualityWeekWith3AwesomeDays(date) {
    const sortedWeeks = []
    this.filterSleepDataByIDs().forEach(id => {
      let userLogs = this.sleepData.filter(log => log.userID === id);
      sortedWeeks.push(userLogs)
    })
    
    let allUserWeeklyData = sortedWeeks.reduce((acc, user) => {
      let i = user.findIndex(log => log.date === date);
      acc.push(user.slice(i - 6, i + 1));
      return acc
    }, [])

    let allUserAverages = allUserWeeklyData.reduce((acc, user) => {
      let avgQual = user.reduce((acc, day) => {
        acc += day.sleepQuality;
        return acc;
      }, 0);
      acc.push(
        {
          id: acc.length + 1,
          avgQual: parseFloat((avgQual / 7).toFixed(1))
        });
      return acc;
    }, []);
    return allUserAverages.filter(user => user.avgQual > 3);
  }
}
  

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
