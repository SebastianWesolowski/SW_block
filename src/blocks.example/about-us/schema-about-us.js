const { __ } = wp.i18n;

import { edit } from './edit-about-us';
import { save } from './save-about-us';
import { MarkdownIcon } from './icons-about-us';

export const name = 'dawid/about-us';

export const settings = {
	title: __( 'about-us', 'Dawid' ),
	description: __( 'Express yourself', 'Dawid' ),
	category: 'artnova-blocks',
	keywords: [
		__( 'o nas', 'Dawid' ),
		__( 'about-us', 'Dawid' ),
		__( 'autoautousa', 'Dawid' ),
	],
	icon: {
		background: '#666666',
		color: '#fff',
		src: <MarkdownIcon width={ 48 } height={ 48 } />,
	},
	attributes: {
		imageLink: {
			type: 'string',
			defaultImg: 'https://i.kym-cdn.com/entries/icons/original/000/000/091/TrollFace.jpg',
		},
	},
	supports: {
		align: [ 'full' ],
	},
	edit,
	save,
};
