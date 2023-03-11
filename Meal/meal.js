const loadMeal = search => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => displayMeal(data.meals));
};

const displayMeal = meals => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="detailMeal(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 80)}</p>
            </div>
        </div>
`;
        mealContainer.appendChild(div)
        // console.log(meal)
    })
}

const searchMeal = search => {
    const inputField = document.getElementById('search-field');
    const findMeal = inputField.value;
    inputField.value = ''
    loadMeal(findMeal)
}

const detailMeal = detail => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${detail}`)
        .then(res => res.json())
        .then(data => displayDetailMeal(data.meals[0]))
};


const displayDetailMeal = meal => {
    const detailMeals = document.getElementById('detail-meals');
    detailMeals.innerHTML = ''
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 80)}</p>
            </div>
        </div>
`
    detailMeals.appendChild(div)
}

loadMeal('')