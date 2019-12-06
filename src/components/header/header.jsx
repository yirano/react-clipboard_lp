import React from 'react';
import logo from '../../images/logo.svg';
import './header.scss';

export default function header() {
	return (
		<header>
			<div className="logo">
				<img src={logo} alt="main logo" />
			</div>

			<div className="headerText">
				<h1>A history of everything you copy</h1>
				<p className="caption">
					Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on
					all your devices.
				</p>
			</div>
			<div className="headerButtons">
				<button className="dl-ios">Download for IOS</button>
				<button className="dl-mac">Download for Mac</button>
			</div>
		</header>
	);
}
