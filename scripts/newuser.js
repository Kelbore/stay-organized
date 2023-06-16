'use strict';

const submitBtn = document.getElementById('submitBtn');
const nameEl = document.getElementById('nameEl');
const usernameEl = document.getElementById('usernameEl');
const passwordEl = document.getElementById('passwordEl');

submitBtn.addEventListener('click', () => {
    const addUser = {
        name: nameEl.value,
        username: usernameEl.value,
        password: passwordEl.value
    }
    fetch('http://localhost:8083/api/users', {
            method: 'POST',
            body: JSON.stringify(addUser),
            headers: {'Content-type': 'application/json; charset=utf-8'}
        }).then((response) => response.json()).then((json) => {
           console.log(addUser)
        });
});