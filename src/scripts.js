
// Variables
let user;
let userRepository = new UserRepository(userData, hydrationData, sleepData, activityData);
let today = '2019/09/22';

// QuerySelectors
const displayUserInfo = document.querySelector('.display-user-info');
const displayUserFirstName = document.querySelector('#welcome-message');
const displayUserStepAverages = document.querySelector('.user-steps');
const displayTotalUserFlOz = document.querySelector('.hydration-total-FlOz');
const displayUserFlOzPerWeek = document.querySelector('.hydration-week');
const displayTodaysFlOz = document.querySelector('.hydration-today');
const displayUserSleepHoursAverage = document.querySelector('.sleep-all-time');
const displayUserSleepHoursPerWeek = document.querySelector('.sleep-week');
const displayUserSleepHoursToday = document.querySelector('.sleep-today')
const displayUserActiveMinutesForToday = document.querySelector('.active-minutes-today')
const displayUserMilesForToday = document.querySelector('.mile-distance-today')
const displayUserActiveMinutesWeekly = document.querySelector('.active-minutes-weekly')
const displayUserStepsToday = document.querySelector('.steps-today')
// const displayTotalUserStepsToday = document.querySelector('.user-steps')

// Events
window.onload = 
createRandomUser(), 
displayUserData(), 
displayFirstName(), 
displayTotalUserStepAverages();



// Functions:

// User
function createRandomUser() {
  let randomUser = Math.floor(Math.random() * userData.length)
  user = new User(userData[randomUser])
  createHydrationData(user)
  createSleepData(user)
  createActivityData(user)
  // displayTotalUserActivityToday(userRepository)
}

// function displayTotalUserActivityToday(userRepository) {
  
//   displayTotalUserStepsToday.innerHTML = `<p> ${newObj.numSteps}</p>`
// console.log(newObj);
// }
function displayFirstName() {
  displayUserFirstName.innerHTML = `<h1>Welcome ${user.displayFirstNameOnly()}!</h1>`
}

function displayUserData() {
  displayUserInfo.innerHTML = `
  <p>User: ${user.name}</p>
  <p>Address: ${user.address}</p>
  <p>Email: ${user.email}</p>
  <p>Stride Length: ${user.strideLength}</p>
  <p>Friends: ${user.friends}</p>
  <p>User Id: ${user.id}</p>
  `
}

function displayTotalUserStepAverages() {
  displayUserStepAverages.innerHTML = `
  <p>Daily Step Goal: ${user.dailyStepGoal}</p>
  <p>Total User Average Step Goal: ${userRepository.calculateAverageStepGoalForAllUsers()}</p>
  `
}

// Hydration
function createHydrationData(user) {
  let hydration = new Hydration(hydrationData, user)
  displayTotalUserFlOzConsumedEver(hydration)
  displayTotalUserFlOzPerWeek(hydration)
}

function displayTotalUserFlOzConsumedEver(hydration) {
  displayTotalUserFlOz.innerHTML = `<p>You have consumed ${hydration.calculateTotalAverageDailyFlOz(user.id)} total Fluid Ozs & counting!</p>`
}

function displayTotalUserFlOzPerWeek(hydration) {
  const thisWeek = hydration.calculateTotalDailyFlOzPerWeek(today)
  const todaysData = thisWeek.splice(0, 1)
  displayTodaysFlOz.innerHTML = `Today's intake is: ${todaysData[0].numOunces} Fl Ozs.`
  thisWeek.forEach(day => {
    displayUserFlOzPerWeek.innerHTML += `<p>You have consumed ${day.numOunces} total Fluid Ozs on ${day.date}.</p>`
  })
}

// Sleep
function createSleepData(user) {
  let sleep = new Sleep(sleepData, user)
  displayTotalUserAverageSleepHoursEver(sleep)
  displayTotalSleepDataPerWeek(sleep)
}

function displayTotalUserAverageSleepHoursEver(sleep) {
  displayUserSleepHoursAverage.innerHTML = `<p>You have sleep an average of ${sleep.calculateUserTotalAverageSleepHours(user.id)} hours!</p>
  <p>Your sleep quality is an average of ${sleep.calculateUserTotalAverageSleepQuality(user.id)} </p>` 
}

function displayTotalSleepDataPerWeek(sleep) {
  const thisWeek = sleep.calculateTotalSleepDataPerWeek(today)
  const todaysData = thisWeek.splice(0, 1)
  displayUserSleepHoursToday.innerHTML = `<p>Today's Total Sleep Hours are: ${todaysData[0].hoursSlept}</p>
  <p>Today's Sleep Quality is: ${todaysData[0].sleepQuality}.</p>`
  thisWeek.forEach(day => {
    displayUserSleepHoursPerWeek.innerHTML += `<p>You slept ${day.hoursSlept} hrs  with a sleep quality of ${day.sleepQuality}on ${day.date}.</p>`
  })
}

//Activity

function createActivityData(user) {
  let activity = new Activity(activityData, user)
  displayActiveMinutesForToday(activity)
  displayTotalMiles(activity)
  displayWeeklyActivityData(activity)
  // testing calculateUserDailyMiles (date), remove at the end and remove comma above
  
  
}



function displayWeeklyActivityData(activity) {
  const newObj = userRepository.calculateActivityComparedToAllUsersForToday()
  const thisWeek = activity.calculateTotalActivityDataPerWeek(today)
  const todaysData = thisWeek.splice(0, 1)
  displayUserStepsToday.innerHTML = `<p>Your daily steps: ${todaysData[0].numSteps}, the daily average of all users is ${newObj.numSteps}. `
  thisWeek.forEach(day => {
    displayUserActiveMinutesWeekly.innerHTML += `<p>On ${day.date} you were active ${day.minutesActive}, walked ${day.numSteps} steps & climbed ${day.flightsOfStairs} flights of stairs.</p>`
  })
}

function displayActiveMinutesForToday(activity) {
  const newObj = userRepository.calculateActivityComparedToAllUsersForToday()
  displayUserActiveMinutesForToday.innerHTML = `<p>You were active ${activity.activeMinutesForToday(today)} minutes today, the daily average of all users is ${newObj.minutesActive}. </p>`
}

//Our own metric
function displayTotalMiles(activity) {
  displayUserMilesForToday.innerHTML = `<p>You have walked ${activity.calculateUserDailyMiles (today)} miles today, and a total of ${activity.calculateUserTotalMiles()} miles.</p>`
}