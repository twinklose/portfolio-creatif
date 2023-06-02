import React from 'react'
import { FlexMain, MainStyled } from './styles/styles'
import Navbar from '../components/organisms/Navbar'
import Title from '../components/molecules/Title'

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
          <Title />
        </MainStyled>
      </FlexMain>
    </>
  )
}
