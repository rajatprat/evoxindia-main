<?php
/**
 * Front page.
 *
 * @package EVOX_India
 */
get_header();
$products = new WP_Query( array(
	'post_type'      => 'evox_product',
	'posts_per_page' => 4,
	'orderby'        => array( 'menu_order' => 'ASC', 'date' => 'DESC' ),
) );
?>
<main id="main">
	<section class="evox-hero">
		<div class="evox-glow"></div>
		<div class="evox-shell evox-hero-grid">
			<div class="evox-hero-copy">
				<p class="evox-eyebrow"><span></span><?php esc_html_e( 'Professional communication, refined.', 'evox-india' ); ?></p>
				<h1><?php esc_html_e( 'Stay heard.', 'evox-india' ); ?><br><em><?php esc_html_e( 'Stay ahead.', 'evox-india' ); ?></em></h1>
				<p><?php esc_html_e( 'Mission-ready radios and body cameras engineered for clear decisions, tough environments and long days in the field.', 'evox-india' ); ?></p>
				<div class="evox-actions">
					<a class="evox-button evox-button--red" href="<?php echo esc_url( get_post_type_archive_link( 'evox_product' ) ); ?>"><?php esc_html_e( 'Explore products →', 'evox-india' ); ?></a>
					<a class="evox-text-link" href="<?php echo esc_url( evox_quote_url() ); ?>"><?php esc_html_e( 'Talk to an expert →', 'evox-india' ); ?></a>
				</div>
				<div class="evox-trust"><span>ISO 9001:2015</span><span><?php esc_html_e( 'License-free solutions', 'evox-india' ); ?></span><span><?php esc_html_e( 'Made for India', 'evox-india' ); ?></span></div>
			</div>
			<div class="evox-hero-visual">
				<div class="evox-orbit evox-orbit--one"></div><div class="evox-orbit evox-orbit--two"></div><div class="evox-halo"></div>
				<img src="<?php echo esc_url( evox_asset( 'x1-pro.png' ) ); ?>" alt="<?php esc_attr_e( 'EVOX X1 Pro professional radio', 'evox-india' ); ?>">
				<div class="evox-spec evox-spec--one"><strong>4500mAh</strong><span><?php esc_html_e( 'long-life battery', 'evox-india' ); ?></span></div>
				<div class="evox-spec evox-spec--two"><strong><?php esc_html_e( 'Advanced', 'evox-india' ); ?></strong><span><?php esc_html_e( 'noise control', 'evox-india' ); ?></span></div>
			</div>
		</div>
	</section>

	<section class="evox-statement">
		<div class="evox-shell">
			<p class="evox-kicker"><?php esc_html_e( 'Built around the mission', 'evox-india' ); ?></p>
			<h2><?php esc_html_e( 'Technology should disappear.', 'evox-india' ); ?><br><span><?php esc_html_e( 'Confidence should remain.', 'evox-india' ); ?></span></h2>
			<p><?php esc_html_e( 'Every EVOX device is designed to reduce friction between your team and the work that matters—from the first push-to-talk to the final hour of a demanding shift.', 'evox-india' ); ?></p>
		</div>
	</section>

	<section class="evox-products">
		<div class="evox-shell">
			<div class="evox-section-heading"><div><p class="evox-kicker"><?php esc_html_e( 'The EVOX lineup', 'evox-india' ); ?></p><h2><?php esc_html_e( 'Choose your edge.', 'evox-india' ); ?></h2></div><a href="<?php echo esc_url( get_post_type_archive_link( 'evox_product' ) ); ?>"><?php esc_html_e( 'View all products →', 'evox-india' ); ?></a></div>
			<div class="evox-product-grid">
				<?php if ( $products->have_posts() ) : ?>
					<?php while ( $products->have_posts() ) : $products->the_post(); get_template_part( 'template-parts/product', 'card' ); endwhile; wp_reset_postdata(); ?>
				<?php else : ?>
					<?php
					$defaults = array(
						array( 'X1 Pro', 'Professional Radio', 'Clearer calls. Longer shifts. Built for people who cannot afford to lose contact.', 'x1-pro.png', 'obsidian' ),
						array( 'X1 Mini', 'Body Camera', 'A compact witness with HD recording, infrared vision and all-day endurance.', 'x1-mini.png', 'porcelain' ),
						array( 'EVOX Ultra', 'Rugged Radio', 'Purpose-built communication for demanding sites and unpredictable conditions.', 'evox-ultra.png', 'signal' ),
						array( 'XC-19', 'Security Camera', 'Reliable visual intelligence in a compact, field-ready form.', 'xc19.png', 'slate' ),
					);
					foreach ( $defaults as $index => $product ) :
					?>
						<article class="evox-product-card evox-tone-<?php echo esc_attr( $product[4] ); ?>"><div class="evox-product-card-copy"><p><?php echo esc_html( $product[1] ); ?></p><h3><?php echo esc_html( $product[0] ); ?></h3><span><?php echo esc_html( $product[2] ); ?></span><a href="<?php echo esc_url( get_post_type_archive_link( 'evox_product' ) ); ?>"><?php esc_html_e( 'Explore →', 'evox-india' ); ?></a></div><b>0<?php echo esc_html( $index + 1 ); ?></b><img src="<?php echo esc_url( evox_asset( $product[3] ) ); ?>" alt="<?php echo esc_attr( $product[0] ); ?>"></article>
					<?php endforeach; ?>
				<?php endif; ?>
			</div>
		</div>
	</section>

	<section class="evox-engineering">
		<div class="evox-shell evox-engineering-grid"><div><p class="evox-kicker evox-kicker--light"><?php esc_html_e( 'Engineered to endure', 'evox-india' ); ?></p><h2><?php esc_html_e( 'Ready before', 'evox-india' ); ?><br><?php esc_html_e( 'you are.', 'evox-india' ); ?></h2><p><?php esc_html_e( 'From crowded venues to exposed worksites, EVOX is built around the realities of professional use.', 'evox-india' ); ?></p></div><div class="evox-feature-list"><article><span>01</span><h3><?php esc_html_e( 'Field-ready construction', 'evox-india' ); ?></h3><p><?php esc_html_e( 'Confident handling, durable materials and dependable performance.', 'evox-india' ); ?></p></article><article><span>02</span><h3><?php esc_html_e( 'Immediate communication', 'evox-india' ); ?></h3><p><?php esc_html_e( 'Simple controls and crisp audio keep teams moving.', 'evox-india' ); ?></p></article><article><span>03</span><h3><?php esc_html_e( 'Endurance by design', 'evox-india' ); ?></h3><p><?php esc_html_e( 'High-capacity batteries engineered around real shifts.', 'evox-india' ); ?></p></article></div></div>
	</section>

	<section class="evox-cta"><div class="evox-shell evox-cta-grid"><div><p class="evox-kicker evox-kicker--light"><?php esc_html_e( 'Let’s equip your team', 'evox-india' ); ?></p><h2><?php esc_html_e( 'Communication,', 'evox-india' ); ?><br><?php esc_html_e( 'without compromise.', 'evox-india' ); ?></h2></div><div><p><?php esc_html_e( 'Tell us about your environment. We’ll help you choose the right EVOX solution.', 'evox-india' ); ?></p><a class="evox-button evox-button--white" href="<?php echo esc_url( evox_quote_url() ); ?>"><?php esc_html_e( 'Get a tailored quote →', 'evox-india' ); ?></a></div></div></section>
</main>
<?php get_footer(); ?>
