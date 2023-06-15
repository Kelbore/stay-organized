'use strict';

const usersList = document.getElementById('usersList');
const tbody = document.querySelector('#todosTable tbody');
const tableEl = document.getElementById('todosTable');

fetch('http://localhost:8083/api/users').then((response) => response.json()).then((data) => {
    data.forEach((element) => {
        const theOption = new Option(element.username, element.id);
        usersList.appendChild(theOption);
    })
});

usersList.addEventListener('change', () => {
    tbody.innerHTML = '';
    const selectedUserId = usersList.options[usersList.selectedIndex].value;
    fetch(`http://localhost:8083/api/todos/byuser/${selectedUserId}`).then((response) => response.json()).then((user) => {
        user.forEach((todo) => {
            const row = tbody.insertRow(-1);
            
            const cell1 = row.insertCell(0);
            if(todo.completed === true) {
                cell1.innerHTML = 'Done';
            }
            else if(todo.completed === false) {
                cell1.innerHTML = 'X';
            }
            const cell2 = row.insertCell(1);
            cell2.innerHTML = todo.category;
            const cell3 = row.insertCell(2);
            cell3.innerHTML = todo.description;
            const cell4 = row.insertCell(3);
            cell4.innerHTML = todo.deadline;
            const cell5 = row.insertCell(4);
            cell5.innerHTML = todo.priority;
        });
    });
    tableEl.style.display = 'table';
});