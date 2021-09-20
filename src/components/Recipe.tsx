import { Recipes } from '../utils/types'

export default function Recipe({
  _id,
  name,
  ingredients,
  preparationSteps,
  numberOfServings,
  cookingTime,
  createdAt,
}: Recipes.Recipe) {
  const ingredientsList = ingredients.map((ingredient, index) => (
    <li key={`ingredient-${index}`}>{ingredient.product}</li>
  ))
  return (
    <div>
      <p>{_id}</p>

      <p>{name}</p>
      <ul>{ingredientsList}</ul>
      <p>{preparationSteps}</p>
      <p>{numberOfServings}</p>
      <p>{cookingTime}</p>
      <p>{createdAt}</p>
    </div>
  )
}
