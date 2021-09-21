import Card from './ui/Card'
import { useMutation } from 'react-apollo'
import { DELETE_RECIPE_MUTATION } from '../utils/queries'
import { useHistory } from 'react-router'
import moment from 'moment'

type propTypes = {
  _id: string
  name: string
  cookingTime: number
  createdAt: Date
}

export default function RecipePreview({ _id, name, cookingTime, createdAt }: propTypes) {
  const history = useHistory()

  const [deleteRecipe] = useMutation(DELETE_RECIPE_MUTATION)
  async function onDelete() {
    await deleteRecipe({ variables: { id: _id } })
    history.push('/')
  }

  return (
    <Card
      title={name}
      subtitle={`${createdAt ? moment(createdAt).fromNow() : ''}`}
      description={`${cookingTime} minutes`}
      category={name}
      buttonContent="Let's cook it!"
      targetPath={`/recipes/${_id}`}
      onDelete={onDelete}
    ></Card>
  )
}
