<?php
/**
 * Product detail template.
 *
 * @package EVOX_India
 */
get_header();
while ( have_posts() ) :
	the_post();
	$type       = get_post_meta( get_the_ID(), '_evox_type', true );
	$eyebrow    = get_post_meta( get_the_ID(), '_evox_eyebrow', true );
	$statement  = get_post_meta( get_the_ID(), '_evox_statement', true );
	$tone       = get_post_meta( get_the_ID(), '_evox_tone', true ) ?: 'obsidian';
	$quick      = evox_pairs( get_post_meta( get_the_ID(), '_evox_quick_specs', true ) );
	$features   = evox_lines( get_post_meta( get_the_ID(), '_evox_features', true ) );
	$specs      = evox_pairs( get_post_meta( get_the_ID(), '_evox_specs', true ) );
?>
<main id="main">
	<section class="evox-product-hero evox-tone-<?php echo esc_attr( sanitize_html_class( $tone ) ); ?>">
		<div class="evox-product-orbit"></div>
		<div class="evox-shell evox-product-hero-grid">
			<div><a class="evox-back" href="<?php echo esc_url( get_post_type_archive_link( 'evox_product' ) ); ?>">← <?php esc_html_e( 'All products', 'evox-india' ); ?></a><p class="evox-kicker"><?php echo esc_html( $eyebrow ?: $type ); ?></p><h1><?php the_title(); ?></h1><?php if ( $statement ) : ?><h2><?php echo esc_html( $statement ); ?></h2><?php endif; ?><p><?php echo esc_html( get_the_excerpt() ); ?></p><div class="evox-actions"><a class="evox-button evox-button--red" href="<?php echo esc_url( evox_quote_url() ); ?>"><?php esc_html_e( 'Request a quote →', 'evox-india' ); ?></a><a href="tel:<?php echo esc_attr( preg_replace( '/\s+/', '', get_theme_mod( 'evox_phone', '+91 99906 96931' ) ) ); ?>"><?php esc_html_e( 'Talk to sales', 'evox-india' ); ?></a></div></div>
			<div class="evox-product-image"><?php if ( has_post_thumbnail() ) : the_post_thumbnail( 'evox-product' ); endif; ?></div>
		</div>
		<?php if ( $quick ) : ?><div class="evox-shell evox-quick-specs"><?php foreach ( $quick as $item ) : ?><div><strong><?php echo esc_html( $item[0] ); ?></strong><span><?php echo esc_html( $item[1] ); ?></span></div><?php endforeach; ?></div><?php endif; ?>
	</section>
	<section class="evox-product-overview"><div class="evox-shell evox-overview-grid"><div><p class="evox-kicker"><?php esc_html_e( 'Designed for the field', 'evox-india' ); ?></p><h2><?php esc_html_e( 'Everything you need.', 'evox-india' ); ?><br><?php esc_html_e( 'Nothing you don’t.', 'evox-india' ); ?></h2><?php the_content(); ?></div><div class="evox-feature-list"><?php foreach ( $features as $index => $feature ) : ?><article><span><?php echo esc_html( str_pad( (string) ( $index + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></span><h3><?php echo esc_html( $feature ); ?></h3></article><?php endforeach; ?></div></div></section>
	<?php if ( $specs ) : ?><section class="evox-specifications"><div class="evox-shell"><p class="evox-kicker evox-kicker--light"><?php esc_html_e( 'Technical overview', 'evox-india' ); ?></p><h2><?php esc_html_e( 'Specifications.', 'evox-india' ); ?></h2><div class="evox-spec-grid"><?php foreach ( $specs as $index => $spec ) : ?><div><span><?php echo esc_html( str_pad( (string) ( $index + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></span><p><?php echo esc_html( $spec[0] ); ?></p><strong><?php echo esc_html( $spec[1] ); ?></strong></div><?php endforeach; ?></div></div></section><?php endif; ?>
</main>
<?php endwhile; get_footer(); ?>
