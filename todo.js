displayTask();
function addText(){
  let inputElement=document.querySelector('#input');
  let dateElement=document.querySelector('#date');
  if(inputElement.value=='' || dateElement.value=='')
  {
    alert('Task and Date can not be blank');
    return;
  }
  let listOftasks=JSON.parse(localStorage.getItem('data'));
  listOftasks.push({text: inputElement.value, date: dateElement.value});
  localStorage.setItem('data',JSON.stringify(listOftasks));
  inputElement.value='';
  displayTask();
}

function displayTask(){
  let displayText=document.querySelector('#displayTodo');
  let tasks='';
  let listOftasks=JSON.parse(localStorage.getItem('data'));
  for(let i=0; i<listOftasks.length; i++){
    tasks += `
      <span>${listOftasks[i].text}</span>
      <span>${listOftasks[i].date}</span>
      <button class="Display-btn" onclick="deleteTask(${i});">Delete</button>
    `;
  }
  displayText.innerHTML=tasks;
}
function deleteTask(index){
  let listOftasks=JSON.parse(localStorage.getItem('data'));
  listOftasks.splice(index, 1);
  localStorage.setItem('data',JSON.stringify(listOftasks));
  displayTask();
}
