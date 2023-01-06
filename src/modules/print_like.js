import { getLikes } from './Add_and_Get_likes.js';

const showlike = async (likedMeal, idMeal, link) => {
  const likesList = await getLikes(link);
  const numberLikes = likesList.filter((liked) => liked.item_id === idMeal);
  if (numberLikes.length > 0) {
    likedMeal.textContent = `${numberLikes[0].likes} Likes`;
  }
};

export default showlike;
