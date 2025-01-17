//to create dom element

const taskInput=document.getElementById("task-input");
const addButton=document.getElementById("add-task-btn");
const taskList=document.getElementById("task-list");

console.log(taskInput);
console.log(addButton);
console.log(taskList);


addButton.addEventListener('click', function(){
const task=taskInput.value.trim();

if(task){
    const li=document.createElement('li');
    li.textContent=task;

    li.addEventListener('click', function(){
        li.remove();
    });
taskList.appendChild(li);
taskInput.value='';
}
else{
    alert("please enter a task");
}
});

taskInput.addEventListener('keypress',function(){
    if(event.key==='Enter'){
        addButton.click();
    }
});
