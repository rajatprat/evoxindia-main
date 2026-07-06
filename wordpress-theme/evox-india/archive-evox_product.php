<?php
/**
 * Product archive.
 *
 * @package EVOX_India
 */
get_header();
?>
<main id="main">
	<section class="evox-inner-hero"><div class="evox-orbit-bg"></div><div class="evox-shell"><p class="evox-kicker evox-kicker--light"><?php esc_html_e( 'The EVOX collection', 'evox-india' ); ?></p><h1><?php esc_html_e( 'Built to keep', 'evox-india' ); ?><br><em><?php esc_html_e( 'teams moving.', 'evox-india' ); ?></em></h1><p><?php esc_html_e( 'Professional communication and recording tools considered down to the last control.', 'evox-india' ); ?></p></div></section>
	<section class="evox-products evox-archive-products"><div class="evox-shell"><div class="evox-product-grid"><?php if ( have_posts() ) : while ( have_posts() ) : the_post(); get_template_part( 'template-parts/product', 'card' ); endwhile; else : ?><p><?php esc_html_e( 'Add products from EVOX Products in wp-admin.', 'evox-india' ); ?></p><?php endif; ?></div></div></section>
</main>
<?php get_footer(); ?>

