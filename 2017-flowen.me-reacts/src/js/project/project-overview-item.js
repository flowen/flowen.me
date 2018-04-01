import React from 'react';
import { Link } from 'react-router-dom'

export default class ProjectNavItem extends React.Component {
	render() {
		const { closeMenu, nr, href } = this.props;
		const { title, date, posters } = this.props.project;

		return(
			<li>
			    <Link to={`/projects/${href}`} className="project-item" onClick={closeMenu}>
		        	<img src={posters.overview} alt={title} className="project-item--poster" />
			        <div className="project-item--inner">
			            <span className="project-item--number">{nr}.</span>
			            <h1 className="project-item--title">{title}</h1>
			            <span className="project-item--date">{date}</span>
			        </div>
			    </Link>
			</li>
		)
	}
}