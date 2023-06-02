import React from 'react'
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
          <p>Contact</p>
        </MainStyled>
      </FlexMain>
    </>
  )
}
