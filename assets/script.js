//DOM objects
const dateEl = document.querySelector("#currentDay");
const textArea = document.getElementsByTagName("textarea");
const btnEl = document.getElementsByClassName("btn");
const idEl = document.getElementsByClassName("time");
let textAreaIndex;
let timeBlockIndex;
let savedArr = []

//variables
const date = moment().format("dddd, MMMM Do");

//add date element to header
dateEl.append(date);


// loop for save event listener

for (let i = 0; i < btnEl.length; i++) {
  btnEl[i].addEventListener("click", saveData);
}

// function to highlight each timeblock based on relation to current time
function getTimeBlock() {
  //local variables
  let currentTime = moment().format("H");

  //iterate through the UI to color
  for (let i = 0; i < 9; i++) {
    let getIdTime = idEl[i].id;

    let getTextEl = textArea[i];

    if (getIdTime > currentTime) {
      getTextEl.classList.add("bg-info", "text-white");
    }

    if (getIdTime < currentTime) {
      getTextEl.classList.add("bg-secondary", "text-white");
    }

    if (getIdTime == currentTime) {
      getTextEl.classList.add("bg-success");
    }
  }
}

//function to save data
// TODO: need to save data properly to local storage
// TODO: need to grab data to show on refresh
function saveData(event) {
  const btnClick = event.target;
  const btnClickIndex = btnClick.id;
  const btnClickValue = textArea[btnClickIndex].value;
  console.log(btnClickValue);

  localStorage.setItem("index", btnClickIndex);
  localStorage.setItem("text area", btnClickValue);
  savedArr.push();
  console.log(savedArr)
}

function onLoad () {
  const textAreaIndex = localStorage.getItem("index");
  const textAreaContent = localStorage.getItem("text area")
  console.log(textAreaIndex)
  console.log(textAreaContent)


}

getTimeBlock();
onLoad();
