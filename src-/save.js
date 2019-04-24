import { visibility } from './styled';

const { RawHTML } = wp.element;

export const save = ( {
	attributes: {
		markdownRaw,
		markdownRendered,
	},
} ) => (
	<div className="md__editor">
		<div className="md__rendered">
			<RawHTML>
				{ markdownRendered }
			</RawHTML>
		</div>
		<div className={ visibility.hidden }>
			<div className={ 'md__raw' }>
				{ markdownRaw }
			</div>
		</div>
	</div>
);
