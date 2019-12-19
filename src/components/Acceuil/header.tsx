import * as React from 'react';

namespace Header {
	export interface Props {
		style?: {};
	}

	export interface State {}
}

export default class Header extends React.Component<
	Header.Props,
	Header.State
> {
	public render() {
		console.log(this.props);
		return (
			<div className='container-fluid px-0 mx-0'>
				<nav className='topnav navbar navbar-expand-lg bg-red'>
					<a className='navbar-brand' href='#'>
						Navbar
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>

					<div
						className='collapse navbar-collapse'
						id='navbarSupportedContent'
					>
						<ul className='navbar-nav mr-auto'>
							<li className='nav-item active'>
								<a className='nav-link' href='#'>
									Home{' '}
									<span className='sr-only'>(current)</span>
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='#'>
									Link
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
