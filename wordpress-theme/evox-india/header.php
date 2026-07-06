<?php
/**
 * Site header.
 *
 * @package EVOX_India
 */
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<a class="screen-reader-text" href="#main"><?php esc_html_e( 'Skip to content', 'evox-india' ); ?></a>
<header class="evox-header<?php echo is_front_page() || is_singular( 'evox_product' ) ? '' : ' evox-header--light'; ?>">
	<div class="evox-shell evox-nav">
		<div class="evox-wordmark">
			<?php if ( has_custom_logo() ) : the_custom_logo(); else : ?>
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" aria-label="<?php esc_attr_e( 'EVOX India home', 'evox-india' ); ?>">
				<img src="<?php echo esc_url( evox_asset( 'evox-logo.png' ) ); ?>" alt="<?php esc_attr_e( 'EVOX India', 'evox-india' ); ?>">
				</a>
			<?php endif; ?>
		</div>
		<nav class="evox-desktop-nav" aria-label="<?php esc_attr_e( 'Primary navigation', 'evox-india' ); ?>">
			<?php
			wp_nav_menu( array(
				'theme_location' => 'primary',
				'container'      => false,
				'fallback_cb'    => 'evox_default_menu',
				'items_wrap'     => '<ul>%3$s</ul>',
			) );
			?>
		</nav>
		<div class="evox-nav-actions">
			<a class="evox-call" href="tel:<?php echo esc_attr( preg_replace( '/\s+/', '', get_theme_mod( 'evox_phone', '+91 99906 96931' ) ) ); ?>" aria-label="<?php esc_attr_e( 'Call EVOX India', 'evox-india' ); ?>">☎</a>
			<a class="evox-button evox-button--red evox-nav-cta" href="<?php echo esc_url( evox_quote_url() ); ?>"><?php esc_html_e( 'Get a quote', 'evox-india' ); ?></a>
			<button class="evox-menu-toggle" type="button" aria-expanded="false" aria-controls="evox-mobile-menu"><span></span><span></span><span></span><span class="screen-reader-text"><?php esc_html_e( 'Toggle menu', 'evox-india' ); ?></span></button>
		</div>
	</div>
	<div class="evox-mobile-menu" id="evox-mobile-menu">
		<?php
		wp_nav_menu( array(
			'theme_location' => 'primary',
			'container'      => false,
			'fallback_cb'    => 'evox_default_menu',
			'items_wrap'     => '<ul>%3$s</ul>',
		) );
		?>
		<a href="<?php echo esc_url( evox_quote_url() ); ?>"><?php esc_html_e( 'Get a quote →', 'evox-india' ); ?></a>
	</div>
</header>
