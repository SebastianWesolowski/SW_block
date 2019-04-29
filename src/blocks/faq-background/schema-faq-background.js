const { __ } = wp.i18n;

import { edit } from './edit-faq-background';
import { save } from './save-faq-background';
import { MarkdownIcon } from './icons-faq-background';

export const name = 'tinyblocks/faq-background';

export const settings = {
	title: __( 'faq-background', 'Artnova-Sebastian' ),
	description: __( 'Express yourself', 'Artnova-Sebastian' ),
	category: 'common',
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
