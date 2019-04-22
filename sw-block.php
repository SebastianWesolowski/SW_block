<?php
/**
 * Block gutenberg
 *
 * @package     sw-block
 * @author      Sebastian Wesołowski
 * @license     MIT License
 *
 * Plugin Name: sw-block
 * Plugin URI:  https://github.com/sebastianwesolowski/sw-block
 * Description: Gutenber block for bhp page
 * Version:     0.2
 * Author:      Sebastian Wesołowski
 * Author URI:  http://warsztatkodu.pl, http://wesolowski.dev
 * Text Domain: sw-block
 * Domain Path: /resources/lang
 * License:     MIT License
 * License URI: http://opensource.org/licenses/MIT
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
// Require once the Composer Autoload.
if ( file_exists( dirname( __FILE__ ) . '/vendor/autoload.php' ) ) {
	require_once dirname( __FILE__ ) . '/vendor/autoload.php';
}
/**
 * The code that runs during plugin activation
 */
function activate_gutenberg_blocks() {
	Inc\Base\Activate::activate();
}

register_activation_hook( __FILE__, 'activate_gutenberg_blocks' );
/**
 * The code that runs during plugin deactivation
 */
function deactivate_gutenberg_blocks() {
	Inc\Base\Deactivate::deactivate();
}

register_deactivation_hook( __FILE__, 'deactivate_gutenberg_blocks' );
/**
 * Initialize all the core classes of the plugin
 */
if ( class_exists( 'Inc\\Init' ) ) {
	Inc\Init::register();
}

wp_register_script( 'demo-block-js', plugin_dir_url( __FILE__ ) . 'dist/block.js', ['wp-element', 'wp-i18n', 'wp-blocks'], '', null, true );

wp_register_style( 'demo-block-public-css', plugin_dir_url( __FILE__ ) . 'dist/block.css', [], null );

add_action(
	'init', function () {
		wp_register_script( 'tinyblocks-tiny-mde-js', plugin_dir_url( __FILE__ ) . 'dist/block.js', ['wp-element', 'wp-i18n', 'wp-blocks'], '', null, true );
		wp_register_style( 'tinyblocks-tiny-mde-public-css', plugin_dir_url( __FILE__ ) . 'dist/block.css', [], null );
		register_block_type( 'tinyblocks/markdown', [
			'editor_script' => 'tinyblocks-tiny-mde-js',
			'editor_style'  => 'tinyblocks-tiny-mde-public-css',
			'style'         => 'tinyblocks-tiny-mde-public-css',
		]
		);
	}
);
