const { __ } = wp.i18n;

import Edit from './edit-other-auctions';
import { save } from './save-other-auctions';
import { MarkdownIcon } from './icons-other-auctions';

export const name = 'dawid/other-auctions';

export const settings = {
	title: __( 'other-auctions', 'Dawid' ),
	description: __( 'Express yourself', 'Dawid' ),
	category: 'artnova-blocks',
	keywords: [
		__( 'o nas', 'Dawid' ),
		__( 'other-auctions', 'Dawid' ),
		__( 'autoautousa', 'Dawid' ),
	],
	icon: {
		background: '#666666',
		color: '#fff',
		src: <MarkdownIcon width={ 48 } height={ 48 } />,
	},
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
	edit: Edit,
	save,
};
