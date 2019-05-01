import { name, settings } from './schema-about-us';
const { registerBlockType } = wp.blocks;

registerBlockType( name, settings );
