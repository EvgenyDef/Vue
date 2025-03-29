import './style.css';

const tasks = [];

function addTask() {
  const newTask = $('#new-task').val();
  if (newTask.trim() !== '') {
    tasks.push({ text: newTask, completed: false });
    const taskIndex = tasks.length - 1;

    const listItem = $('<li class="todo-item"></li>');
    listItem.data('index', taskIndex);
    
    const taskText = $('<span class="task-text"></span>').text(newTask);
    listItem.append(taskText);

    // Контейнер для кнопок
    const buttonsContainer = $('<div class="task-buttons"></div>');

    // Кнопка переименования
    const renameButton = $('<button class="rename-btn">✏️</button>');
    renameButton.on('click', (e) => {
      e.stopPropagation();
      const index = $(this).closest('.todo-item').data('index');
      const currentText = tasks[index].text;
      const newText = prompt('Введите новое название задачи:', currentText);
      
      if (newText && newText.trim() !== '') {
        tasks[index].text = newText.trim();
        $(this).closest('.todo-item').find('.task-text').text(newText.trim());
      }
    });

    // Кнопка удаления
    const deleteButton = $('<button class="delete-btn">❌</button>');
    deleteButton.on('click', (e) => {
      e.stopPropagation();
      const index = $(this).closest('.todo-item').data('index');
      tasks.splice(index, 1);
      $(this).closest('.todo-item').remove();
      
      // Обновляем индексы
      $('.todo-item').each((newIndex) => {
        $(this).data('index', newIndex);
      });
    });

    buttonsContainer.append(renameButton, deleteButton);
    listItem.append(buttonsContainer);

    listItem.on('click', () => {
      const index = $(this).data('index');
      tasks[index].completed = !tasks[index].completed;
      $(this).toggleClass('completed');
    });

    $('#todo-list').append(listItem);
    $('#new-task').val('');
  }
}

$('form').on('submit', (e) => {
  e.preventDefault();
  addTask();
});