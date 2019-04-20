<?php

/**
 * Plugin Name:      sw-block
 * Plugin URI:       https://github.com/sebastianwesolowski/sw-block
 * Description:      Gutenber block for bhp page
 * Version:          0.2
 * Author:           Sebastian Wesołowski
 * Author URI:       warsztatkodu.pl, wesolowski.dev
 * Text Domain:      sw-block
 * Domain Path:      /resources/lang
 * License:        	 MIT License
 * License URI:      http://opensource.org/licenses/MIT
 *
 * @package         sw-block
 */

// wp_register_script(
// 	'sw-block-js',
// 	plugin_dir_url(__FILE__) .'dist/block.js', 
// 	[
// 		'wp-element',
// 		'wp-i18n',
// 		'wp-blocks',
// 	],
// 	'',
// 	null,
// 	true
// );
// wp_register_style('sw-block-public-css', plugin_dir_url(__FILE__) . 'dist/block.css', array(), null);

// register_block_type('SW/block', array(
//     'editor_script' => 'sw-block-js',
//     'editor_style' => 'sw-block-public-css',
//     'style' => 'sw-block-public-css'
// ));


add_action(
    'init', function () {
        wp_register_script(
            'sw-block-js',
            plugin_dir_url(__FILE__) .'dist/block.js',
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
            'sw-block-public-css',
            plugin_dir_url(__FILE__) .'dist/block.css',
            [],
            null
        );
        register_block_type(
            'tinyblocks/markdown', [
                'editor_script' => 'sw-block-js',
                'editor_style'  => 'sw-block-public-css',
                'style'         => 'sw-block-public-css',
            ]
        );
    }
);
