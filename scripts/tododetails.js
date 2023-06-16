'use strict';

const params = new URLSearchParams(location.search);
const id = params.get('id');

const tbody = document.querySelector('#detailsTable tbody');
const markBtn = document.getElementById('markBtn');

fetch(`http://localhost:8083/api/todos/${id}`).then((response) => response.json()).then((data) => {
    const row = tbody.insertRow(-1);

    const cell1 = row.insertCell(0);
    if(data.completed === false) {
    cell1.innerHTML = 'X';
    }
    if(data.completed === true) {
        cell1.innerHTML = 'Done';
        markBtn.style.display = none;
        }
        
    const cell2 = row.insertCell(1);
    cell2.innerHTML = data.category;
    const cell3 = row.insertCell(2);
    cell3.innerHTML = data.priority;

    document.getElementById('detailsTable').style.display = 'table';
});

// need more clarification how to set completed to true
/* markBtn.addEventListener('click', () => {
    
    fetch(`http://localhost:8083/api/todos/${id}`, {
        method: 'PUT',
        headers: {'Content-type': 'application/json; charset=utf-8'}
    });
}); */