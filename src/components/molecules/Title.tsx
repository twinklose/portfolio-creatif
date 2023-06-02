import React from 'react'
import Typography from '../atoms/Typography'
import { useTrail, animated } from '@react-spring/web'
import { TitleBlock } from './styles/style'

export default function Title(): JSX.Element {
  const items = ['Mathieu', 'Dacheux']
  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: 'translate3d(0, 100%, 0)', with: '100%' },
    to: { opacity: 1, transform: 'translate3d(0, 0%, 0)', with: '100%' },
  })

  return (
    <TitleBlock>
      {trail.map((props, index) => (
        <animated.div key={index} style={props}>
          {index === 0 ? (
            <Typography content={items[index]} variant={'h1'} />
          ) : (
            <Typography content={items[index]} variant={'h2'} />
          )}
        </animated.div>
      ))}
    </TitleBlock>
  )
}
