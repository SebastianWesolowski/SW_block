const {	RichText } = wp.editor;
import { faqQuestion, Answer } from './styled-faq-question';
export const edit = ( props ) => {
	// const { className } = props;
	const { attributes: { contentQestion, contentAnswer }, setAttributes, className } = props;

	const onChangeContentQestion = ( newContent ) => {
		setAttributes( { contentQestion: newContent } );
	};

	const onChangeContentAnswer = ( newContent ) => {
		setAttributes( { contentAnswer: newContent } );
	};

	return (
		<div className={ faqQuestion.item }>
			<div className={ faqQuestion.question }>
				<span>
					<svg className={ faqQuestion.arrowIcon }
						xmlns="http://www.w3.org/2000/svg"
						width="23px" height="14px">
						<path fillRule="evenodd" fill="rgb(130, 195, 255)"
							d="M11.500,13.406 L12.833,12.258 L22.897,3.570 L20.230,0.595 L11.500,8.136 L2.769,0.595 L0.102,3.570 L10.166,12.258 L11.500,13.406 Z" />
					</svg>
				</span>
				<div className={ className }>
					<RichText
						tagName="p"
						className={ className }
						onChange={ onChangeContentQestion }
						value={ contentQestion }
					/>
				</div>
			</div>
			<div className={ `${ Answer.answer } ${ Answer.edit }` }>
				<div className={ className }>
					<RichText
						tagName="p"
						className={ className }
						onChange={ onChangeContentAnswer }
						value={ contentAnswer }
					/>
				</div>
			</div>
		</div>
	);
};
