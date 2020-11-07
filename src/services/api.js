export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
}


export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId && query) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => err);
  } else if (categoryId) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => err);
  } else if (query) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?&q=${query}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => err);
  }
  return [];
}

export async function getProductFromId(productId) {
  return fetch(`https://api.mercadolibre.com/items/${productId}`)
  .then((response) => response.json())
  .then((data) => data)
  .catch((err) => err);
};
