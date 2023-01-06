import { getComments } from './Add_and_Get_comments.js';
import counterComment from './commentsCounter.js';

const showcomments = async (link, location, commentTitle) => {
  const comentsList = await getComments(link);
  location.replaceChildren();
  if (comentsList.length > 0) {
    comentsList.forEach((comment) => {
      const par = document.createElement('p');
      par.innerHTML = `${comment.creation_date} &nbsp;&nbsp; ${comment.username} : &nbsp;&nbsp; ${comment.comment}
      `;
      location.append(par);
    });
  }
  if (location.hasChildNodes()) {
    const children = location.childNodes;
    counterComment(commentTitle, children);
  }
};

export default showcomments;
