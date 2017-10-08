import React from 'react';
import { Link } from 'react-router-dom'

export default class ProjectNavItem extends React.Component {
	render() {
		const { closeMenu, nr, href } = this.props;
		const { title, date, posters } = this.props.project;

		return(
			<li>
			    <Link to={`/projects/${href}`} className="nav--project" onClick={closeMenu}>
		        	<img src={posters.nav} alt={title} className="nav--project-poster" />
			        <div className="nav--project-inner">
			            <span className="number">{nr}</span>
			            <span className="title">{title}</span>
			            <span className="date">{date}</span>
			        </div>
			    </Link>
			</li>
		)
	}
}