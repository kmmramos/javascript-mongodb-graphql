const { gql } = require('apollo-server');

module.exports = gql`
type Recipe {
    name: String
    description: String
    createdat: String
    thumbsUp: Int
    thumbsDown: Int
}

input RecipeInput {
    name: String
    description: String
}

input EditRecipeInput {
    name: String
}

type Query {
    recipe(ID: ID!): Recipe!
    getRecipe(amount: Int): [Recipe]
}

type Mutation {
    createRecipe(recipeInput: RecipeInput): Recipe!
    deleteRecipe(ID: ID!): Boolean
    editRecipe(ID: ID!, recipeInput: RecipeInput): Boolean
}
`