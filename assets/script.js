
//DOM objects
const dateEl = document.querySelector('#currentDay')


//variables
const date = moment().format("dddd, MMMM Do")

//add date element to header
dateEl.append(date)
