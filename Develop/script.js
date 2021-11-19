

// ========== PROJECT DESCRIPTION TIMEBLOCKS ==================


    // create an array of blocks with the 'description' class within the textarea
let descriptionBlocks = document.querySelectorAll('.description');

    // loop through the array of descriptionBlocks 
for (let i = 0; i < descriptionBlocks.length; i++) {
      // define the current block
  const currentBlock = descriptionBlocks[i];

      // create a variable out of the dataset of the currentBlock in the array to define a time, converting the string into an integer with math.floor so I can add to it below
  let hour = Math.floor(currentBlock.dataset.time);
  
      // create variable for the currentTime using the moment method
  let currentTime = moment();
      // want to set variables for the beginning and ending of each currentBlock by modifying the moment method - this is so i can then compare the currentTime to the time of the block 
  let startHour = moment().hour(hour).minute(0).second(0);
  let endHour = moment().hour(hour+1).minute(0).second(0);

      // comparing the currentTime and the currentBlocks to assign past, present, or future classes from css that change the color of the blocks
  if (currentTime > endHour){
    console.log("past");
    currentBlock.classList.add('past');
  } else if (currentTime < startHour){
    console.log("future");
    currentBlock.classList.add('future');

  } else {
    console.log('present');
    currentBlock.classList.add('present');

  }
    
}

// ========== STORE DESCRIPTION IN LOCAL STORAGE W/ SAVE BUTTON ==================


    // creates variable that is an array of all the save buttons in the html
let saveBtn = document.querySelectorAll('button');

    // need to loop thru the length of the save button array, then make a variable for a single button (currentBtn) that is the one that will be clicked on
for (let i = 0; i < saveBtn.length; i++) {
  const currentBtn = saveBtn[i];

    // need an event listener to listen for the click on the current button, ehich is an event - log it to the console - the click event's target is the id within the currentBtn
  currentBtn.addEventListener('click', function(event){
    console.log(event.target.id);

    // now that i know the eventListener is logging the proper value of the id, i can create a variable that will be the id of the savebtn within a timeblock
  let timeBlockSaveId = event.target.id;
    
    // creates a variable out of whatever is inputed into the text area by grabbing the value of the sibling of the above targeted event?
  let task = $(this).siblings('textarea').val()
    console.log(task);

  // Vanilla JS not working - returns first value of 9, but doesnt work thru the rest of the loop
  // let textArea = document.getElementById(`${event.target.dataset.text}`)
  //   console.log(textArea.value);
  
  localStorage.setItem(timeBlockSaveId, task);

  getTask();
    
  })

};

function getTask(){

  for (let i = 9; i < 18; i++) {
    let getTask = localStorage.getItem(i);
    console.log(getTask);


  }
}

//set task within for loop - set textContrntn of thing with id of i = getTask

    // console.log(event.target.dataset.text);
