let elem = document.getElementById('t_body');
let url = 'http://localhost:3000';
// fetch(url).then(response => {
//     if(!response.ok) {
//         throw new Error(`HTTP error: ${response.status}`);

//     }
//     console.log(response.data);
//     return response.data()
//     .then(data => elem.textContent = data)
//     .catch(error => elem.textContent = `Could not fetch: ${error}`);
// })

// getData();
function getData() {
  fetch('http://localhost:3000/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain',
    },
  }).then(function (response) {
    return response;
  });
}

// const getData = async () => {
//   try {
//     const response = await axios.get(`${url}/users`);
//     const data = response.data;
//     console.log('UserDetails', data);

//     return data;
//   } catch (errors) {
//     console.log(errors);
//   }
// };
getData();
