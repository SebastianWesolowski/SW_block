const { __ } = wp.i18n;

import Edit from './edit-about-site';
import { save } from './save-about-site';
import { MarkdownIcon } from './icons-about-site';

export const name = 'sebastian/about-site';

export const settings = {
	title: __( 'about-site', 'Artnova-Sebastian' ),
	description: __( 'Express yourself', 'Artnova-Sebastian' ),
	category: 'common',
	keywords: [
		__( 'o nas', 'Artnova-Sebastian' ),
		__( 'about-site', 'Artnova-Sebastian' ),
		__( 'autoautousa', 'Artnova-Sebastian' ),
	],
	icon: {
		background: '#0085ba',
		color: '#fff',
		src: <MarkdownIcon width={ 38 } height={ 30 } />,
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
		align: [ 'full' ],
	},
};
