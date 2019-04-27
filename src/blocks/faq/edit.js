const { Component } = wp.element;
const { InnerBlocks } = wp.editor;
import { faq } from './styled';

import icons from './assets/faq-background.jpg';
import pluginConsts from '../../plugin-consts';

const divStyle = {
	backgroundImage: 'url(' + pluginConsts.srcDist + icons + ')',
};

console.log( pluginConsts.srcDist );
class Edit extends Component {
	render() {
		const {
			className,
			attributes,
		} = this.props;
		return (

			<div className={ faq.faq } style={ divStyle }>
				{ /* <img src={ pluginConsts.srcDist + icons } alt="logo" /> */ }
				<div className={ faq.faq__wrapper }>
					<div className={ faq.faq__title }>
						<span className={ faq.faq__img }>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="44px" height="40px">
								<path fillRule="evenodd" stroke="rgb(255, 255, 255)" strokeWidth="2px" strokeLinecap="butt" strokeLinejoin="miter" fill="none"
									d="M1.000,24.737 L1.000,6.886 C1.000,3.599 3.646,0.992 6.856,0.992 L36.140,0.992 C39.406,0.992 41.997,3.655 41.997,6.886 L41.997,24.737 C41.997,28.023 39.350,30.631 36.140,30.631 L16.092,30.631 L9.447,37.374 C9.053,37.770 8.489,37.997 7.926,37.997 C7.363,37.997 6.856,37.770 6.406,37.374 C5.955,36.977 5.730,36.354 5.730,35.730 L5.730,30.460 C3.027,29.950 1.000,27.570 1.000,24.737 ZM23.131,22.583 C23.131,22.074 22.737,21.677 22.230,21.677 L19.865,21.677 C19.358,21.677 18.964,22.074 18.964,22.583 L18.964,24.113 C18.964,24.623 19.358,25.020 19.865,25.020 L22.230,25.020 C22.737,25.020 23.131,24.623 23.131,24.113 L23.131,22.583 ZM15.360,11.136 C15.360,11.476 15.585,11.759 15.923,11.759 L18.570,11.816 C19.020,11.816 19.414,11.532 19.527,11.136 C19.640,10.796 19.809,10.512 20.034,10.286 C20.428,9.946 20.879,9.776 21.442,9.776 C22.117,9.776 22.681,10.003 23.019,10.399 C23.413,10.796 23.582,11.362 23.582,12.099 C23.582,12.779 23.413,13.346 23.075,13.913 C22.737,14.423 22.343,14.876 21.780,15.216 C20.710,15.953 19.977,16.633 19.527,17.256 C19.189,17.710 19.020,18.333 18.964,19.183 C18.907,19.580 19.245,19.863 19.640,19.863 L22.512,19.863 C22.850,19.863 23.131,19.636 23.187,19.296 C23.244,18.843 23.300,18.503 23.469,18.219 C23.638,17.823 24.032,17.426 24.539,17.086 C25.496,16.576 26.285,15.896 26.904,15.046 C27.524,14.196 27.805,13.232 27.805,12.156 C27.805,10.456 27.242,9.096 26.116,8.076 C24.990,7.056 23.413,6.546 21.442,6.546 C19.583,6.546 18.119,6.999 16.993,7.849 C15.979,8.586 15.472,9.719 15.360,11.136 Z" />
							</svg>
						</span>
						FAQ - Najczęściej zadawane pytania
						<div className={ className }>
							<InnerBlocks />
						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default Edit;
