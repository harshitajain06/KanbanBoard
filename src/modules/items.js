const showBook = async () => {
    // eslint-disable-line
  const book = document.getElementById('display_card');
  const scores = await fetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian',
  );
  const res = await scores.json();
  const obj1 = JSON.stringify(res.meals);
  const obj2 = JSON.parse(obj1);

  obj2.forEach((obj) => {
    book.innerHTML += `
        <div class= "card">
        <img src=" ${obj.strMealThumb}"/><br><br>
       <h3> ${obj.strMeal}</h3<br>
       <h3>&hearts;&nbsp; &nbsp; &nbsp;0 Likes</h3>
       <div><button class="click1" id="${obj.idMeal}" type="button">Comments</button></div>
        </div>`;
  });

  const popupTemp = (obj) => {
    const body = document.getElementById('popup');
    body.innerHTML = `
        <div class="desk-popup">
       <div id="popupBtnCross"> <i class="fa-sharp fa-solid fa-xmark"></i></div>
    <img src=" ${obj.meals[0].strMealThumb}"/>
    <ul>
    <li>Meal: ${obj.meals[0].strMeal}</li>
    <li>${obj.meals[0].strCategory}</li>
    <li>${obj.meals[0].strArea}</li>
    <li>${obj.meals[0].strTags}</li>
    </ul>
    </div>
    `;
    const book = document.getElementById('display_card');
    document.querySelector('#popupBtnCross').addEventListener('click', () => {
      book.style.display = 'grid';
      body.style.display = 'none';
    });
  };

  const popFetch = async (id) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const dish = await fetch(url);
    const res = await dish.json();
    popupTemp(res);
  };

  const open = document.querySelectorAll('.click1');
  open.forEach((item) => {
    item.addEventListener('click', (e) => {
      const store = e.currentTarget.id;
      popFetch(store);
      book.style.display = 'none';
    });
  });
};

export default showBook;
