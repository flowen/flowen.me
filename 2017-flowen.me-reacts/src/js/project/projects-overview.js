import React from 'react';
import ProjectPage from './project-page';

export default class ProjectOverview extends React.Component {
	constructor(props) {
		super(props);
		console.log(this);
	}

	render() {
		  // create a list of links
		  // PlayerAPI.all().map(p => (
		  //         <li key={p.number}>
		  //           <Link to={`/roster/${p.number}`}>{p.name}</Link>
		  //         </li>
		  //       ))
		return(
			<div className="project--overview">
				<h1>projects </h1>
			</div>
		)
	}
}