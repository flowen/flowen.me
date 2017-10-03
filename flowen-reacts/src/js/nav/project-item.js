import React from 'react';
import { Link } from 'react-router-dom'

export default class ProjectItem extends React.Component {
	constructor() {
		super();
	}

	render() {
		return(
			<li>
			    <Link to={`/projects/${this.props.href}`} className="nav--project" onClick={this.props.closeMenu}>
			        <div className="nav--project-inner">
			            <span className="number">01</span>
			            <span className="title">{this.props.title}</span>
			            <span className="stack">{this.props.stack}</span>
			            <span className="date">{this.props.date}</span>
			        </div>
			        <div className="nav--project-overlay"></div>
			    </Link>
			</li>
		)
	}
}