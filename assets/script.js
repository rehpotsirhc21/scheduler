
//DOM objects
const dateEl = document.querySelector('#currentDay')
const textArea = document.getElementsByTagName("textarea")
console.log(textArea)


//variables
const date = moment().format("dddd, MMMM Do")


//add date element to header
dateEl.append(date)

function getTimeBlock() {
    let currentTime = moment().format('H');
    console.log(currentTime)
    const idEl = document.getElementsByClassName('time')
    for (let i = 0; i < 9; i++) {
        let getIdTime = idEl[i].id
        console.log(getIdTime)
        let getTextEl = textArea[i];
        console.log(getTextEl)

        if (getIdTime > currentTime) {
            getTextEl.classList.add("bg-primary", "text-white");
            
        }

        if (getIdTime < currentTime) {
            getTextEl.classList.add("bg-secondary", "text-white")
        }

        if (getIdTime == currentTime) {
            getTextEl.classList.add("bg-success", "text-white")
        }


    }


}



// console.log(moment().format('H'))

// console.log(moment("10", 'h').format('H'))

// var id = document.getElementsByClassName('time')[0].id

// console.log(id)
getTimeBlock();




