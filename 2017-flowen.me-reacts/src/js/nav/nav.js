import React from 'react';
import { NavLink } from 'react-router-dom'
import { TweenMax, TimelineMax } from 'gsap';

import SocialNavItem from './social-nav-item';
import ProjectNavItem from './project-nav-item';

let projectContent = document.querySelector('.project--content');

export default class Nav extends React.Component {
	constructor() {
		super();

		this.showMenu = this.showMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
	}

	componentDidMount() {
		const navLinks = this.refs.navMain.querySelectorAll('a');
		for (const link of navLinks) {
			// console.log(link);
			link.addEventListener('onmouseover', function(e) {
				// console.log(e);
			});
		}
	}

	componentWillUpdate() {
		console.log('will update');
	}

	componentDidUpdate() {
		console.log('did update');
	}

	showMenu() {
		const tl = new TimelineMax({ defaultEase: Power0.easeOut });
		const refs = this.refs;
		const delay = 1;

		tl
			.add('start', 0)
			.to(refs.navOverlay, .15, {x: '-100%'}, 'start')
			.to(refs.navBurger, .15, {x: -60, opacity: 0}, 'start')
			.to(refs.navContainer, .15, {x: '-5%'}, 'start')
			
			// .fromTo(refs.navBurger, .15, {x: 0}, {x: -window.innerWidth}, '+=.2')
			.to(refs.navContainer, .15, {x: '-100%'}, '+=.15')
			
			.staggerFromTo(refs.navProjectsOverview.children, .2, 
				{ x: -100, opacity: 0 }, 
				{ x: 0, opacity: 1 }, 
				-.12, .7)
			.fromTo(refs.navHeadline, .2, {y: -20, opacity: 0}, {y: 0, opacity: 1}, delay)
			.staggerFromTo(refs.navMain.children, .3, 
				{ x: 50, opacity: 0 }, 
				{ x: 0, opacity: 1 }, 
				-.12, delay)
			.fromTo(refs.navClose, .2, {opacity: 0}, {opacity: 1}, delay)
			.staggerFromTo(refs.navSocial.children, .1, 
				{ scale: 0.001 }, 
				{ scale: 1 }, 
				-.05, delay)
			;
	}
	
	closeMenu(e) {
		const tl = new TimelineMax({
			defaultEase: Power4.easeOut
		});
		const refs = this.refs;

		tl
			.add('start', '+=.2')
			.staggerFromTo(refs.navSocial.children, .1, 
				{ scale: 1 }, 
				{ scale: 0.001 }, 
				.04, 'start')
			.staggerTo(refs.navMain.children, .2, { 
				opacity: 0
			}, .04, 'start')
			.to(refs.navHeadline, .2, {y: -20, opacity: 0}, 'start')
			.to(refs.navClose, .2, {opacity: 0}, 'start')
			.staggerFromTo(refs.navProjectsOverview.children, .2, 
				{ x: 0, opacity: 1 }, 
				{ x: -100, opacity: 0 }, 
				.12)
			.to(refs.navOverlay, .2, {x: '100%'})
			.to(refs.navContainer, .2, {x: '100%'})
			.to(refs.navBurger, .2, {x: 0, opacity: 1})
			;
	}

	render() {
		let nr = 1;

		return (
			<div className="nav">
				<a className="nav--burger js--open-nav" onClick={this.showMenu} ref="navBurger">
				    <span>menu</span>
				    <div></div>
				</a>
			
				<div className="nav--container" ref="navContainer">
					<a className="nav--close" ref="navClose" onClick={this.closeMenu}></a>
					<div className="nav--overlay" ref="navOverlay"></div>
					<div className="nav--holder">
						<ul className="nav--main" ref="navMain">
						  	<li><NavLink exact to="/" activeClassName="selected" onClick={this.closeMenu}>/</NavLink></li>
						  	<li><NavLink to="/about-me/" activeClassName="selected" onClick={this.closeMenu}>who is Rou Hun</NavLink></li>
							<li><NavLink to="/projects/" activeClassName="selected" onClick={this.closeMenu}>projects</NavLink></li>
							<li><NavLink to="/contact/" activeClassName="selected" onClick={this.closeMenu}>contact</NavLink></li>
						</ul>
						
						<h1 className="nav--projects-headline" ref="navHeadline">Last projects</h1>
						<ul className="nav--projects-overview" ref="navProjectsOverview">
						    { 
						    	Object.keys(this.props.projectItems).map((key) => {
						    		return (<ProjectNavItem 
						    					key={key}
												href={key}
						    					closeMenu={this.closeMenu}
						    					nr={`0${nr++}`}
						    					project={this.props.projectItems[key]}
					    					/>)
						    	}
						    )}
						</ul>

						<ul className="nav--social" ref="navSocial">
							{ 
								Object.keys(this.props.socialItems).map((key) => {
									return(
										<SocialNavItem 
											key={key}
											href={this.props.socialItems[key].href}  
											svg={this.props.socialItems[key].svg} 
									/>)
								})
							}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}