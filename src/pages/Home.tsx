import React from 'react'
import { FlexMain, MainStyled } from './styles/styles'
import Navbar from '../components/organisms/Navbar'
import { useTrail, animated } from '@react-spring/web'
import Title from '../components/molecules/Title'
import CircularButton from '../components/organisms/CircularButton'

export default function Home({
  themeToggler,
}: {
  themeToggler: () => void
}): JSX.Element {
  const trails = useTrail(1, {
    from: { opacity: 0, transform: 'translate3d(0, 100%, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0%, 0)' },
    delay: 1000,
  })
  return (
    <>
      <FlexMain>
        {trails.map((props, index) => (
          <animated.header key={index} style={props}>
            <Navbar themeToggler={themeToggler} />
          </animated.header>
        ))}
        <MainStyled>
          <CircularButton />
          <Title />
        </MainStyled>
      </FlexMain>
    </>
  )
}
