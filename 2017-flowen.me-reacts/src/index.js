import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

import Nav from './js/nav/nav';
import Projects from './js/project/projects';


import svgGithub from '!svg-react-loader?name=svgGithub!./assets/github.svg';
import svgGmail from '!svg-react-loader?name=svgGmail!./assets/gmail.svg';
import svgInstagram from '!svg-react-loader?name=svgInstagram!./assets/instagram.svg';
import svgLinkedIn from '!svg-react-loader?name=svgLinkedIn!./assets/linkedin.svg';
import svgMedium from '!svg-react-loader?name=svgMedium!./assets/medium.svg';
import svgTwitter from '!svg-react-loader?name=svgTwitter!./assets/twitter.svg';

const state = {	
	projectItems: {
		xenochiku: {
			title: 'Xenochiku - Audiovisuals',
			date: '2017',
			stack: 'Javascript, es6, threejs, webaudio-api',
			descr: `Xeno chiku is a personal project I started to create audiovisuals online. I've been creating audiovisuals in other software, but with the help of three.js and the webaudio api, I was able to create different online sceneries.`,
			extraDescr: null,
			posters: {
				nav: 		'/projects/xenochiku/poster-nav.jpg',
				overview: 	'/projects/xenochiku/poster-overview.jpg',
				footer: 	'/projects/xenochiku/poster-footer.jpg'
			},
			images: {
				hero: 	  '/projects/xenochiku/hero.jpg',
				content1: '/projects/xenochiku/content-1.jpg',
				content2: '/projects/xenochiku/content-2.jpg',
				content3: '/projects/xenochiku/content-3.jpg',
			},
			video: '/projects/xenochiku/video.mp4',
			url: 'https://xenochiku.com',
		},
		falcobenz: {
			title: 'Falco Benz live visuals',
			date: '2016',
			stack: 'Processing, Syphon, Ableton Live, MadMapper, Resolume',
			descr: 'For Falco Benz, based from the Netherlands, I created an audioreactive visual show. ',
			extraDescr: null,
			posters: {
				nav: 		'/projects/falcobenz/poster-nav.jpg',
				overview: 	'/projects/falcobenz/poster-overview.jpg',
				footer: 	'/projects/falcobenz/poster-footer.jpg'
			},
			images: {
				hero: 	  '/projects/falcobenz/hero.jpg',
				content1: '/projects/falcobenz/content-1.jpg',
				content2: '/projects/falcobenz/content-2.jpg',
				content3: '/projects/falcobenz/content-3.jpg',
			},
			url: null,
			video: null,
		},
		visuals: {
			title: 'Experimental visuals',
			date: '2015-2017',
			stack: 'Photoshop, Illustrator',
			descr: 'Some experimental visuals I created in the years',
			extraDescr: 'extra description',
			posters: {
				nav: 		'/projects/visuals/poster-nav.jpg',
				overview: 	'/projects/visuals/poster-overview.jpg',
				footer: 	'/projects/visuals/poster-footer.jpg'
			},
			images: {
				hero: 	  '/projects/visuals/hero.jpg',
				content1: '/projects/visuals/content-1.jpg',
				content2: '/projects/visuals/content-2.jpg',
				content3: '/projects/visuals/content-3.jpg',
			},
			video: '/projects/visuals/video.mp4',
			url: null,
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
			<div className="content-body home--overview">
				<h1>Hi, I'm Rou Hun</h1>
				<p>I'm a creative front-end developer. </p>
				<ul>
					<li>I help with the front-end of your webapp or website. My preferred tools are ReactJS, GSAP and HTML/SCSS.</li>
					<li>I create beautiful content in the form of photo's or illustrations for you with Photoshop &amp; Illustrator.</li>
					<li>I build visual systems with Processing, three.js and p5.js, link them up to Ableton Live, Resolume, madMapper, etc.</li>
				</ul>
				<p>
					<Link to="/about-me">Want to know more about me?</Link>
					or 
					<Link to="/projects">take a look at some projects I did</Link>
					or
					<Link to="/contact-me">Contact me</Link>
				</p>
			</div>
		)
	}
}


class AboutMe extends React.Component {
	render() {
		return(
			<div className="content-body about--overview">
				<h1>Who is Rou Hun?</h1>
				<p>
					I love creating art and the digital medium is my method of expressing. Whether that's creating a website 
					with ReactJS, three.js and GSAP, a generative system in Processing or 
				</p>

				<p>My skills includes : </p>

				<p>A tool is not a means to an end for me. I understand business decisions and the needs of a business owner. </p>
				<p>bio, interview link, plaatje, linkedin links, github, etc</p>
			</div>
		)
	}
}

class Contact extends React.Component {
	render() {
		return(
			<div className="content-body contact">
				<h1>Contact me </h1>
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
			<div className="content-body page-404">
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
				
				<div className="grid">
					<div className="grid--line"></div>
					<div className="grid--line"></div>
					<div className="grid--line"></div>
					<div className="grid--line"></div>
					<div className="grid--line"></div>
					<div className="grid--line"></div>
					<div className="grid--line"></div>
				</div>
				  
				<section className="section--main">
				  <Switch>
				    <Route exact path='/' component={Home} />
				    <Route path='/about-me' component={AboutMe} />
				    <Route path='/contact' component={Contact} />
				    <Route path='/projects/' 
				    	   render={ (p) => <Projects projectItems={state.projectItems} /> } 
				    />
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