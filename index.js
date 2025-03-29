import './style.css';

const tasks = [];

function addTask() {
  const newTaskInput = document.getElementById('new-task');
  const newTask = newTaskInput.value;
  if (newTask.trim() !== '') {
    tasks.push({ task: newTask, completed: false });
    const taskIndex = tasks.length - 1;

    const listItem = document.createElement('li');
    listItem.className = 'todo-item';
    listItem.dataset.index = taskIndex;
    
    // Элемент с текстом задачи
    const taskNameElement = document.createElement('span');
    taskNameElement.innerText = newTask;
    listItem.appendChild(taskNameElement);

    // Контейнер для кнопок (думаю, так правильно)
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'task-buttons';

    // Кнопка переименования задачи
    const renameButton = document.createElement('button');
    renameButton.innerHTML = '✏';
    renameButton.addEventListener('click', (e) => {
      e.stopPropagation();
      renameTask(taskIndex, taskNameElement);
    });
    buttonsContainer.appendChild(renameButton);
    
    // кнопка удалени задачи
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '❌';
    deleteButton.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteTask(taskIndex);
    });
    buttonsContainer.appendChild(deleteButton);

    listItem.appendChild(buttonsContainer);

    // Обработчик для отметки выполнения
    listItem.addEventListener('click', () => {
      tasks[taskIndex].completed = !tasks[taskIndex].completed;
      listItem.classList.toggle('completed');
    });

    document.getElementById('todo-list').appendChild(listItem);
    newTaskInput.value = '';
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  const taskElement = document.querySelector(`li[data-index="${index}"]`);
  if (taskElement) {
    taskElement.remove();
  }
  
  const remainingTasks = document.querySelectorAll('.todo-item');
  remainingTasks.forEach((task, newIndex) => {
    task.dataset.index = newIndex;
  });
}

function renameTask(index, taskNameElement) {
  const currentTask = tasks[index];
  const newName = prompt('Введите новое название задачи:', currentTask.task);
  
  if (newName && newName.trim() !== '') {
    tasks[index].task = newName.trim();
    taskNameElement.innerText = newName.trim();
  }
}

document.querySelector('form').onsubmit = (e) => {
  e.preventDefault();
  addTask();
};