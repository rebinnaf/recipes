import Card from './ui/Card'

type propTypes = {
  _id: string
  name: string
  cookingTime: number
  createdAt: number
}

export default function RecipePreview({ _id, name, cookingTime, createdAt }: propTypes) {
  return (
    <Card
      title={name}
      subtitle={`${createdAt}`}
      description={`${cookingTime} minutes`}
      category={name}
      buttonContent="Let's cook it!"
      targetPath={`recipes/${_id}`}
    ></Card>
  )
}
