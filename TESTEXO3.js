function getRandomNumber() {
   
    fetch('api.php')
        .then(function(response) {
         
            return response.json();
        })
        .then(function(data) {
            
            document.getElementById('result').innerHTML = 'Le nombre aléatoire est : ' + data.randomNumber;
        })
        .catch(function(error) {
           
            document.getElementById('result').innerHTML = 'Erreur : ' + error.message;
        });
}