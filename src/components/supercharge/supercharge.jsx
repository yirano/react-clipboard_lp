import React, { Component } from 'react';
import BlackList from '../../images/icon-blacklist.svg';
import PlainText from '../../images/icon-text.svg';
import Preview from '../../images/icon-preview.svg';
import './supercharge.scss';

export class supercharge extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: [
				{
					image: BlackList,
					title: 'Create blacklists',
					caption:
						'Ensure sensitive information never makes its way to your clipboard by exclusing certain sources.'
				},
				{
					image: PlainText,
					title: 'Plain text snippets',
					caption: 'Remove unwanted formatting from copied text for a consistent look.'
				},
				{
					image: Preview,
					title: 'Sneak preview',
					caption: 'Quick preview of all snippets on your Clipboard for easy access.'
				}
			]
		};
	}

	render() {
		return (
			<section className="supercharge">
				<div className="topElement">
					<h1>Supercharge your workflow</h1>
					<p className="caption">We've got the tools to boost your productivity.</p>
				</div>
				<div className="secondElement">
					{this.state.cards.map(({ image, title, caption }) => {
						return (
							<div className="card">
								<img src={image} alt="" />
								<h2>{title}</h2>
								<p className="caption">{caption}</p>
							</div>
						);
					})}
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
}

export default supercharge;
