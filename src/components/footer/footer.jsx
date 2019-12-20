import React from 'react';
import Logo from '../../images/logo.svg';
import Facebook from '../../images/icon-facebook.svg';
import Twitter from '../../images/icon-twitter.svg';
import Instagram from '../../images/icon-instagram.svg';
import './footer.scss';

export default function footer() {
	return (
		<footer>
			<div className="firstColumn">
				<img src={Logo} alt="Clipboard Logo" />
			</div>
			<div className="secondColumn">
				<ul>
					<li>
						<a href="/">FAQs</a>
					</li>
					<li>
						<a href="/">Contact Us</a>
					</li>
				</ul>
				<ul>
					<li>
						<a href="/">Privacy Policy</a>
					</li>
					<li>
						<a href="/">Press Kit</a>
					</li>
				</ul>
				<ul>
					<li>
						<a href="/">Install Guide</a>
					</li>
				</ul>
			</div>

			<div className="thirdColumn">
				<ul>
					<li>
						<a href="/">
							<img src={Facebook} alt="Facebook" />
						</a>
					</li>
					<li>
						<a href="/">
							<img src={Twitter} alt="Twitter" />
						</a>
					</li>
					<li>
						<a href="/">
							<img src={Instagram} alt="Instagram" />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
