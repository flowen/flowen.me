import React from 'react';
import { Link } from 'react-router-dom'
import ProjectOverviewItem from './project-overview-item';

export default class ProjectOverview extends React.Component {
	render() {
		let nr = 1;
		const projects =  this.props.projectItems;

		return(
			<div className="project--overview grid-6">
				<ul className="project--overview-list">
				    { 
				    	Object.keys(this.props.projectItems).map((key) => {
				    		return (<ProjectOverviewItem 
				    					key={key}
										href={key}
				    					closeMenu={this.closeMenu}
				    					nr={`0${nr++}`}
				    					project={this.props.projectItems[key]}
			    					/>)
				    	}
				    )}
				</ul>

			</div>
		)
	}
}