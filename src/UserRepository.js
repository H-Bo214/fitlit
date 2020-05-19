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
    const friendsNames = user.friends.reduce((acc, friend) => {
     acc.push(userData.find(user => user.id === friend))
     return acc
    }, [])
    return friendsNames
  }
 
  calculateFriendsWeeklyStepTotal(id, date, activityData) {
    const lastSevenDays = []
    const friends = this.findUserFriendsInformation(id)
    console.log('friends', friends);

    // Filter activity data to the last 7 days, then reduce the friends with that 
    // data
    const matchedFriendsActivityData = this.activityData.reduce((acc, entry) => {
      friends.forEach(friend => {
        if(friend.id === entry.userID) {
          acc.push(
            {
            name : friend.name,
            id : friend.id,
            date : entry.date,
            numSteps : entry.numSteps
            }
          )
        }
      })
      return acc
    }, [])

    console.log('matchedFriendsActivityData', matchedFriendsActivityData)
    // We need to filter for todays date, and get an array of our friends 
    // data for today, and work backwards
    const selectedDate = friends.filter(entry => entry.date === date)
    console.log('selectedDate', selectedDate);
    
    const latestEntry = friends.indexOf(selectedDate)
    for (let i = 0; i < 7; i++) {
      lastSevenDays.push(friends[latestEntry - i])
    }
    console.log('lastSevenDays', lastSevenDays);
    
    return lastSevenDays

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