const {	RichText } = wp.editor;
import { contentBlock } from './styled-content-block';
export const save = ( props ) => {
	const {
		attributes: { textContent, mediaURL, directionContent },
	} = props;

	return (

		<div className={ contentBlock.row } data-direction={ directionContent }>
			<div className={ contentBlock.text } >
				<RichText.Content
					tagName="p"
					value={ textContent }
				/>
			</div>
			<div className={ contentBlock.image }>
				<img src={ mediaURL } alt={ 'img form library' } />
			</div>
		</div>
	);
};
