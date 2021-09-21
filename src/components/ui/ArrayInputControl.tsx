import { Box, Flex, Center, IconButton } from '@chakra-ui/react'
import { FieldArray } from 'formik'
import { InputControl } from 'formik-chakra-ui'
import { FormControlProps } from '@chakra-ui/react'
import { DeleteIcon, AddIcon } from '@chakra-ui/icons'

import { Recipes } from '../../utils/types'
interface BaseProps extends FormControlProps {
  name: string
  label?: string
  helperText?: string
}
type InputValueProps = string | Recipes.Ingredient

type InputControlProps = BaseProps & {
  inputRows?: string[] | Recipes.Ingredient[]
  defaultRow: InputValueProps
}

type InputRowProps = Recipes.Ingredient & { id: number; name: string }

function ObjectInputRow({ name, id, ...fields }: InputRowProps) {
  return (
    <Flex flex="1">
      {Object.entries(fields).map(([fieldName], index) => (
        <InputControl key={`name.${index}.${fieldName}`} name={`${name}.${id}.${fieldName}`} />
      ))}
    </Flex>
  )
}
export default function ArrayInputcontrol(props: InputControlProps) {
  const { name, label, inputRows, defaultRow } = props
  if (inputRows.length === 0) {
    return <div></div>
  }
  const isString: Boolean = typeof inputRows[0] === 'string'
  return (
    <Box>
      <FieldArray name={name}>
        {({ push, remove }) => (
          <Box>
            <Flex>
              <Center borderWidth="4px" px="3" align="center">
                -
              </Center>
              {isString ? (
                <Center flex="1" borderWidth="3px" px="3" align="center">
                  {label}
                </Center>
              ) : (
                Object.keys(inputRows[0]).map((fieldTitle, index) => (
                  <Center key={`title-${index}`} flex="1" borderWidth="3px" px="3" align="center">
                    {fieldTitle}
                  </Center>
                ))
              )}
              <IconButton onClick={() => push(defaultRow)} aria-label="add row" icon={<AddIcon />}>
                Add Row
              </IconButton>
            </Flex>
            {inputRows.map((rowData: InputValueProps, index: number) => (
              <Flex key={`input-row-${index}`}>
                <Center borderWidth="3px" px="3" align="center">
                  {index + 1}
                </Center>
                {typeof rowData === 'string' ? (
                  <InputControl name={`${name}.${index}`} label="" />
                ) : (
                  <ObjectInputRow name={name} id={index} {...rowData} />
                )}
                <IconButton onClick={() => remove(index)} aria-label="delete row" icon={<DeleteIcon />} />
              </Flex>
            ))}
          </Box>
        )}
      </FieldArray>
    </Box>
  )
}
