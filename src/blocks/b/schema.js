const { __ } = wp.i18n;

import Edit from './edit';
import { save } from './save';
import { MarkdownIcon } from './icon-md';

import pluginConsts from './plugin-constsa';

export const name = 'tinyblocks/markdown';

export const settings = {
	title: __( 'asdawp-example-block', 'tiny-pixel' ),
  // title: __('Markdown', 'tiny-pixel'),
	description: __( 'sdExpress yourself', 'tiny-pixel' ),
	category: 'common',

  keywords: [
    __('markdowna',  'tiny-pixel'),
    __('Tiny Pixela', 'tiny-pixel'),
    __('codea', 'tiny-pixel'),
  ],
  icon: {
    background: '#000',
    color:      '#fff',
    src:        <MarkdownIcon width={48} height={48} />,
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
}
