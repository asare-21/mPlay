import React from 'react';

function Center() {
	const scrollMe = () => {
		window.scrollTo({
			top: 1000,
			behavior: 'smooth'
		});
	};
	return (
		<div>
			<h2>We Bring You The Best Of The Best</h2>
			<div className='header__circle' onClick={scrollMe}>
				<small>Click Me</small>
			</div>
		</div>
	);
}

export default Center;
