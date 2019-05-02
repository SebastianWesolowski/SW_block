const { __ } = wp.i18n;

import { edit } from './edit-content-block';
import { save } from './save-content-block';
import { MarkdownIcon } from './icons-content-block';

export const name = 'tinyblocks/content-block';

export const settings = {
	title: __( 'content-block', 'Artnova-Sebastian' ),
	description: __( 'Express yourself', 'Artnova-Sebastian' ),
	category: 'common',
	attributes: {
		textContent: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
		mediaID: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		},
		directionContent: {
			type: 'string',
			default: 'left',
		},
	},
	keywords: [
		__( 'faq', 'Artnova-Sebastian' ),
		__( 'qurestion', 'Artnova-Sebastian' ),
		__( 'autoautousa', 'Artnova-Sebastian' ),
	],
	icon: {
		background: '#ff0ff0',
		color: '#fff',
		src: <MarkdownIcon width={ 38 } height={ 30 } />,
	},
	edit,
	save,
	supports: {
		align: [ 'full' ],
	},
};
