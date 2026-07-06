<?php
/**
 * EVOX India theme setup.
 *
 * @package EVOX_India
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'EVOX_THEME_VERSION', '1.0.0' );

function evox_theme_setup() {
	load_theme_textdomain( 'evox-india', get_template_directory() . '/languages' );

	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'custom-logo', array(
		'height'      => 50,
		'width'       => 150,
		'flex-height' => true,
		'flex-width'  => true,
	) );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'align-wide' );
	add_theme_support( 'editor-styles' );
	add_editor_style( 'assets/css/editor.css' );

	register_nav_menus( array(
		'primary' => __( 'Primary navigation', 'evox-india' ),
		'footer'  => __( 'Footer navigation', 'evox-india' ),
	) );

	add_image_size( 'evox-product', 900, 1100, false );
}
add_action( 'after_setup_theme', 'evox_theme_setup' );

function evox_enqueue_assets() {
	wp_enqueue_style( 'evox-theme', get_template_directory_uri() . '/assets/css/theme.css', array(), EVOX_THEME_VERSION );
	wp_enqueue_script( 'evox-theme', get_template_directory_uri() . '/assets/js/theme.js', array(), EVOX_THEME_VERSION, true );
}
add_action( 'wp_enqueue_scripts', 'evox_enqueue_assets' );

function evox_register_product_type() {
	register_post_type( 'evox_product', array(
		'labels' => array(
			'name'          => __( 'EVOX Products', 'evox-india' ),
			'singular_name' => __( 'EVOX Product', 'evox-india' ),
			'add_new_item'  => __( 'Add EVOX Product', 'evox-india' ),
			'edit_item'     => __( 'Edit EVOX Product', 'evox-india' ),
		),
		'public'       => true,
		'menu_icon'    => 'dashicons-megaphone',
		'has_archive'  => 'products',
		'rewrite'      => array( 'slug' => 'products' ),
		'show_in_rest' => true,
		'supports'     => array( 'title', 'editor', 'excerpt', 'thumbnail', 'page-attributes' ),
	) );
}
add_action( 'init', 'evox_register_product_type' );

function evox_product_meta_boxes() {
	add_meta_box( 'evox-product-details', __( 'Product presentation', 'evox-india' ), 'evox_product_meta_box', 'evox_product', 'normal', 'high' );
}
add_action( 'add_meta_boxes', 'evox_product_meta_boxes' );

function evox_product_meta_box( $post ) {
	wp_nonce_field( 'evox_save_product_meta', 'evox_product_nonce' );
	$fields = array(
		'type'       => __( 'Product type', 'evox-india' ),
		'eyebrow'    => __( 'Hero eyebrow', 'evox-india' ),
		'statement'  => __( 'Hero statement', 'evox-india' ),
		'tone'       => __( 'Colour tone (obsidian, porcelain, signal, slate or sand)', 'evox-india' ),
		'quick_specs'=> __( 'Quick specs — one per line: Value | Label', 'evox-india' ),
		'features'   => __( 'Features — one per line', 'evox-india' ),
		'specs'      => __( 'Specifications — one per line: Label | Value', 'evox-india' ),
	);
	foreach ( $fields as $key => $label ) {
		$value = get_post_meta( $post->ID, '_evox_' . $key, true );
		echo '<p><label for="evox-' . esc_attr( $key ) . '"><strong>' . esc_html( $label ) . '</strong></label></p>';
		if ( in_array( $key, array( 'quick_specs', 'features', 'specs' ), true ) ) {
			echo '<textarea class="widefat" rows="5" id="evox-' . esc_attr( $key ) . '" name="evox_' . esc_attr( $key ) . '">' . esc_textarea( $value ) . '</textarea>';
		} else {
			echo '<input class="widefat" id="evox-' . esc_attr( $key ) . '" name="evox_' . esc_attr( $key ) . '" value="' . esc_attr( $value ) . '">';
		}
	}
}

function evox_save_product_meta( $post_id ) {
	if ( ! isset( $_POST['evox_product_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['evox_product_nonce'] ) ), 'evox_save_product_meta' ) ) {
		return;
	}
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}
	if ( ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}
	foreach ( array( 'type', 'eyebrow', 'statement', 'tone', 'quick_specs', 'features', 'specs' ) as $field ) {
		if ( isset( $_POST[ 'evox_' . $field ] ) ) {
			update_post_meta( $post_id, '_evox_' . $field, sanitize_textarea_field( wp_unslash( $_POST[ 'evox_' . $field ] ) ) );
		}
	}
}
add_action( 'save_post_evox_product', 'evox_save_product_meta' );

function evox_lines( $value ) {
	return array_values( array_filter( array_map( 'trim', preg_split( '/\r\n|\r|\n/', (string) $value ) ) ) );
}

function evox_pairs( $value ) {
	$pairs = array();
	foreach ( evox_lines( $value ) as $line ) {
		$parts = array_map( 'trim', explode( '|', $line, 2 ) );
		if ( 2 === count( $parts ) ) {
			$pairs[] = $parts;
		}
	}
	return $pairs;
}

function evox_asset( $filename ) {
	return get_template_directory_uri() . '/assets/images/' . ltrim( $filename, '/' );
}

function evox_default_menu() {
	echo '<ul>';
	echo '<li><a href="' . esc_url( home_url( '/about/' ) ) . '">' . esc_html__( 'Our story', 'evox-india' ) . '</a></li>';
	echo '<li><a href="' . esc_url( get_post_type_archive_link( 'evox_product' ) ) . '">' . esc_html__( 'Products', 'evox-india' ) . '</a></li>';
	echo '<li><a href="' . esc_url( home_url( '/industries/' ) ) . '">' . esc_html__( 'Industries', 'evox-india' ) . '</a></li>';
	echo '<li><a href="' . esc_url( home_url( '/contact/' ) ) . '">' . esc_html__( 'Support', 'evox-india' ) . '</a></li>';
	echo '</ul>';
}

function evox_customize_register( $customizer ) {
	$customizer->add_section( 'evox_contact', array(
		'title'    => __( 'EVOX contact details', 'evox-india' ),
		'priority' => 30,
	) );
	$settings = array(
		'phone'    => array( 'Phone', '+91 99906 96931' ),
		'email'    => array( 'Email', 'evoxindia@gmail.com' ),
		'location' => array( 'Locations', 'New Delhi · Mumbai' ),
		'quote_url'=> array( 'Quote page URL', '/get-quote/' ),
	);
	foreach ( $settings as $key => $data ) {
		$customizer->add_setting( 'evox_' . $key, array(
			'default'           => $data[1],
			'sanitize_callback' => 'quote_url' === $key ? 'esc_url_raw' : 'sanitize_text_field',
		) );
		$customizer->add_control( 'evox_' . $key, array(
			'label'   => $data[0],
			'section' => 'evox_contact',
			'type'    => 'text',
		) );
	}
}
add_action( 'customize_register', 'evox_customize_register' );

function evox_quote_url() {
	$url = get_theme_mod( 'evox_quote_url', '/get-quote/' );
	return preg_match( '#^https?://#i', $url ) ? $url : home_url( $url );
}

function evox_body_classes( $classes ) {
	if ( is_front_page() ) {
		$classes[] = 'evox-front-page';
	}
	return $classes;
}
add_filter( 'body_class', 'evox_body_classes' );
