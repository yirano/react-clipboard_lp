import React from 'react';
import './download.scss';

export default function download() {
	return (
		<section className="download">
			<div className="topElement">
				<h1>Clipboard for iOS and Mac OS</h1>
				<p className="caption">
					Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to
					start adding to your clipboard.
				</p>
			</div>

			<div className="bottomElement">
				<button>Download for iOS</button>
				<button>Download for Mac</button>
			</div>
		</section>
	);
}
