// Add a like
const addLike = async (link, idMeal) => {
  await fetch(link, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: idMeal,
    }),
  });
};

// Get likes
const getLikes = async (link) => {
  const response = await fetch(link);
  const result = await response.json();
  return result;
};

export { addLike, getLikes };