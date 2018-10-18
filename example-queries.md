1. Query Restaurants

```graphql
{
  restaurants {
    name
  }
}
```

2. Login

```graphql
mutation {
  login(email: "tim@example.com", password: "123") {
    token
  }
}
```

3. Create Restaurant

```graphql
mutation {
  createRestaurant(restaurant: { name: "Schnitzelwirt" }) {
    id
    name
  }
}
```

```json
{ 
  "Authorization": "Bearer e00cb394-8e50-4dac-ac91-5bf85cba4f41"
}
```

4. Search Restaurant

```graphql
{
  searchRestaurants(query: "Max") {
    id
    name
  }
}
```