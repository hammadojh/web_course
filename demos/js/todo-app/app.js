let todos = [];

function addTodo() {
    const input = document.getElementById('todoInput');
    const todoText = input.value.trim();
    
    if (todoText) {
        todos.push({ text: todoText, completed: false });
        input.value = '';
        renderTodos();
    }
}

function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="${todo.completed ? 'completed' : ''}" onclick="toggleTodo(${index})">${todo.text}</span>
            <button onclick="deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

// Initial render
renderTodos();