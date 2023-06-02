import React from 'react'
import { TitleBlock } from './styles/style'
import { useTrail, animated } from '@react-spring/web'

export default function Title(): JSX.Element {
  const trail = useTrail(1, {
    from: { opacity: 0, transform: 'translate3d(0, 100%, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0%, 0)' },
    delay: 1000,
  })
  return (
    <TitleBlock>
      {trail.map((props, index) => (
        <animated.div key={index} style={props}>
          <h1>
            Mathieu
            <br />
            Dacheux
          </h1>
        </animated.div>
      ))}
    </TitleBlock>
  )
}
