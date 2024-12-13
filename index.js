
const form = document.getElementById('create-task-form');
const inputField = document.getElementById('new-task-description');
const taskList = document.getElementById('tasks');

// Handle form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the page from reloading

  const taskDescription = inputField.value.trim(); // Get the value from  input field

  if (taskDescription !== '') {
    // Create a new list (task)
    const taskItem = document.createElement('li');
    taskItem.textContent = taskDescription;

    // Add a delete button to the task item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      taskList.removeChild(taskItem); // Remove the task item when clicked
    });

    // Append the delete button to the task item
    taskItem.appendChild(deleteButton);

    // Append the task item to the task list
    taskList.appendChild(taskItem);

    // Clear the input field after adding the task
    inputField.value = '';
  }
});

   