// const axios = require('axios');

let apiUrl = 'http://localhost:3000/users';

async function getData() {
  try {
    let res = await fetch('http://localhost:3000/users');

    // console.log(res);

    let response = await res.json();
    // console.log('response: ', response.users);
    showData(response.users);
    // appendData(response);
  } catch (err) {
    console.log(err);
  }
}
getData();
let table = document.getElementById('t_body');
async function showData(data) {
  console.log('DataUsers', data);

  data.map((el) => {
    let tr1 = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.innerHTML = el.name;
    let td2 = document.createElement('td');
    td2.innerHTML = el.email;
    let td3 = document.createElement('td');
    td3.innerHTML = el.father_name;
    let td4 = document.createElement('td');
    td4.innerHTML = el.mother_name;
    tr1.append(td1, td2, td3, td4);

    table.append(tr1);
  });
}

