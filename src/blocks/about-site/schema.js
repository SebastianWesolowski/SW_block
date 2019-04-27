const { __ } = wp.i18n;

import Edit from './edit';
import { save } from './save';
import { MarkdownIcon } from './icons';

import pluginConsts from '../../plugin-consts';

export const name = 'tinyblocks/aboutsite';

export const settings = {
	title: __( `${ pluginConsts.pluginName }` + 'about-site', 'Artnova-Sebastian' ),
	description: __( 'Express yourself', 'Artnova-Sebastian' ),
	category: 'common',
	keywords: [
		__( 'o nas', 'Artnova-Sebastian' ),
		__( 'about-site', 'Artnova-Sebastian' ),
		__( 'autoautousa', 'Artnova-Sebastian' ),
	],
	icon: {
		background: '#666666',
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
