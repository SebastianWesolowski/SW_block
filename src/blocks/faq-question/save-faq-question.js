const {	RichText } = wp.editor;
import { faqQuestion, Answer } from './styled-faq-question';
export const save = ( props ) => {
	return (
		<div className={ `js-faq__item ${ faqQuestion.item }` }>
			<div className={ `js-faq__question ${ faqQuestion.question }` }>
				<span>
					<svg className={ `js-faq__question-arrow ${ faqQuestion.arrowIcon }` }
						xmlns="http://www.w3.org/2000/svg"
						width="23px" height="14px">
						<path fillRule="evenodd" fill="rgb(130, 195, 255)"
							d="M11.500,13.406 L12.833,12.258 L22.897,3.570 L20.230,0.595 L11.500,8.136 L2.769,0.595 L0.102,3.570 L10.166,12.258 L11.500,13.406 Z" />
					</svg>
				</span>
				<div>
					<RichText.Content tagName="p" value={ props.attributes.contentQestion } />
				</div>
			</div>
			<div className={ `js-faq__answer ${ Answer.answer } ${ Answer.save }` }>
				<RichText.Content tagName="p" value={ props.attributes.contentAnswer } />
			</div>
		</div>
	);
};
