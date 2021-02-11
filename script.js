let generer = document.getElementById('generer'); // Le bouton pour generer un utilisateur
let name = document.getElementById('name'); // Le champs nom
let mail = document.getElementById('mail'); // Le champs adresse mail
let adress = document.getElementById('adress'); // Le champs adresse
let phone = document.getElementById('phone'); // Le numero de telephone
let img = document.getElementById('img'); // l'image

generer.addEventListener('click', function() {
  generer.innerHTML = 'Regénerer';
  // Requete ajax Pour recuperer les donnees
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      console.log(data.results);
      img.src = data.results[0].picture.large;
      name.innerHTML = `${data.results[0].name.first} 
      ${data.results[0].name.last}`;
      mail.innerHTML = data.results[0].email;
      adress.innerHTML = `${data.results[0].location.street.number} ${data.results[0].location.street.name}`;
      phone.innerHTML = data.results[0].phone;
    }
  });
});