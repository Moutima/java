
function mafunction(){
    alert("coucou");
}

var toto ="titi" 

function mafuction(){
    setTimeout( 5000);

    console.log("Ou etes vous ?");

}

function callback(){
    console.log("je suis ici !")
}



const btnRandom = document.getElementById('btnRandom');
const randomNumber = document.getElementById('randomNumber');

btnRandom.addEventListener('click', () => {
    fetch('random.php')
        .then(response => response.json())
        .then(data => {
            randomNumber.innerHTML = `Nombre aléatoire : ${data.randomNumber}`;
        });
});