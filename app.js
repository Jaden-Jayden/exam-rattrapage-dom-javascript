const $dialog = document.getElementById("dialogg");
const btn = document.getElementById("btn");
const input = document.getElementById("search");
const images = document.querySelector(".illustration");

form.addEventListener("submit", (e) => {
	e.preventDefault();
});

btn.addEventListener("click", () => {
	getIP(input.value);
	$dialog.close();
});

async function getIP() {
	const search = input.value;

	const response = await fetch(
		"https://www.themealdb.com/api/json/v1/1/search.php?s=" + search,
	);
	const data = await response.json();

	meal.textContent = data.meals[0].strMeal;
	category.textContent = data.meals[0].strCategory;
	country.textContent = data.meals[0].strCountry;
	ingredient1.textContent = data.meals[0].strIngredient1;
	ingredient2.textContent = data.meals[0].strIngredient2;
	ingredient3.textContent = data.meals[0].strIngredient3;
	ingredient4.textContent = data.meals[0].strIngredient4;
	ingredient5.textContent = data.meals[0].strIngredient5;
	ingredient6.textContent = data.meals[0].strIngredient6;
	ingredient7.textContent = data.meals[0].strIngredient7;
	ingredient8.textContent = data.meals[0].strIngredient8;
	measure1.textContent = data.meals[0].strMeasure1;
	measure2.textContent = data.meals[0].strMeasure2;
	measure3.textContent = data.meals[0].strMeasure3;
	measure4.textContent = data.meals[0].strMeasure4;
	measure5.textContent = data.meals[0].strMeasure5;
	measure6.textContent = data.meals[0].strMeasure6;
	measure7.textContent = data.meals[0].strMeasure7;
	measure8.textContent = data.meals[0].strMeasure8;

	textmeal1.textContent = data.meals[0].strInstructions;

	youtube.textContent = data.meals[0].strYoutube;

	images.style.background =
		"center / cover no-repeat url('" + data.meals[0].strMealThumb + "')";

	console.log(data);
}

document.addEventListener("DOMContentLoaded", () => {
	$dialog.show();
});
