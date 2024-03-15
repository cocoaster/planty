<?php
/**
 * Personnalisation du pied de page.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Sécurité : exit si accédé directement.
}
?>

    </div><!-- Fermeture du contenu principal -->
</div><!-- Fermeture du conteneur principal -->

<footer id="site-footer" role="contentinfo">
    <div class="footer-content">
        <p>Mentions légales</p>
        <!-- Ajoutez votre HTML personnalisé ici -->
    </div>
</footer>

<?php 
wp_footer(); // Ne pas supprimer : charge les scripts WordPress et les fermetures de balises nécessaires.
?>

</body>
</html>
