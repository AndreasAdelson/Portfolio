import * as React from 'react';

import Header from './header';
import ImageCentrale from './imageCentrale';

namespace Acceuil {
	export interface Props {}

	export interface State {}
}

export default class Acceuil extends React.Component<
	Acceuil.Props,
	Acceuil.State
> {
	public static defaultProps = {};

	public render() {
		return (
			<div className='container-fluid px-0 mx-0'>
				<ImageCentrale>
					<Header></Header>
				</ImageCentrale>
			</div>
		);
	}
}
