import * as React from 'react';
import SplitText from 'react-pose-text';

namespace DynamicText {
	export interface Props {}

	export interface State {}
}

export default class DynamicText extends React.Component<
	DynamicText.Props,
	DynamicText.State
> {
	constructor(props) {
		super(props);
		this.state = {};
	}
	public static defaultProps = {};

	public render() {
		const charPoses = {
			enter: {
				x: '0%',
				opacity: 1,
				y: 0,
				delay: ({ charIndex }) => charIndex * 100
			},
			exit: {
				opacity: 0,
				x: '-100%',
				transition: { duration: 300 }
			}
		};
		return (
			<div className='wht-text'>
				<SplitText
					initialPose='exit'
					pose='enter'
					charPoses={charPoses}
				>
					Bienvenue BLABLABLBALBLA ALBLBALBLA BALBLABLA BLABLBALBLAB
					BLABLBA
				</SplitText>
			</div>
		);
	}
}
