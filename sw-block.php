<?php
/**
 * Block gutenberg
 *
 * @package     sw-block
 * @author      Sebastian Wesołowski
 * @license     MIT License
 *
 * Plugin Name: SW Block
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
