const { __ } = wp.i18n;

import { edit } from './edit-faq-question';
import { save } from './save-faq-question';
import { MarkdownIcon } from './icons-faq-question';

export const name = 'tinyblocks/faq-question';

export const settings = {
	title: __( 'faq-question', 'Artnova-Sebastian' ),
	description: __( 'Express yourself', 'Artnova-Sebastian' ),
	category: 'common',
	attributes: {
		contentQestion: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
		contentAnswer: {
			type: 'array',
			source: 'children',
			selector: 'p',
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
