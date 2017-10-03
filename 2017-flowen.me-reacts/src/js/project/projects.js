import React from 'react';
import ProjectsOverview from './projects-overview';
import ProjectPage from './project-page';
import { Switch, Route } from 'react-router-dom';

export default class Projects extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return(
			<Switch>
			    <Route exact path='/projects' component={ProjectsOverview} projectItems={this.props.projectItems} />
			    <Route path='/projects/:projectId' component={ProjectPage} />
			</Switch>
		)
	}
}