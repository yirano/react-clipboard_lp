import React, { Component } from 'react';
import BlackList from '../../images/icon-blacklist.svg';
import PlainText from '../../images/icon-text.svg';
import Preview from '../../images/icon-preview.svg';
import Google from '../../images/logo-google.png';
import IBM from '../../images/logo-ibm.png';
import Microsoft from '../../images/logo-microsoft.png';
import HP from '../../images/logo-hp.png';
import VectorGraphics from '../../images/logo-vector-graphics.png';
import './supercharge.scss';

export class supercharge extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: [
				{
					id: 1,
					image: BlackList,
					title: 'Create blacklists',
					caption:
						'Ensure sensitive information never makes its way to your clipboard by exclusing certain sources.'
				},
				{
					id: 2,
					image: PlainText,
					title: 'Plain text snippets',
					caption: 'Remove unwanted formatting from copied text for a consistent look.'
				},
				{
					id: 3,
					image: Preview,
					title: 'Sneak preview',
					caption: 'Quick preview of all snippets on your Clipboard for easy access.'
				}
			],
			companyLogos: [
				{
					logo: Google,
					id: 1
				},
				{
					logo: IBM,
					id: 2
				},
				{
					logo: Microsoft,
					id: 3
				},
				{
					logo: HP,
					id: 4
				},
				{
					logo: VectorGraphics,
					id: 5
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
					{this.state.cards.map(({ image, title, caption, id }) => {
						return (
							<div className="card" key={id}>
								<img src={image} alt="" />
								<h2>{title}</h2>
								<p className="caption">{caption}</p>
							</div>
						);
					})}
				</div>
				<div className="thirdElement">
					{this.state.companyLogos.map(({ logo, id }) => {
						return <img src={logo} alt="company logos" key={id} />;
					})}
				</div>

				<div className="bottomElement" />
			</section>
		);
	}
}

export default supercharge;
