import React from 'react'
import Typography from '../atoms/Typography'
import { SubPlace, TitlePlace } from './styles/style'

export default function Title(): JSX.Element {
  return (
    <>
      <TitlePlace>
        <Typography variant="h1" content="Mathieu" />
      </TitlePlace>
      <SubPlace>
        <Typography variant="h2" content="Dacheux" />
      </SubPlace>
    </>
  )
}
