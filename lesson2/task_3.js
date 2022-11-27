const favouriteMovies = [
    { director: 'Christopher Nolan', name: 'Interstellar' },
    { director: 'Quentin Tarantino', name: 'Pulp Fiction' },
    { director: 'Christopher Nolan', name: 'Inception' },
    { director: 'Christopher Nolan', name: 'The Dark Knight' },
    { director: 'Martin Scorsese', name: 'Taxi driver' },
    { director: 'Quentin Tarantino', name: 'Inglorious Basterds' },
    { director: 'Martin Scorsese', name: 'Silence' }
];

const directorsList = favouriteMovies.map(({ director }) => director);
const directorsListFiltr = directorsList.filter((item, index, array) => array.indexOf(item) === index);
const films = {};

for (const val of directorsListFiltr) {
    films[val] = [];
}

for (const { director, name } of favouriteMovies) {
    films[director].push(name);
}

console.log(films);

