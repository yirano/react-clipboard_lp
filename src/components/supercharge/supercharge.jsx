import React from 'react';
import BlackList from '../../images/icon-blacklist.svg';
import PlainText from '../../images/icon-text.svg';
import Preview from '../../images/icon-preview.svg';
import './supercharge.scss';

export default function supercharge() {
	return (
		<section className="supercharge">
			<div className="topElement">
				<h1>Supercharge your workflow</h1>
				<p className="caption">We've got the tools to boost your productivity.</p>
			</div>
			<div className="secondElement">
				<div className="card">
					<img src={BlackList} alt="Create blacklists icon" />
				</div>
				<div className="card">
					<img src={PlainText} alt="Plain text snippets icon" />
				</div>
				<div className="card">
					<img src={Preview} alt="Sneak Preview icon" />
				</div>
			</div>
			<div className="thirdElement">
				<div className="card">
					<img src={BlackList} alt="Create blacklists icon" />
				</div>
				<div className="card">
					<img src={PlainText} alt="Plain text snippets icon" />
				</div>
				<div className="card">
					<img src={Preview} alt="Sneak Preview icon" />
				</div>
			</div>

			<div className="bottomElement" />
		</section>
	);
}
