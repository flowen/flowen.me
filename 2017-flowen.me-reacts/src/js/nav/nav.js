import React from 'react';
import { Link } from 'react-router-dom'
import { TweenMax, TimelineMax } from 'gsap';

import SocialItem from './social-item';
import ProjectItem from './project-item';


export default class Nav extends React.Component {
	constructor() {
		super();

		this.showMenu = this.showMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
	}

	showMenu() {
		const tl = new TimelineMax({
			defaultEase: Power0.easeOut
		});
		const refs = this.refs;

		tl
			.fromTo(refs.navOverlay, .2, {x: 0}, {x: '-100%'})
			.to(refs.navContainer, .25, {x: '-10%'})
			.to(refs.navContainer, .15, {x: '-100%'})
			.staggerFromTo(refs.navProjects.children, .2, 
				{ x: -100, opacity: 0 }, 
				{ x: 0, opacity: 1 }, 
				-.12)
			.fromTo(refs.navHeadline, .2, {y: -20, opacity: 0}, {y: 0, opacity: 1}, 1.2)
			.staggerFromTo(refs.navMain.children, .3, 
				{ x: 50, opacity: 0 }, 
				{ x: 0, opacity: 1 }, 
				-.12, 1.2)
			.fromTo(refs.navClose, .2, {opacity: 0}, {opacity: 1}, 1.2)
			.staggerFromTo(refs.navSocial.children, .1, 
				{ scale: 0.001 }, 
				{ scale: 1 }, 
				-.05, 1.2)
			;
	}
	
	closeMenu() {
		const tl = new TimelineMax({
			defaultEase: Power0.easeOut
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
			.staggerFromTo(refs.navProjects.children, .2, 
				{ x: 0, opacity: 1 }, 
				{ x: -100, opacity: 0 }, 
				.12, 'start+=.4')
			.to(refs.navContainer, .2, {x: '100%'})
			;
	}

	render() {
		return (
			<div className="nav">
				<a className="nav--burger js--open-nav" onClick={this.showMenu}>
				    <span>menu</span>
				    <div></div>
				</a>
			
				<div className="nav--container" ref="navContainer">
					<a className="nav--close" ref="navClose" onClick={this.closeMenu}>X</a>
					<div className="nav--overlay" ref="navOverlay"></div>
					<div className="nav--holder">
						<ul className="nav--main" ref="navMain">
						  	<li><Link to="/about-me/" onClick={this.closeMenu}>who is Rou Hun</Link></li>
							<li><Link to="/projects/" onClick={this.closeMenu}>projects</Link></li>
							<li><Link to="/blog/" onClick={this.closeMenu}>blog</Link></li>
							<li><Link to="/contact/" onClick={this.closeMenu}>contact</Link></li>
						</ul>
						
						<h1 className="nav--projects-headline" ref="navHeadline">Last projects</h1>
						<ul className="nav--projects-overview" ref="navProjects">
						    { 
						    	Object.keys(this.props.projectItems).map((key) => {
						    		return (<ProjectItem key={key}
												href={key}
						    					title={this.props.projectItems[key].title} 
						    					stack={this.props.projectItems[key].stack}  
						    					date={this.props.projectItems[key].date}
						    					closeMenu={this.closeMenu}
					    					/>)
						    	}
						    )}
						</ul>

						<ul className="nav--social" ref="navSocial">
							{ 
								Object.keys(this.props.socialItems).map((key) => {
									return(
										<SocialItem key={key}
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