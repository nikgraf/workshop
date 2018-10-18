const { getRestaurants, createRestaurant } = require("../db/restaurants");
const { login } = require("../db/users");
const { ForbiddenError } = require("apollo-server")

module.exports = {
  Query: {
    restaurants: () => getRestaurants()
  },
  Mutation: {
    createRestaurant: (_parent, args, context) => {
      if (!context.user)
        throw new ForbiddenError(
          "You must log in to create new restaurants."
        );
      return createRestaurant(args.restaurant);
    },
    login: (_parent, args) => login(args.email, args.password)
  }
};
