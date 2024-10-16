const taskInput = document.getElementById('task-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

const alertModal = document.getElementById('alert-modal');
const alertMessage = document.getElementById('alert-message');
const alertOkBtn = document.getElementById('alert-ok-btn');
const confirmModal = document.getElementById('confirm-modal');
const confirmMessage = document.getElementById('confirm-message');
const confirmYesBtn = document.getElementById('confirm-yes-btn');
const confirmNoBtn = document.getElementById('confirm-no-btn');

function showAlert(message) {
    alertMessage.textContent = message;
    alertModal.style.display = 'flex';
}

function showConfirm(message, callback) {
    confirmMessage.textContent = message;
    confirmModal.style.display = 'flex';

    confirmYesBtn.onclick = () => {
        callback(true);
        confirmModal.style.display = 'none';
    };

    confirmNoBtn.onclick = () => {
        callback(false);
        confirmModal.style.display = 'none';
    };
}

alertOkBtn.onclick = () => {
    alertModal.style.display = 'none';
};

window.addEventListener('DOMContentLoaded', loadTasks);

addBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    const dueDate = dateInput.value;

    if (taskText === '' || dueDate === '') {
        showAlert('Please enter a task and a due date.');
        return;
    }

    const task = {
        text: taskText,
        date: dueDate,
        completed: false
    };

    saveTaskToLocalStorage(task);

    displayTask(task);

    taskInput.value = '';
    dateInput.value = '';
}

function displayTask(task) {
    const li = document.createElement('li');
    const today = new Date().toISOString().split('T')[0];

    li.innerHTML = `
        <span class="task">${task.text} (Due: ${task.date})</span>
        <button class="complete-btn">Complete</button>
        <button class="delete-btn">Delete</button>
    `;

    if (!task.completed && task.date < today) {
        li.classList.add('overdue');
    }

    if (task.completed) {
        li.classList.add('complete');
    }

    li.querySelector('.complete-btn').addEventListener('click', () => {
        showConfirm("Are you sure you want to mark this task as complete?", (confirmed) => {
            if (confirmed) {
                task.completed = true;
                updateTaskInLocalStorage(task);
                li.classList.add('complete');
                li.classList.remove('overdue');
            }
        });
    });

    li.querySelector('.delete-btn').addEventListener('click', () => {
        showConfirm("Are you sure you want to delete this task?", (confirmed) => {
            if (confirmed) {
                deleteTaskFromLocalStorage(task);
                li.remove();
            }
        });
    });

    taskList.appendChild(li);
}

function saveTaskToLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => displayTask(task));
}

function updateTaskInLocalStorage(updatedTask) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.map(task => task.text === updatedTask.text ? updatedTask : task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTaskFromLocalStorage(taskToDelete) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.text !== taskToDelete.text);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
