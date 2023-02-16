window.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.querySelector('.taskName');
    const addBtn = document.querySelector('.addButton');
    console.log(addBtn);
    
    addBtn.addEventListener('click', function() {
        const value = taskInput.value;
        if(value) {
            generateTask(value);
            taskInput.value = '';
        }
        
    });
});

function generateTask(taskName) {
    const taskWrapper = document.querySelector('.task-wrapper');
    const task = document.createElement('div');
    task.classList.add('tasks');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    task.appendChild(checkbox);

    const txt = document.createElement('span');
    txt.innerText = taskName;
    task.appendChild(txt);

    const button = document.createElement('button');
    button.setAttribute('type', 'button');

    const img = document.createElement('img');
    img.setAttribute('src', 'assets/icons/delete.svg');
    button.appendChild(img);

    task.appendChild(button);

    taskWrapper.appendChild(task);
}
function deleteTask(task){
    removeEventListener(task)
}