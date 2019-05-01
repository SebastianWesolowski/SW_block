const { Component } = wp.element;
const { __ } = wp.i18n;
const {
	AlignmentToolbar,
	BlockControls,
	registerBlockType,
	InspectorControls,
} = wp.editor;

const {
	PanelBody,
	PanelRow,
} = wp.components;

const {
	Fragment,
} = wp.element;
import ExampleApplication from './component-about-us';
import { styles, buttonStyle } from './styled-about-us';

// class Edit extends Component {
//   constructor(props) {
// 		super(props);

// 		this.backgroundImage = {
// 			backgroundImage: `url( ${ 'https://picsum.photos/555/406/?random' } )`,
// 		};

//     // this.addBlock = this.addBlock.bind(this);
//     // this.handleValueChange = this.handleValueChange.bind(this);
// 	}

// 	render() {
export const edit = ( props ) => {
	const { attributes: { imageLink, defaultImg }, setAttributes } = props;

	function akceptLink( event ) {
		// const selected = React.findDOMNode(this.refs.cpDev1).value;
		// console.log(selected);
		// console.log(event);
		setAttributes( { imageLink: 'https://i.kym-cdn.com/entries/icons/original/000/000/091/TrollFace.jpg' } );
		event.preventDefault();
	}
	function RandomImage() {
		const src = imageLink;
		return <img src={ src } alt="" />;
	}
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={ __( 'Image Settings' ) }>
					<PanelRow>
						<label>Link obrazka</label>
						{ /* <input id="image-link" type="text" value={ imageLink } ref="cpDev1"/> */ }
						<button onClick={ akceptLink }>Wstaw link</button>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div className={ props.className }>
				<RandomImage />
			</div>
		</Fragment>
	);
};
// }

// export default Edit;

// {/* <div className={styles["about-us"]}>
// 	<div className={styles["about-us__row"]}>
// 		<div className={styles["about-us__text"]}>
// 			<p>
// 					Jesteśmy Amerykańską firmą specjalizującą się handlem aut z aukcji ubezpieczeniowych i wysyłką do europy głównie do Polski. Firma jest
// 					mocno związana z Lesniewski & Continental Shipping  NJ USA i Lesniewski Shipping Polska <a href="http://www.lesniewski.com">www.lesniewski.com</a>
// 					Ponad 20 lat doświadczenia  w wysyłce , ładujemy łodzie do kontenera  do 26 feet długie. Co daje nam możliwość najniższych cen wysyłki.
// 					<br/><br/>
// 					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
// 					inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
// 			</p>
// 		</div>
// 		<div className={styles["about-us__image"]} style={ this.backgroundImage }></div>
// 	</div>
// 	<div className={buttonStyle.container}>
// 	<span onClick={this.addBlock} className={buttonStyle.button}>Dodaj blok +</span>
// 	</div>
// 	<ExampleApplication/>
// </div> */}
// const createBlock = () => {
// 	const isReverseClass = checkIfReverse();
// 	<div className={[styles["about-us__row"], {isReverseClass}].join(' ')}>
// 		<div className={styles["about-us__text"]}>
// 			<p>
// 					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
// 					<br/><br/>
// 					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
// 			</p>
// 		</div>
// 		<div className={styles["about-us__image"]} onClick={handleClick} style={ backgroundImage }></div>
// 	</div>
// };
