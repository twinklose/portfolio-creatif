import React from 'react'
import Typography from '../atoms/Typography'
import { useTrail, animated } from '@react-spring/web'

export default function Title(): JSX.Element {
  const items = ['Mathieu', 'Dacheux']
  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: 'translate3d(0, 100%, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0%, 0)' },
  })

  return (
    <>
      {trail.map((props, index) => (
        <animated.div key={index} style={props}>
          <Typography
            content={items[index]}
            variant={index === 0 ? 'h1' : 'h2'}
          />
        </animated.div>
      ))}
    </>
  )
}
