import { name, settings } from './schema-about-site';
const { registerBlockType } = wp.blocks;

registerBlockType(name, settings);
