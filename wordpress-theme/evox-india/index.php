<?php
/**
 * Default index template.
 *
 * @package EVOX_India
 */
get_header();
?>
<main id="main" class="evox-page">
	<section class="evox-inner-hero"><div class="evox-orbit-bg"></div><div class="evox-shell"><p class="evox-kicker evox-kicker--light"><?php bloginfo( 'name' ); ?></p><h1><?php single_post_title(); ?></h1></div></section>
	<div class="evox-shell evox-content">
		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
			<article <?php post_class( 'evox-entry' ); ?>><h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2><?php the_excerpt(); ?></article>
		<?php endwhile; the_posts_pagination(); else : ?><p><?php esc_html_e( 'Nothing found.', 'evox-india' ); ?></p><?php endif; ?>
	</div>
</main>
<?php get_footer(); ?>

