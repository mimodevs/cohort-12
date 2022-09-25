const APIURL = 'https://www.thecocktaildb.com/api/json/v2/9973533/recent.php';
const SEARCHAPI = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const drinksSection = document.getElementById ('drinks');
const form = document.getElementById ('form');
const search = document.getElementById ('search');

getDrinks (APIURL);

async function getDrinks (url) {
  const resp = await fetch (url);
  const respData = await resp.json ();
  console.log (respData);
  showDrinks (respData.drinks);
}

async function getMealById (id) {
  const resp = await fetch ('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id);
  const respData = await resp.json ();
  const drink = respData.drinks[0];
	console.log (drink);
	// return drink;
}

function showDrinks (drinks) {
  // clear
  drinksSection.innerHTML = '';
  drinks.forEach (drink => {
    const {idDrink, strDrinkThumb, strDrink} = drink;
    const drinkEl = document.createElement ('div');
    drinkEl.classList.add ('col-4');
    drinkEl.innerHTML = `
				<div class="card">
					<img src="${strDrinkThumb}" class="card-img-top" alt="...">
					<div class="card-body">
						<h5 class="card-title">${strDrink}</h5>
					</div>
				</div>`;
    drinksSection.appendChild (drinkEl);
  });
}

form.addEventListener ('submit', e => {
  e.preventDefault ();
  const searchTerm = search.value;
  if (searchTerm) {
    getDrinks (SEARCHAPI + searchTerm);
    search.value = '';
  }
});