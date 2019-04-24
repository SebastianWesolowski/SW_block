<?php
/**
 * Block gutenberg
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
 *
 * @package     sw-block
 *
 * @author      Sebastian Wesołowski
 * @license     MIT License
 */

add_action(
	'init', function () {
		wp_register_script(
			'tinyblocks-tiny-mde-js',
			plugin_dir_url( __FILE__ ) . 'dist/block.js',
			[
				'wp-element',
				'wp-i18n',
				'wp-blocks',
			],
			'',
			null,
			true
		);
		wp_register_style(
			'tinyblocks-tiny-mde-public-css',
			plugin_dir_url( __FILE__ ) . 'dist/block.css',
			[],
			null
		);
		register_block_type(
			'tinyblocks/markdown', [
				'editor_script' => 'tinyblocks-tiny-mde-js',
				'editor_style'  => 'tinyblocks-tiny-mde-public-css',
				'style'         => 'tinyblocks-tiny-mde-public-css',
			]
		);
	}
);
