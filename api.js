document.getElementById("searchBox").addEventListener("click", function () {
    const Input = document.getElementById("input");
  
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Input.value}`)
      .then(res => res.json())
      .then(data => displayFood(data.meals));
  });
  
  
  
  
  const displayFood = foods => {
    const foodDiv = document.getElementById('foods');
    foodDiv.innerHTML = "";
    foods.forEach((food) => {
  
      const mealFood = document.createElement('div');
      mealFood.className = "card";
  
      mealFood.addEventListener("click", function () {
  
        displayDetails(food);
  
      });
  
      const foodInfo = `
                        <img src="${food.strMealThumb}">
                          <h4 class= "title">${food.strMeal}</h4>
          `;
  
      mealFood.innerHTML = foodInfo;
      foodDiv.appendChild(mealFood);
  
    });
  
  };
  
  
  
  const displayDetails = foods => {
    const foodDetail = document.getElementById("foodDetail");
  
    const foodInfo = `
                
              <div class= "card-detail">
                  <img width="200px" src="${foods.strMealThumb}">
                  <div>
                        <h2>${foods.strMeal}</h2>
                        <h4>Ingredients</h4>
                        <ul class="manuitem">
                          <li>${foods.strIngredient1}</li>
                          <li>${foods.strIngredient2}</li>
                          <li>${foods.strIngredient3}</li>
                          <li>${foods.strIngredient4}</li>
                          <li>${foods.strIngredient5}</li>
                          <li>${foods.strIngredient6}</li>
                        </ul>
                      </div>
              </div>
                      
      `;
  
    foodDetail.innerHTML = foodInfo;
  
  };