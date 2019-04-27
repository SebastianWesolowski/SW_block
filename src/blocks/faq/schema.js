const { __ } = wp.i18n;

import Edit from './edit';
import { save } from './save';
import { MarkdownIcon } from './icons';

import pluginConsts from '../../plugin-consts';

export const name = 'tinyblocks/faq';

export const settings = {
	title: __( `${ pluginConsts.pluginName }` + 'faq', 'Artnova-Sebastian' ),
	description: __( 'Express yourself', 'Artnova-Sebastian' ),
	category: 'common',
	keywords: [
		__( 'faq', 'Artnova-Sebastian' ),
		__( 'qurestion', 'Artnova-Sebastian' ),
		__( 'autoautousa', 'Artnova-Sebastian' ),
	],
	icon: {
		background: '#dddddd',
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
