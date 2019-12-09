import React from 'react';
import Header from './components/header/header';
import KeepTrack from './components/keepTrack/keepTrack';
import AccessClipboard from './components/accessClipboard/accessClipboard';
import './App.scss';

function App() {
	return (
		<div className="App">
			<Header />
			<KeepTrack />
			<AccessClipboard />
		</div>
	);
}

export default App;
