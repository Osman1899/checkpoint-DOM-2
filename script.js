document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez les éléments color-box et change-color-btn
    var colorBox = document.getElementById('color-box');
    var changeColorBtn = document.getElementById('change-color-btn');
    
    // Implémentez une fonction pour générer une couleur aléatoire
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    
    // Ajoutez un écouteur d'événement au bouton change-color-btn
    changeColorBtn.addEventListener('click', function() {
      // Changez la couleur de fond de la boîte de couleur en une couleur aléatoire
      colorBox.style.backgroundColor = getRandomColor();
    });
  });
  