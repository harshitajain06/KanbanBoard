// Add a comment
const addNewComment = async (link, idMeal, name, comment) => {
  await fetch(link, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: idMeal,
      username: name,
      comment,
    }),
  });
};

// Get comments
const getComments = async (link) => {
  const response = await fetch(link);
  const result = await response.json();
  return result;
};

export { addNewComment, getComments };