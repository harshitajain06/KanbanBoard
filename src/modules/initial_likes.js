import showlike from './print_like.js';

const printLikes = (textLikes, link) => {
  Array.from(textLikes).forEach(async (textLike) => {
    const { id } = textLike.previousElementSibling;
    await showlike(textLike, id, link);
  });
};

export default printLikes;