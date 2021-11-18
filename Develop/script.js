// Scheduler

// create a bunch of divs that display each hour of the day - AKA "TIMEBLOCKS"

// use the moment() method to tell the app what time it is so that it will color the timeblocks with the appropriate colors - gray for past, red for present and greren for future


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
  


  // let startHour = 
  // let endHour = 
    
    // create time bounds / parameters for currentBlock

    // create two objects (beginning/end of the hour)

    // compare these to currentTime

    // and assign past, present, future based on this comparison
  


}


// loclStorage