import React from 'react';
import Header from './components/Header';
import Player from './components/Player';
import Center from './components/Center';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Header />
			<Center />
			<Player />
		</div>
	);
}

export default App;
