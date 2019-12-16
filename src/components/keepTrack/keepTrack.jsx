import React from 'react';
import './keepTrack.scss';

export default function keepTrack() {
	return (
		<section className="keepTrack">
			<div className="topElement headerText">
				<h2>Keep track of your snippets</h2>
				<p className="caption">
					Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets
					immediately on all your devices. Our Mac and iOS apps will help you organize everything.
				</p>
			</div>
			<div className="bottomContent">
				<div className="leftElement" />
				<div className="rightElement">
					<div className="textContainer">
						<h3>Quick Search</h3>
						<p className="caption">
							Easily search your snippets by content, category, web address, application, and more.
						</p>
					</div>
					<div className="textContainer">
						<h3>iCloud Sync</h3>
						<p className="caption">Instantly saves and syncs snippets across all your devices.</p>
					</div>
					<div className="textContainer">
						<h3>Complete History</h3>
						<p className="caption">
							Retrieve any snippets from the first moment you started using the app.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
