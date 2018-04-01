import React from 'react';

export default class SocialNavItem extends React.Component {
	render() {
		return(
			<li>
				<a href={this.props.href} target="_blank" className="anchor--social" ref="anchorSocial">
					{React.createElement(this.props.svg)}
				</a>
			</li>
		)
	}
}