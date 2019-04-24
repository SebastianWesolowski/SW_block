const { __ } = wp.i18n;

import Edit from './edit';
import { save } from './save';
import { MarkdownIcon } from './icons';

import pluginConsts from './plugin-consts';

export const name = 'tinyblocks-new/markdown';

export const settings = {
	title: __( `${ pluginConsts.pluginName }` + 'wp-example-block', 'tiny-pixel-new' ),
	description: __( 'Express yourself', 'tiny-pixel-new' ),
	category: 'common',
	keywords: [
		__( 'markdown', 'tiny-pixel-new' ),
		__( 'Tiny Pixel', 'tiny-pixel-new' ),
		__( 'code', 'tiny-pixel-new' ),
	],
	icon: {
		background: '#ddd',
		color: '#fff',
		src: <MarkdownIcon width={ 48 } height={ 48 } />,
	},
	edit: Edit,
	save,
	attributes: {
		markdownRendered: {
			type: 'string',
			source: 'html',
			selector: '.md__rendered',
		},
		markdownRaw: {
			type: 'string',
			source: 'text',
			selector: '.md__raw',
			default: '',
		},
	},
	supports: {
		align: [
			'full',
		],
	},
};
