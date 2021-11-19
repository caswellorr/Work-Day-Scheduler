

// ========== PROJECT DESCRIPTION TIMEBLOCKS ==================

let descriptionBlocks = document.querySelectorAll('.description');

for (let i = 0; i < descriptionBlocks.length; i++) {
  const currentBlock = descriptionBlocks[i];

  let hour = Math.floor(currentBlock.dataset.time);

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
    
}

// ========== STORE DESCRIPTION IN LOCAL STORAGE W/ SAVE BUTTON ==================

let saveBtn = document.querySelectorAll('button');

for (let i = 0; i < saveBtn.length; i++) {
  const currentBtn = saveBtn[i];

  currentBtn.addEventListener('click', function(event){
    console.log(event.target.id);

  let timeBlockSaveId = event.target.id;
    
  let task = $(this).siblings('textarea').val()
    console.log(task);
  
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
