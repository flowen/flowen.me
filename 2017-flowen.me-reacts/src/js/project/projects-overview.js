import React from 'react';
import {Link} from 'react-router-dom';

export default class ProjectOverview extends React.Component {
	render() {
		const projects =  this.props.projectItems;

		return(
			<div className="project--overview">
				<h1 className="project--overview-heading">Projects overview </h1>
				
				<ul className="project--overview-list">
					{Object.keys(projects).map((key) => {
						var style = { backgroundImage: `url(${projects[key].posters.nav})` }
						return (
							<li key={key} className="project--listitem">
								<Link to={`/projects/${key}`}  style={ style }>{ projects[key].title }</Link>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}