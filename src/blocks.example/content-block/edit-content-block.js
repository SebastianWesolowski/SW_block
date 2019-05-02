const {	RichText, MediaUpload, InspectorControls } = wp.editor;
const { Button, PanelBody, PanelRow } = wp.components;
const {	Fragment } = wp.element;

import { contentBlock } from './styled-content-block';
export const edit = ( props ) => {
	const {
		setAttributes,
		isSelected,
		className,
		attributes: { textContent, mediaID, mediaURL, directionContent },
	} = props;

	const onSelectImage = ( media ) => {
		setAttributes( {
			mediaURL: media.url,
			mediaID: media.id,
		} );
	};

	const onChangeContent = ( value ) => {
		setAttributes( { textContent: value } );
	};

	const setDirection = ( event ) => {
		const selected = event.target.querySelector( '#content-direction option:checked' );
		setAttributes( { directionContent: selected.value } );
		event.preventDefault();
	};

	const directionContentForm = () => {
		return (
			<form onSubmit={ setDirection }>
				<select id="content-direction" value={ directionContent } onChange={ setDirection }>
					<option value="right">po prawej</option>
					<option value="left">po lewej</option>
				</select>
			</form>
		);
	};

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Ustawienia bloku">
					<PanelRow>
						<label htmlFor="content-direction" >Układ treści:</label>
						{ directionContentForm() }
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div className={ contentBlock.row } data-direction={ directionContent } >

				{ /* { isSelected && ( directionContentForm() ) } */ }
				<div className={ `${ className } ${ contentBlock.text }` }>
					<RichText
						tagName="p"
						placeholder={ 'Wpisz opis' }
						onChange={ onChangeContent }
						value={ textContent }
					/>
				</div>
				<div className={ contentBlock.image }>
					<MediaUpload
						onSelect={ onSelectImage }
						allowedTypes="image"
						value={ mediaID }
						render={ ( { open } ) => (
							<Button className={ mediaID ? 'image-button' : 'button button-large' } onClick={ open }>
								{ ! mediaID ? 'Wgraj zdjęcie' : <img src={ mediaURL } alt={ 'wgrane zdjęcie treści' } /> }
							</Button>
						) }
					/>
				</div>
			</div>
		</Fragment>
	);
};
