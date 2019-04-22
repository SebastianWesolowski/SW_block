import { name, settings } from './schema';

const { registerBlockType } = wp.blocks;

registerBlockType( name, settings );

// const edit = () => {
//   return <div> ( ∙_∙)>⌐■-■ </div>;
// }
// const save = () => {
//   return <div> (⌐■_■) </div>;
// }
// registerBlockType('demo/block', {
//   title: "Hello World",
//   description: "A simple demonstration block",
//   icon: "admin-site",
//   category: "common",
//   edit,
//   save
// });
