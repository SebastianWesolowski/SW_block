import React from 'react';

class ExampleApplication extends React.Component {
	constructor( props ) {
		super( props );
		this.mainHtml = [
			<div> main Html </div>,
		];
		this.state = {
			mainHtml: this.mainHtml,
		};
		this.appendHtml = this.appendHtml.bind( this );
		this.prependHtml = this.prependHtml.bind( this );
	}

	appendHtml() {
		this.mainHtml.push( <div> appended HTML</div> );
		this.setState( {
			mainHtml: this.mainHtml,
		} );
	}

	prependHtml() {
		this.mainHtml.unshift( <div> prepended HTML</div> );
		this.setState( {
			mainHtml: this.mainHtml,
		} );
	}

	render() {
		return (
			<div>
				{ this.state.mainHtml }
			</div>
		);
	}
}

ExampleApplication.propTypes = {
};

ExampleApplication.defaultProps = {
};

export default ExampleApplication;
