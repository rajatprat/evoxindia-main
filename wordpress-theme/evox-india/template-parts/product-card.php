<?php
/**
 * Product card.
 *
 * @package EVOX_India
 */
$tone = get_post_meta( get_the_ID(), '_evox_tone', true ) ?: 'obsidian';
$type = get_post_meta( get_the_ID(), '_evox_type', true ) ?: __( 'Professional equipment', 'evox-india' );
?>
<article <?php post_class( 'evox-product-card evox-tone-' . sanitize_html_class( $tone ) ); ?>>
	<div class="evox-product-card-copy"><p><?php echo esc_html( $type ); ?></p><h3><?php the_title(); ?></h3><span><?php echo esc_html( get_the_excerpt() ); ?></span><a href="<?php the_permalink(); ?>"><?php esc_html_e( 'Explore →', 'evox-india' ); ?></a></div>
	<?php if ( has_post_thumbnail() ) : the_post_thumbnail( 'evox-product' ); endif; ?>
</article>

