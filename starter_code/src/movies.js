// Get the average of all rates with 2 decimals

function ratesAverage(movies){

const moviesRates = movies.map(function(movieRate) {
return Number(movieRate.rate);
});

const ratesSum = moviesRates.reduce(function(acc,val){
return acc + val;
}, 0)

return Math.round(ratesSum / moviesRates.length * 100) / 100;

}

console.log(ratesAverage(movies));

// Get the average of Drama Movies

function dramaMoviesRate(movies) { 
  
const dramaMovies = movies.filter(function(drama){
  return drama.genre.indexOf('Drama') !== -1;
})

if (dramaMovies.length === 0) return 0;
return ratesAverage(dramaMovies); 

}


function orderByDuration(movies) {
  let sortedMovies = movies.slice().sort(function(a, b) {
if (a.duration > b.duration) return 1;
if (a.duration < b.duration) return -1;
if (a.duration == b.duration) {
  if (a.title > a.title) return 1;
  if (a.title < b.title) return -1;
  if (a.title == b.title) return 0;
  }
});
return sortedMovies;
};


// How many movies did Steven Spielberg direct

function howManyMovies(movies) {
  const dramaMovies2 = movies.filter(function(drama){
    return drama.genre.indexOf('Drama') !== -1;
  });
  const spielbergDramaMovies = dramaMovies2.filter(function(movie){
    return movie.director.indexOf('Steven Spielberg') !== -1;
});
return spielbergDramaMovies.length;
}
 

// Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  let sortedMovies = movies.slice().sort(function (a, b) {
  if (a.title > a.title) return 1;
  if (a.title < b.title) return -1;
  if (a.title == b.title) return 0;
  });
  let newArray = sortedMovies.map(function (array) {
  return array.title
  });
  return newArray.slice(0, 20);
}


// Turn duration of the movies from hours to minutes

