const KSUID = require("ksuid");

const restaurants = [
  {
    id: "1Bd52WjqcwLzxl5LquyXvfT81wW",
    name: "Max & Benito"
  },
  {
    id: "1Bd53lMwrJKG6cnsRLqytl9x8w7",
    name: "The Breakfast Club"
  }
];

const getRestaurants = () => restaurants;

const createRestaurant = restaurant => {
  const restaurantWithId = { ...restaurant, id: KSUID.randomSync().string };
  restaurants.push(restaurantWithId);
  return restaurantWithId;
};

module.exports = {
  getRestaurants,
  createRestaurant
};
