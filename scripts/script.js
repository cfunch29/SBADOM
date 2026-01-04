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

let futureDate = new Date(2026, 1, 3, 9, 30);
// add specific values
//  console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// need to access array of months
//needed array to be able to access values 
let month = futureDate.getMonth();
month = months[month];
// console.log(months[month]);

const date = futureDate.getDate();

// const weekday = futureDate.getDay();
// use weekdays array
const weekday = weekdays[futureDate.getDay()];
// console.log(weekday);

launch.textContent = `launch ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;
// function will input the launch end on the year - dynamic

// future time in ms
const futureTime = futureDate.getTime();
// console.log(futureTime);
// have to manipulate to give a better number

function getRemainingTime() {
    const today = new Date().getTime();
    // need to take future time and subtract it to condense numbers
    const t = futureTime - today;
    // console.log(today);
    // console.log(t);
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60min
    // 1 day = 24hr
    // setup to get the time variables
    // start with how many millisecs are in 1 day

    // values in ms
    // how many millisecs is in oneDay
    const oneDay = 24 * 60 * 60 * 1000
    // console.log(oneDay);
    // how many millisecs in oneHour
    const oneHour = 60 * 60 * 1000;
    // console.log(oneHour);
    // how many millisecs in oneMinute
    const oneMinute = 60 * 1000;
    //  console.log(oneMinute);

    let days = t / oneDay
    days = Math.floor(days);
    // console.log(days)
    let hours = Math.floor((t % oneDay) / oneHour);
    // with remainder want to include decimal in integer
    // console.log(hours);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // set values array;
    const values = [
        days, hours, minutes, seconds
    ];

    function format(components){
        // add zero in countdown counter if less than 10
        if(components < 10){
            return (components = `0${components}`);
        }
        // otherwise display the component as is
        return components;
    }

    // iterate over components to find time in array
    components.forEach(function (components, index) {
        components.innerHTML = values[index]
    });

}

// countdown
let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime();

