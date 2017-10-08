import React from 'react';
import {Link} from 'react-router-dom';
import YoutubePlayer from 'react-youtube-player';
import { TweenLite, TimelineMax } from 'gsap';

// @todo: change to splitText animation
const animateOnLoad = () => {
	TweenLite.fromTo(this.refs.projectContent, .4, 
		{y: 0},
		{y: -200, delay: 2}
	);
}

export default class ProjectPage extends React.Component {
	componentDidMount() {
		// animateOnLoad();
	}

	componentDidUpdate() {
		// animateOnLoad();
	}

	componentWillUpdate() {
		// console.log(this.refs.projectContent.style.transform);
		if (this.refs.projectContent.style.transform) 
			this.refs.projectContent.style.transform = null;
	}

	render() {
		const {images, posters, title, stack, descr, extraDescr, video } = this.props.project;

		return(
			<article className="project--page">
				<header className="project--header">
					<img src={images.hero} alt={title} className="project--hero" />
				</header>

				<main className="project--content grid-5" ref="projectContent">
					<div className="grid">
						<div className="grid--line"></div>
						<div className="grid--line"></div>
						<div className="grid--line"></div>
						<div className="grid--line"></div>
						<div className="grid--line"></div>
						<div className="grid--line"></div>
						<div className="grid--line"></div>
					</div>

					<h1 className="project--title">{title}</h1>
					<p>{stack}</p>

					<p>{descr}</p>
					
					<figure className="project--content-visuals">
						<img src={images.content1} alt={title} />
					</figure>
					
					<figure className="project--content-visuals">
						<img src={images.content2} alt={title} />
					</figure>
					
					<figure className="project--content-visuals">
						<img src={images.content3} alt={title} />
					</figure>

					{extraDescr
						? <p>{extraDescr}</p>
						: null
					}
					
					{video
					?	<video className="project--video" autoplay playsinline loop webkit-playsinline >
							<source src={video} type="video/mp4" />
						</video>
					: null
					}
						
				</main>
				
				<footer className="project--footer">
					<Link to={'/projects/'}>
						<img src={posters.footer} alt={title} />
						link to next project though
					</Link>
				</footer>
			</article>
		)
	}
}