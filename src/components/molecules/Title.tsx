import React from 'react'
import Typography from '../atoms/Typography'
import { TitleBlock } from './styles/style'
import { useTrail, animated } from '@react-spring/web'

export default function Title(): JSX.Element {
  const trail = useTrail(2, {
    from: { opacity: 0, transform: 'translate3d(0, 100%, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0%, 0)' },
    delay: 1000,
  })
  return (
    <TitleBlock>
      {trail.map((props, index) => (
        <animated.div key={index} style={props}>
          {index === 0 ? (
            <Typography variant="h1" content="Mathieu" />
          ) : (
            <Typography variant="h2" content="Dacheux" />
          )}
        </animated.div>
      ))}
    </TitleBlock>
  )
}
