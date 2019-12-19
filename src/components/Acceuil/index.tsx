import * as React from 'react';

import DynamicText from './dynamicText';
import Header from './header';
import ImageCentrale from './imageCentrale';

namespace Acceuil {
	export interface Props {}

	export interface State {
		style: {};
	}
}

export default class Acceuil extends React.Component<
	Acceuil.Props,
	Acceuil.State
> {
	constructor(props) {
		super(props);
		this.state = {
			style: {}
		};
	}

	componentDidMount() {
		this.setState({
			style: {
				marginTop: document.documentElement.clientHeight / 2.5
			}
		});
	}
	public static defaultProps = {};

	public render() {
		return (
			<div className='container-fluid px-0 mx-0'>
				<ImageCentrale>
					<Header></Header>
					<div className='container' style={this.state.style}>
						<div className='row'>
							<div className='offset-3 col-8'>
								<DynamicText></DynamicText>
							</div>
						</div>
					</div>
				</ImageCentrale>
				{/* <div className='container'>
					<div className='row'>
						<div className='col-12'>Je suis un test</div>
					</div>
				</div> */}
			</div>
		);
	}
}
