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
            cell1.innerHTML = todo.description;
            const cell2 = row.insertCell(1);
            cell2.innerHTML = todo.deadline;
            const cell3 = row.insertCell(2);
            const link = document.createElement('a');
            link.text = 'See details';
            link.href = `./todo_details.html?id=${todo.id}`;
            cell3.appendChild(link);
        });
    });
    tableEl.style.display = 'table';
});