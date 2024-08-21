document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Load tasks from server (Placeholder)
    function loadTasks() {
        // You'd use fetch or AJAX here to get tasks from the backend
        // Example:
        // fetch('/tasks').then(response => response.json()).then(tasks => renderTasks(tasks));
    }

    // Add task
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        li.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
            // You'd also send a request to the backend to delete the task
        });

        taskList.appendChild(li);

        // You'd send a request to the backend to save the new task
    }

    loadTasks(); // Load existing tasks when the page loads
});
