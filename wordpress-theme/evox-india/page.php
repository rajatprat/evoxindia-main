<?php
/**
 * Standard page template.
 *
 * @package EVOX_India
 */
get_header();
?>
<main id="main" class="evox-page">
	<?php while ( have_posts() ) : the_post(); ?>
		<section class="evox-inner-hero"><div class="evox-orbit-bg"></div><div class="evox-shell"><p class="evox-kicker evox-kicker--light"><?php esc_html_e( 'EVOX India', 'evox-india' ); ?></p><h1><?php the_title(); ?></h1><?php if ( has_excerpt() ) : ?><p><?php echo esc_html( get_the_excerpt() ); ?></p><?php endif; ?></div></section>
		<article class="evox-shell evox-content evox-prose"><?php the_content(); ?></article>
	<?php endwhile; ?>
</main>
<?php get_footer(); ?>

