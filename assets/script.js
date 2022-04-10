//DOM objects
const dateEl = document.querySelector("#currentDay");
const textArea = document.getElementsByTagName("textarea");
const btnEl = document.getElementsByClassName("btn");
const parentDivEl = document.getElementsByClassName("time");



//variables
const date = moment().format("dddd, MMMM Do");



//add date element to header
dateEl.append(date);


// loop for save event listener

for (let i = 0; i < btnEl.length; i++) {
  let btn = btnEl[i]
  $(btn).on("click", saveData);
}

// function to highlight each timeblock based on relation to current time
$(document).ready(function () {
  //local variables
  let currentTime = moment().format("H");
    
  //iterate through the UI to color
  for (let i = 0; i < 9; i++) {
    let getIdTime = parseInt(parentDivEl[i].id);

    let getTextEl = textArea[i];

    if (getIdTime > currentTime) {
      // getTextEl.classList.add("bg-info", "text-white");
      $(getTextEl).addClass("bg-info text-white")
      
    } 

    if (getIdTime < currentTime) {
     
      $(getTextEl).addClass("bg-secondary text-white")
    }

    if (getIdTime == currentTime) {
      
      $(getTextEl).addClass("bg-success")

    }
  }
} )


$(document).ready(function  () {

//  iterate through the UI to populate info from local storage
  for (let i = 9; i < 18; i++) {

    
    let checkStorage = localStorage.getItem(i);
    if (checkStorage == null) {
      continue;
    }
   
   
    const parentDiv = document.getElementById(i);
   
   
    const textAreaEl = parentDiv.getElementsByTagName("textarea")
    $(textAreaEl).text(JSON.parse(checkStorage))
    console.log(textAreaEl)
     console.log(checkStorage)
    
    
    
     } 
  
   

   
    // console.log(checkStorage)
  

} )

//function to save data
// TODO: need to save data properly to local storage
// TODO: need to grab data to show on refresh
function saveData(event) {
  const btnClick = event.target;
  let getId = btnClick.parentNode.id
  let textContent = btnClick.previousElementSibling.value

  console.log(btnClick.parentNode.id)
  console.log(textContent)

  if (!textContent){
    
   
    localStorage.removeItem(getId)
  }

  localStorage.setItem(getId, JSON.stringify(textContent))
  

  
  
  // textArr.push(btnClickValue);
  // indexArr.push(btnClickIndex);
  // localStorage.setItem("text area", JSON.stringify(textArr));

  // localStorage.setItem("index", JSON.stringify(indexArr));
//  for (let i = 0; i <textArr.length; i++) {
//   //     console.log(event.target)

//   // } // 
  
  
}





