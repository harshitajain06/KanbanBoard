const counterComment = (commentSpace, commentList) => {
  const numberOfComments = commentList.length ? commentList.length : 0;
  const span1 = document.createElement('span');
  span1.setAttribute('id', 'spanh');
  commentSpace.innerText = `${numberOfComments}`;
};

export default counterComment;