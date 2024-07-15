function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        const deleteButton = document.createElement('span');
        deleteButton.textContent = 'X';
        deleteButton.className = 'delete';
        deleteButton.onclick = function() {
            taskList.removeChild(newTask);
        };

        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
}
