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

