<?php
/**
 * Site footer.
 *
 * @package EVOX_India
 */
?>
<footer class="evox-footer">
	<div class="evox-shell">
		<div class="evox-footer-top">
			<div class="evox-footer-identity">
				<img src="<?php echo esc_url( evox_asset( 'evox-logo.png' ) ); ?>" alt="<?php esc_attr_e( 'EVOX India', 'evox-india' ); ?>">
				<p><?php esc_html_e( 'Professional communication technology,', 'evox-india' ); ?><br><?php esc_html_e( 'designed in India for the world.', 'evox-india' ); ?></p>
			</div>
			<div class="evox-origin"><span><?php esc_html_e( 'Proudly built in India', 'evox-india' ); ?></span><img src="<?php echo esc_url( evox_asset( 'make-in-india.png' ) ); ?>" alt="<?php esc_attr_e( 'Make in India', 'evox-india' ); ?>"></div>
		</div>
		<div class="evox-footer-links">
			<div><span><?php esc_html_e( 'Explore', 'evox-india' ); ?></span><a href="<?php echo esc_url( get_post_type_archive_link( 'evox_product' ) ); ?>"><?php esc_html_e( 'Products', 'evox-india' ); ?></a><a href="<?php echo esc_url( home_url( '/industries/' ) ); ?>"><?php esc_html_e( 'Industries', 'evox-india' ); ?></a><a href="<?php echo esc_url( home_url( '/about/' ) ); ?>"><?php esc_html_e( 'Our story', 'evox-india' ); ?></a></div>
			<div><span><?php esc_html_e( 'Support', 'evox-india' ); ?></span><a href="<?php echo esc_url( home_url( '/faq/' ) ); ?>"><?php esc_html_e( 'FAQ', 'evox-india' ); ?></a><a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>"><?php esc_html_e( 'Contact', 'evox-india' ); ?></a><a href="<?php echo esc_url( evox_quote_url() ); ?>"><?php esc_html_e( 'Get a quote', 'evox-india' ); ?></a></div>
			<div><span><?php esc_html_e( 'Connect', 'evox-india' ); ?></span><a href="tel:<?php echo esc_attr( preg_replace( '/\s+/', '', get_theme_mod( 'evox_phone', '+91 99906 96931' ) ) ); ?>"><?php echo esc_html( get_theme_mod( 'evox_phone', '+91 99906 96931' ) ); ?></a><a href="mailto:<?php echo esc_attr( get_theme_mod( 'evox_email', 'evoxindia@gmail.com' ) ); ?>"><?php echo esc_html( get_theme_mod( 'evox_email', 'evoxindia@gmail.com' ) ); ?></a><p><?php echo esc_html( get_theme_mod( 'evox_location', 'New Delhi · Mumbai' ) ); ?></p></div>
		</div>
		<div class="evox-footer-bottom">
			<span>© <?php echo esc_html( wp_date( 'Y' ) ); ?> EVOX Corporation</span>
			<div><a href="<?php echo esc_url( home_url( '/privacy-policy/' ) ); ?>"><?php esc_html_e( 'Privacy', 'evox-india' ); ?></a><a href="<?php echo esc_url( home_url( '/terms-of-service/' ) ); ?>"><?php esc_html_e( 'Terms', 'evox-india' ); ?></a></div>
		</div>
	</div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
