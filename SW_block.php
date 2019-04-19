<?php

/**
 * Plugin Name:      SW_block
 * Plugin URI:       https://github.com/sebastianwesolowski/sw_block
 * Description:      Gutenber block for bhp page
 * Version:          0.2
 * Author:           Sebastian Wesołowski
 * Author URI:       warsztatkodu.pl, wesolowski.dev
 * Text Domain:      SW_block
 * Domain Path:      /resources/lang
 * License:          MIT
 * License URI:      http://opensource.org/licenses/MIT
 *
 * @package         SW_block
 */

wp_register_script('SW_block-js', plugin_dir_url(__FILE__) . 'dist/block.js', array(
    'wp-element',
    'wp-i18n',
    'wp-blocks'
), '', null, true);

wp_register_style('SW_block-public-css', plugin_dir_url(__FILE__) . 'dist/block.css', array(), null);

register_block_type('SW/block', array(
    'editor_script' => 'SW_block-js',
    'editor_style' => 'SW_block-public-css',
    'style' => 'SW_block-public-css'
));
