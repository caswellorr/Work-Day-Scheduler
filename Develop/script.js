// Scheduler

// create a bunch of divs that display each hour of the day - AKA "TIMEBLOCKS"

// use the moment() method to tell the app what time it is so that it will color the timeblocks with the appropriate colors - gray for past, red for present and greren for future



let descriptionBlocks = document.querySelectorAll('.description');

for (let i = 0; i < descriptionBlocks.length; i++) {
  const currentBlock = descriptionBlocks[i];
  // console.log(currentBlock);
  
  let hour = Math.floor(currentBlock.dataset.time);
  // console.log(hour);
  
  let currentTime = moment();
  let startHour = moment().hour(hour).minute(0).second(0);
  let endHour = moment().hour(hour+1).minute(0).second(0);

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