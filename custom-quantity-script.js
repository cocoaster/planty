document.addEventListener('DOMContentLoaded', function() {
    var minusButtons = document.querySelectorAll('.quantity-minus');
    var plusButtons = document.querySelectorAll('.quantity-plus');
    var submitButtons = document.querySelectorAll('.quantity-submit');

    minusButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            // Trouver le champ de quantité à partir du conteneur commun le plus proche
            var quantityField = button.closest('.quantity-controls').querySelector('.quantity-input');
            if (quantityField) {
                var currentValue = parseInt(quantityField.value, 10) || 0;
                if (currentValue > 0) {
                    quantityField.value = currentValue - 1;
                }
                else {
                    console.error('Le champ de quantité est introuvable.');
                }
            }
        });
    });

    plusButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            // Trouver le champ de quantité à partir du conteneur commun le plus proche
            var quantityField = button.closest('.quantity-controls').querySelector('.quantity-input');
            if (quantityField) {
                var currentValue = parseInt(quantityField.value, 10) || 0;
                quantityField.value = currentValue + 1;
            }
        });
    });

    submitButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            // Trouver le champ de quantité à partir du conteneur commun le plus proche
            var quantityField = button.closest('.quantity-controls').querySelector('.quantity-input');
            if (quantityField) {
                var fruitName = quantityField.name.replace('quantity_', '');
                var hiddenInput = document.querySelector('input[name="' + fruitName + '_quantity"]');
                if (hiddenInput) {
                    hiddenInput.value = quantityField.value;
                }
            }
        });
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     var submitButton = document.querySelector('.wpcf7-submit');

//     submitButton.addEventListener('click', function(event) {
//         var fruitData = collectFruitData(); // Implémentez cette fonction pour collecter les données des fruits
//         var fruitQuantitiesField = document.querySelector('input[name="fruit_quantities"]');

//         if (fruitQuantitiesField) {
//             fruitQuantitiesField.value = JSON.stringify(fruitData);
//         }
//     });
// });

// // Exemple d'une fonction pour collecter les données des fruits
// function collectFruitData() {
//     var data = {};
//     // Suppose que vos inputs de quantité ont une classe spécifique ou une structure identifiable
//     var inputs = document.querySelectorAll('.quantity-input');
//     inputs.forEach(function(input) {
//         var fruitName = input.getAttribute('data-fruit-name'); // Assurez-vous que chaque input a cet attribut
//         data[fruitName] = input.value;
//     });
//     return data;
// }
