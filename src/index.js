import './style.css';
import logo from './modules/logo.jpg';
import showBook from './modules/items.js';
import { addLike } from './modules/Add_and_Get_likes.js';
import showlike from './modules/print_like.js';
import counter from './modules/mealCounter.js';

showBook();

const APIBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const appId = 'zMdguO86Euk3q3AJoMm8';

document.addEventListener('click', async (e) => {
  const { id } = e.target;
  if (e.target.matches('.hat')) {
    await addLike(`${APIBaseURL + appId}/likes`, id);
    const likedMeal = document.getElementById(id);
    showlike(likedMeal.nextElementSibling, id, `${APIBaseURL + appId}/likes`);
  }
});

document.querySelector('.img1').src = logo;

document.addEventListener('DOMContentLoaded', async () => {
  await showBook();
  const mealCounter = document.querySelector('.meal-counter');
  const count = document.querySelectorAll('.card');
  counter(mealCounter, count);
});