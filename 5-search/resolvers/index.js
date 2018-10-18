const { searchRestaurants } = require("../db/restaurants");

module.exports = {
  Query: {
    searchRestaurants: (_parent, args) => searchRestaurants(args.query)
  }
};
