import React from 'react'
import CircularText from '../molecules/CircularText'
import Arrow from '../molecules/Arrow'
import { CircularButtonContainer } from './styles/style'
import { useTrail, animated } from '@react-spring/web'

export default function CircularButton(): JSX.Element {
  const trails = useTrail(1, {
    from: { opacity: 0, transform: 'translate3d(0, 100%, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0%, 0)' },
    delay: 1000,
  })
  return (
    <>
      {trails.map((props, index) => (
        <animated.div key={index} style={props}>
          <CircularButtonContainer>
            <CircularText />
            <Arrow />
          </CircularButtonContainer>
        </animated.div>
      ))}
    </>
  )
}
