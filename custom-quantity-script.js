document.addEventListener('DOMContentLoaded', function() {
    var minusButtons = document.querySelectorAll('.quantity-minus');
    var plusButtons = document.querySelectorAll('.quantity-plus');

    // Fonction pour mettre à jour les champs cachés
    function updateHiddenFields(quantityField) {
        var fruitName = quantityField.getAttribute('id').replace('quantity_', '');
        var hiddenInput = document.querySelector('#' + fruitName + '-quantity');
        if (hiddenInput) {
            hiddenInput.value = quantityField.value;
        }
    }

    minusButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            var quantityField = button.closest('.quantity-controls').querySelector('.quantity-input');
            if (quantityField) {
                var currentValue = parseInt(quantityField.value, 10) || 0;
                if (currentValue > 0) {
                    quantityField.value = currentValue - 1;
                    updateHiddenFields(quantityField); // Met à jour le champ caché
                }
            }
        });
    });

    plusButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            var quantityField = button.closest('.quantity-controls').querySelector('.quantity-input');
            if (quantityField) {
                var currentValue = parseInt(quantityField.value, 10) || 0;
                quantityField.value = currentValue + 1;
                updateHiddenFields(quantityField); // Met à jour le champ caché
            }
        });
    });
});




