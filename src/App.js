import React from 'react';
import Header from './components/header/header';
import KeepTrack from './components/keepTrack/keepTrack';
import AccessClipboard from './components/accessClipboard/accessClipboard';
import Supercharge from './components/supercharge/supercharge';
import Download from './components/download/download';
import './App.scss';

function App() {
	return (
		<div className="App">
			<Header />
			<KeepTrack />
			<AccessClipboard />
			<Supercharge />
			<Download />
		</div>
	);
}

export default App;
