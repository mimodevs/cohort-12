const APIURL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI =
  'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

const main = document.getElementById ('movies');

// initially get fav movies (by popularity)
getMovies (APIURL);

async function getMovies (url) {
  const resp = await fetch (url);
  const respData = await resp.json ();
  console.log (respData);
  showMovies (respData.results);
}

function showMovies (movies) {
  movies.forEach (movie => {
    const { poster_path, title, vote_average, overview } = movie;
    
    // create a div for each movie
    const movieEl = document.createElement('div');
    
    // add class to the div called movie
    movieEl.classList.add ('col-4');

    movieEl.innerHTML = `
            <div class="card" style="width: 18rem;">
              <img src="${IMGPATH + poster_path}" alt="${title}" />

              <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${overview}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>           
            `;

    main.appendChild (movieEl);
  });
}


