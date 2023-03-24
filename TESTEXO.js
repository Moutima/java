fetch('https://votre-api.com', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({data: 'Ma donnée POST'})
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))

