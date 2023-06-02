import React from 'react'
import Typography from '../components/atoms/Typography'
import { MainStyled } from './styles/styles'

export default function Home(): JSX.Element {
  return (
    <MainStyled>
      <h1>Home</h1>
      <Typography content="Hello World" variant="h1" />
    </MainStyled>
  )
}
