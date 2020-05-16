'use strict';

const numberOfFilms = prompt("How many movies have you watched?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {

	},
	actors: {},
	genres: {},
	private: false,
}

const a = prompt("Name recent movie you've watched", ""),
			b = prompt("Whats your score?", ""),
			c = prompt("Name recent movie you've watched", ""),
			d = prompt("Whats your score?", "");
			personalMovieDB.movies[a] = b;
console.log(personalMovieDB);