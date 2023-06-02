import React from 'react'
import Typography from '../atoms/Typography'
import { TitleBlock } from './styles/style'

export default function Title(): JSX.Element {
  return (
    <TitleBlock>
      <Typography variant="h1" content="Mathieu" />
      <Typography variant="h2" content="Dacheux" />
    </TitleBlock>
  )
}
