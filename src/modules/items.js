import printLikes from './initial_likes.js';
import showcomments from './print_comment.js';
import { addNewComment } from './Add_and_Get_comments.js';

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
       <h3><span class="hat" id="${obj.idMeal}">&hearts;</span>&nbsp; &nbsp; &nbsp;<span class="likes_holder" >0 Likes</span></h3>
       <div><button class="click1" id="${obj.idMeal}" type="button">Comments</button></div>
        </div>`;
  });

  const APIBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

  const appId = 'zMdguO86Euk3q3AJoMm8';

  const textLikes = document.getElementsByClassName('likes_holder');
  printLikes(textLikes, `${APIBaseURL + appId}/likes`);

  const popupTemp = (obj) => {
    const body = document.getElementById('popup');
    body.innerHTML = `
    <div class="desk-popup">
    <div class="content">
    <div id="popupBtnCross"> <i class="fa-sharp fa-solid fa-xmark"></i></div>
    <img class="detail_img" src=" ${obj.meals[0].strMealThumb}"/>
    <h2 class="Mealname"> ${obj.meals[0].strMeal}</h2>
    <ul class="info">
    <div class="mill">
      <li><span class="explanation">Category:</span>  ${obj.meals[0].strCategory}</li>
      <li><span class="explanation">Origin:</span>  ${obj.meals[0].strArea}</li>
      <li><span class="explanation">Ingridients:</span>  ${obj.meals[0].strTags}</li>
    </div>
    <div class="recipe">
      <li class="desc">
      <span class="explanation decr">Description:</span>  ${obj.meals[0].strInstructions}</li>
    </div>
    </ul>
    <div class="commentZone">
    <h2 class="commentHeader">Comment(<span class="commentTitle">0</span>)</h2>
    <div class="comments">
    </div>
    </div>
    <form>
      <h2 class="commentTitle">Add Comment</h2>
      <input type="text" id="names" placeholder="Your name">
      <textarea name="insights" id="insights" cols="30" rows="10" placeholder="Your Insights"></textarea>
      <button class="click1" id="newComment" type="button">Comments</button>
    </form>
    </div>
  </div>
    `;
    const book = document.getElementById('display_card');
    document.querySelector('#popupBtnCross').addEventListener('click', () => {
      book.style.display = 'grid';
      body.style.display = 'none';
    });
    const location = document.querySelector('.comments');
    const commentTitle = document.querySelector('.commentTitle');
    showcomments(`${APIBaseURL + appId}/comments?item_id=${obj.meals[0].idMeal}`, location, commentTitle);
    const addComment = document.getElementById('newComment');
    const names = document.getElementById('names');
    const insights = document.getElementById('insights');
    addComment.addEventListener('click', async () => {
      if (names.value !== '' && insights.value !== '') {
        await addNewComment(`${APIBaseURL + appId}/comments`, obj.meals[0].idMeal, names.value, insights.value);
        showcomments(`${APIBaseURL + appId}/comments?item_id=${obj.meals[0].idMeal}`, location, commentTitle);
        document.forms[0].reset();
      }
    });
  };

  const popFetch = async (id) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const dish = await fetch(url);
    const res = await dish.json();
    popupTemp(res);
  };

  const body = document.getElementById('popup');
  const open = document.querySelectorAll('.click1');
  open.forEach((item) => {
    item.addEventListener('click', (e) => {
      const store = e.currentTarget.id;
      popFetch(store);
      book.style.display = 'none';
      body.style.display = 'block';
    });
  });
};

export default showBook;
