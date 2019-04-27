const { __ } = wp.i18n;

import Edit from './edit';
import { save } from './save';
import { MarkdownIcon } from './icons';

export const name = 'dawid/bicycle-import';

export const settings = {
	title: __( 'bicycle-import', 'Dawid' ),
	description: __( 'Express yourself', 'Dawid' ),
	category: 'artnova-blocks',
	keywords: [
		__( 'o nas', 'Dawid' ),
		__( 'bicycle-import', 'Dawid' ),
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
