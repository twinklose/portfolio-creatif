import React from 'react'
import {
  GridContainer,
  GridSubTitle,
  GridTitle,
  Gridi1,
  Hone,
  Description,
  Specification,
  TitleBlock,
  WorkName,
} from './styles/style'
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
          <GridContainer>
            <GridTitle>
              <Hone>Mathieu</Hone>
            </GridTitle>
            <GridSubTitle>
              <Hone>Dacheux</Hone>
            </GridSubTitle>
            <Gridi1>
              <WorkName>
                <Description>Développeur</Description>
              </WorkName>
              <Specification>
                <Description>Front-end</Description>
              </Specification>
            </Gridi1>
          </GridContainer>
        </animated.div>
      ))}
    </TitleBlock>
  )
}
