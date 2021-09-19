export namespace Recipes {
  export type Ingredient = {
    product: string
    quantity: number
    unit: string
  }

  export type Recipe = {
    __typename?: 'Recipe'
    _id: string
    name: string
    ingredients: Ingredient[]
    preparationSteps: string[]
    numberOfServings: number
    cookingTime: number
    createdAt: number
  }
}
