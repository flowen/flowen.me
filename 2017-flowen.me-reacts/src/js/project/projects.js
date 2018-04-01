import React from 'react';
import ProjectsOverview from './projects-overview';
import ProjectPage from './project-page';
import { Switch, Route } from 'react-router-dom';

export default class Projects extends React.Component {
	render() {
		return(
			<Switch>
			    <Route exact path='/projects/' render={ (router) => (
			    	<ProjectsOverview projectItems={this.props.projectItems} /> 
			    )} />
			    <Route path='/projects/:projectId' render={ (router) => (
			    	<ProjectPage project={this.props.projectItems[router.match.params.projectId]} /> 
			    )} />
			</Switch>
		)
	}
}