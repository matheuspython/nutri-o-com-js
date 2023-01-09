document.getElementById('nutrition-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const foodName = document.getElementById('food-name').value;
  const foodGrams = document.getElementById('food-grams').value;

  fetch(`https://api.nutritionix.com/v1_1/search/${foodName}?fields=*&lang=pt&appId=33b6fc0e&appKey=0270ea428e172fba802263ac382baa39`)
    .then(response => response.json())
    .then(data => {
      const nutritionInfo = data.hits[0].fields;
      const carbohydrates = nutritionInfo.nf_total_carbohydrate * (foodGrams / 100);
      const protein = nutritionInfo.nf_protein * (foodGrams / 100);
      const fat = nutritionInfo.nf_total_fat * (foodGrams / 100);
      const calories = nutritionInfo.nf_calories * (foodGrams / 100);
      document.getElementById('carbohydrates').innerHTML = `Quantidade de Carboidratos: ${carbohydrates}g`;
      document.getElementById('protein').innerHTML = `Quantidade de Proteínas: ${protein}g`;
      document.getElementById('fat').innerHTML = `Quantidade de Gorduras: ${fat}g`;
      document.getElementById('calories').innerHTML = `Quantidade de Calorias: ${calories}`;
    });
});