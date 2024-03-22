<?php

// Action qui permet de charger des scripts dans notre thème
add_action('wp_enqueue_scripts', 'theme_enqueue_styles');
function theme_enqueue_styles(){
    // Chargement du style.css du thème parent Hello
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('theme-style', get_stylesheet_directory_uri() . '/css/theme.css', array(), filemtime(get_stylesheet_directory() . '/css/theme.css'));
}


function insert_image_with_quantity_button($atts) {
    $atts = shortcode_atts(array(
        'name' => 'fruit',
        'image_url' => '',
    ), $atts, 'fruit_quantity');

    // Génération du HTML avec des classes pour la personnalisation via CSS
    $html = '<div class="fruit-quantity-block">';
    $html .= '<div class="fruit-image-container">';
    $html .= '<img src="' . esc_url($atts['image_url']) . '" alt="' . esc_attr($atts['name']) . '" class="fruit-image">';

     // Vérifiez si le nom est 'framboise' ou 'pamplemousse' et modifiez l'affichage en conséquence
     if ($atts['name'] === 'framboise') {
        $html .= '<div class="fruit-name">fram<br>boise</div>';
    } elseif ($atts['name'] === 'pamplemousse') {
        $html .= '<div class="fruit-name">pample<br>mousse</div>';
    } else {
        $html .= '<div class="fruit-name">' . esc_html($atts['name']) . '</div>';
    }

    $html .= '</div>'; // Fin de .fruit-image-container

    $html .= '<div class="quantity-controls">';
    $html .= '<input type="number" id="quantity_' . esc_attr($atts['name']) . '" name="quantity_' . esc_attr($atts['name']) . '" class="quantity-input" min="0" value="0">'; // Valeur par défaut à 0
    $html .= '<div class="quantity-buttons">';
    $html .= '<button type="button" class="quantity-change quantity-plus">+</button>';
    $html .= '<button type="button" class="quantity-change quantity-minus">-</button>';
    $html .= '</div>';
    $html .= '<button type="button" class="quantity-submit">OK</button>';
    $html .= '</div>';
    $html .= '</div>';

    return $html;
}




// Enregistrement du shortcode
add_shortcode('fruit_quantity', 'insert_image_with_quantity_button');

// Fonction pour mettre en file d'attente le script JavaScript personnalisé
function enqueue_custom_script() {
    wp_enqueue_script('custom-quantity-script', get_stylesheet_directory_uri() . '/custom-quantity-script.js', array(), null, true);
}

add_action('wp_enqueue_scripts', 'enqueue_custom_script');

   