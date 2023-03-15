function appelAPI() {
    fetch('https://exemple.com/api')
      .then(response => response.json())
      .then(data => {
        
        const donneesAPI = document.getElementById('donnees-api');
        donneesAPI.innerHTML = 'Les données de l\'API sont : ' + JSON.stringify(data);
      })
      .catch(error => console.error(error));
  }
  
  setInterval(appelAPI, 2000); 