const restaurants = [
  {
    id: "1Bd52WjqcwLzxl5LquyXvfT81wW",
    name: "Max & Benito",
    addres: "adasdsad"
  },
  {
    id: "1Bd53lMwrJKG6cnsRLqytl9x8w7",
    name: "The Breakfast Club",
    addres: "3234234"
  }
];

const searchRestaurants = query => {
  return restaurants.filter(restaurant => restaurant.name.indexOf(query) !== -1)
}

module.exports = {
  searchRestaurants
};
