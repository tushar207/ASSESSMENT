// Function to add a new todo item to the list
function addTodo() {
    // Get the input field and its value
    const newTodoInput = document.getElementById('newTodo');
    const newTodoValue = newTodoInput.value;

    // Check if the input is not empty
    if (newTodoValue.trim() !== '') {
        // Create a new list item element
        const newTodoItem = document.createElement('li');
        newTodoItem.textContent = newTodoValue;

        // Append the new todo item to the list
        const todoList = document.getElementById('todoList');
        todoList.appendChild(newTodoItem);

        // Store the updated todo list in a cookie
        updateTodoListInCookie();

        // Clear the input field after adding todo
        newTodoInput.value = '';
    }
}
// Function to update the todo list in a cookie
function updateTodoListInCookie() {
    const todoList = document.getElementById('todoList');
    
    // Get all the todo items in the list
    const todoItems = todoList.getElementsByTagName('li');

    // Create an array to store todo item texts
    const todoTexts = [];

    // Loop through each todo item and add its text to the array
    for (let i = 0; i < todoItems.length; i++) {
        todoTexts.push(todoItems[i].textContent);
    }

    // Convert the array to a JSON string
    const todoTextsJSON = JSON.stringify(todoTexts);

    // Store the JSON string in a cookie named 'todoList'
    document.cookie = 'todoList=' + encodeURIComponent(todoTextsJSON);
}

// Function to retrieve and display todo list from the cookie
function displayTodoListFromCookie() {
    const todoList = document.getElementById('todoList');
    
    // Get the value of the 'todoList' cookie
    const todoListCookie = document.cookie
        .split('; ')
        .find(cookie => cookie.startsWith('todoList='));

    // If the cookie is found, retrieve the todo items and display them
    if (todoListCookie) {
        const todoTextsJSON = decodeURIComponent(todoListCookie.split('=')[1]);
        const todoTexts = JSON.parse(todoTextsJSON);

        // Create a new list item for each todo text and append it to the list
        todoTexts.forEach(todoText => {
            const newTodoItem = document.createElement('li');
            newTodoItem.textContent = todoText;
            todoList.appendChild(newTodoItem);
        });
    }
}

// Attach event listener to the 'Add Todo' button
const addTodoBtn = document.getElementById('addTodoBtn');
addTodoBtn.addEventListener('click', addTodo);

// Display the todo list from the cookie when the page loads
displayTodoListFromCookie();