import React from 'react';

export default class SocialItem extends React.Component {
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