import React from 'react'
import Typography from '../components/atoms/Typography'
import { FlexMain, MainStyled } from './styles/styles'
import Navbar from '../components/organisms/Navbar'

export default function Home({
  themeToggler,
}: {
  themeToggler: () => void
}): JSX.Element {
  return (
    <>
      <FlexMain>
        <Navbar themeToggler={themeToggler} />
        <MainStyled>
          <Typography content="A propos" variant="h1" />
        </MainStyled>
      </FlexMain>
    </>
  )
}
