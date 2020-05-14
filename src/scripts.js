
// Variables
let user;
let userRepository = new UserRepository(userData);
let today = '2019/09/22';

// QuerySelectors
const displayUserInfo = document.querySelector('.display-user-info');
const displayUserFirstName = document.querySelector('#welcome-message');
const displayUserStepAverages = document.querySelector('.user-steps');
const displayTotalUserFlOz = document.querySelector('.hydration-total-FlOz');
const displayUserFlOzPerWeek = document.querySelector('.hydration-week');
const displayTodaysFlOz = document.querySelector('.hydration-today');

// Events
window.onload = 
createRandomUser(), 
displayUserData(), 
displayFirstName(), 
displayTotalUserStepAverages(),
displayTotalUserFlOzConsumedEver()

// Functions:

// User
function createRandomUser() {
  let randomUser = Math.floor(Math.random() * userData.length)
  user = new User(userData[randomUser])
  createHydrationData(user)
}

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