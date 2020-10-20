export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json())
    .then((data) => data);
}


export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId && query) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
      .then((response) => response.json())
      .then((data) => data);
  } else if (categoryId) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`)
      .then((response) => response.json())
      .then((data) => data);
  } else if (query) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?&q=${query}`)
      .then((response) => response.json())
      .then((data) => data);
  }
  return [];
}
