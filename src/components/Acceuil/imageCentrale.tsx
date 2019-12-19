import * as React from 'react';

namespace ImageCentrale {
	export interface Props {}

	export interface State {
		style: {};
	}
}

export default class ImageCentrale extends React.Component<
	ImageCentrale.Props,
	ImageCentrale.State
> {
	constructor(props) {
		super(props);
		this.state = { style: {} };
	}
	componentDidMount() {
		this.setState({
			style: {
				minHeight: document.documentElement.clientHeight,
				minWidth: document.documentElement.clientWidth
			}
		});
	}
	public render() {
		return (
			<div className='container-fluid px-0 mx-0'>
				<div className='imageCentrale' style={this.state.style}>
					{this.props.children}
				</div>
			</div>
		);
	}
}
