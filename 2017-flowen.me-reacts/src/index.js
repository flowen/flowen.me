import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Nav from './js/nav/nav';
import Projects from './js/project/projects';

import svgGithub from 'svg-react-loader?name=svgGithub!./assets/github.svg';
import svgGmail from 'svg-react-loader?name=svgGmail!./assets/gmail.svg';
import svgInstagram from 'svg-react-loader?name=svgInstagram!./assets/instagram.svg';
import svgLinkedIn from 'svg-react-loader?name=svgLinkedIn!./assets/linkedin.svg';
import svgMedium from 'svg-react-loader?name=svgMedium!./assets/medium.svg';
import svgTwitter from 'svg-react-loader?name=svgTwitter!./assets/twitter.svg';

const state = {	
	projectItems: {
		xenochiku: {
			title: 'Xenochiku',
			date: '2017',
			stack: 'javascript, threejs, webaudio-api',
			descr: 'audiovisual shit',
			poster: '/assets/posters/xenochiku.jpg',
			url: 'https://xenochiku.com'
		},
		visuals: {
			title: 'Experimental visuals',
			date: '2015-2017',
			stack: 'Photoshop, Illustrator',
			descr: 'experimental visuals I created in the years',
			poster: '/assets/posters/visuals.jpg',
			url: 'http://xenochiku.com'
		},
		falcobenz: {
			title: 'Falco Benz live visuals',
			date: '2016',
			stack: '',
			descr: 'For Falco Benz, based from the Netherlands, I created an audioreactive visual show. ',
			poster: '/assets/posters/falcobenz.jpg',
			url: 'http://falcobenz.nl'
		}
	},
	socialItems: {
		github: {
			href: "https://github.com/flowen",
			svg: svgGithub
		},
		gmail: {
			href: "mailto:lowen@flowen.nl?subject=hi! I am .. and would like to have a chat&body=Tell me about your project in 3 sentences: %0D%0A%0D%0ATell me when you consider your project a success: %0D%0A%0D%0AIs there a budget you have in mind? %0D%0A%0D%0AHow did you find me: ",
			svg: svgGmail
		},
		instagram: {
			href: "https://www.instagram.com/flowen_nl",
			svg: svgInstagram
		},
		linkedIn: {
			href: "https://www.linkedin.com/in/flowen",
			svg: svgLinkedIn
		},
		medium: {
			href: "https://medium.com/@flowen",
			svg: svgMedium
		},
		twitter: {
			href: "https://twitter.com/flowen_nl",
			svg: svgTwitter
		},
	}
}


class Home extends React.Component {
	render() {
		return(
			<div className="home--overview">
				<h1>home</h1>
			</div>
		)
	}
}


class Blog extends React.Component {
	render() {
		return(
			<div className="blog--overview">
				<h1>hier je blogs</h1>
			</div>
		)
	}
}

class BlogPage extends React.Component {
	render() {
		return(
			<div className="blog--page">
				<h1>blog page</h1>
			</div>
		)
	}
}

class NoMatch extends React.Component {
	render() {
		return(
			<div className="page-404">
				<h1>404</h1>
			</div>
		)
	}
}

class App extends React.Component {
	render() {
		return (
			<main>
				<Nav socialItems={state.socialItems} projectItems={state.projectItems} />
				<section className="section--main">
				  <Switch>
				    <Route exact path='/' component={Home} />
				    <Route path='/blog' component={Blog}>
				    	<Route path='/blog/:blogId' component={BlogPage} />
				    </Route>
				    <Route path='/projects/' component={Projects} projectItems={state.projectItems} />
				    <Route path="*" component={NoMatch}/>
				  </Switch>
				</section>
			</main>
		)
	}
}

ReactDOM.render(
  <HashRouter>
  	<App />
  </HashRouter>,
  document.getElementById('app')
);

module.hot.accept();