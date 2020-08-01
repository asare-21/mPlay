import React, { useState } from 'react';
import './Player.css';

function Player() {
	const [song, setSong] = useState([]);
	const search = (e) => {
		e.preventDefault();
		const searchValue = e.target.querySelector('input').value || 'eminem';
		fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchValue}`, {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
				'x-rapidapi-key': '2256433345msh3b85f2aa1c465c6p1f4990jsn6a9efd5edaf6',
				'Access-Control-Allow-Origin': '*'
			}
		})
			.then((response) => response.json())
			.then((songs) => {
				setSong(songs.data);
				document.querySelector('.player__controls__image').src =
					songs.data[2].album.cover;
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const move = (e) => {
		e.preventDefault();
		if (e.target.id === 'small' || true) {
			document.querySelector('.player__search small').classList.toggle('show');
		}
		document.querySelector('input').value = '';
	};
	const playSong = (e) => {
		console.log(e.target.getAttribute('data-link'));
		document.querySelector('audio source').src = e.target.getAttribute(
			'data-link'
		);
		document.querySelector('audio').src = e.target.getAttribute('data-link');
	};

	return (
		<div className='player'>
			<form onSubmit={(move, search)} className='player__search'>
				<small id='small' htmlFor='input' onClick={move}>
					Search
				</small>
				<input id='input' type='search' name='search' />
			</form>
			<div className='player__songs'>
				<ul>
					{song.map((song) => {
						return (
							<li
								key={song.id}
								data-link={song.link}
								data-pic={song.artist.picture}
								onClick={playSong}>
								{song.title}
							</li>
						);
					})}
				</ul>
			</div>
			<div className='player__controls'>
				<img
					src='https://media.wired.com/photos/5acd49234e39060f2e49e9b2/125:94/w_2393,h_1800,c_limit/Music%20sharing-01.jpg'
					className='player__controls__image'
					alt='Background'
				/>
				<small>
					Playing Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Tenetur earum doloribus recusandae eum ullam harum! Voluptatem
					laboriosam suscipit incidunt recusandae, aliquid nemo quo, voluptate
					eos natus, ab similique magnam iure?
				</small>
				<div className='buttons'>
					<audio src='#' autoPlay controls>
						<source src='' type='' />
					</audio>
				</div>
			</div>
		</div>
	);
}

export default Player;
