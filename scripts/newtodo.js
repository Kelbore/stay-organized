'use strict';

const selectEl = document.getElementById('selectEl');
const selectCategory = document.getElementById('selectCategory');
const selectUrgency = document.getElementById('selectUrgency');
const addBtn = document.getElementById('addBtn');
const userIdEl = document.getElementById('userIdEl');

fetch('http://localhost:8083/api/users').then((response) => response.json()).then((data) => {
    data.forEach(element => {
      const theOption = new Option(element.username, element.id);
      selectEl.appendChild(theOption);
    });
});

fetch('http://localhost:8083/api/categories').then((response) => response.json()).then((file) => {
    file.forEach(category => {
        const categoryOption = new Option(category.name, category.id);
        selectCategory.appendChild(categoryOption);
    });
});


    addBtn.addEventListener('click', () => {
        const addToDo = {
            userid: userIdEl.value,
            category: selectCategory.options[selectCategory.selectedIndex].textContent,
            description: document.getElementById('textareaEl').value,
            deadline: document.getElementById('deadlineEl').value,
            priority: selectUrgency.options[selectUrgency.selectedIndex].textContent
        }
        fetch('http://localhost:8083/api/todos', {
            method: 'POST',
            body: JSON.stringify(addToDo),
            headers: {'Content-type': 'application/json; charset=utf-8'}
        }).then((response) => response.json()).then((json) => {
        
        });
    });
   
