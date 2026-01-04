const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const launch = document.querySelector('.launch');
const deadline = document.querySelector('.deadline');
const components = document.querySelectorAll('.deadline-format h4');
// console.log(components)

let futureDate = new Date(2026, 1, 3, 9, 0);
// add specific values
//  console.log(futureDate);

const year = futureDate.getFullYear();

launch.textContent = `launch ends on ${year}`;
// function will input the launch end on the year - dynamic


