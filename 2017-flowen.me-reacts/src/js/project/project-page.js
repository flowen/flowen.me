import React from 'react';
import YoutubePlayer from 'react-youtube-player';

export default class ProjectPage extends React.Component {
	render() {
		return(
			<div className="project--page">
				<div className="project--bg-video">
					<YoutubePlayer videoId='Kj3BaLsGYKM' configuration={{ showinfo: 0, controls: 0, autoplay: 1 }} />
				</div>
				<div className="project--info">
					<h1 className="project--title">Project page title</h1>
					<p className="project--descr">visuals, description, quote, testimonial, tech stack</p>
				</div>
			</div>
		)
	}
}