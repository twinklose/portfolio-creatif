import React from 'react'
import CircularText from '../molecules/CircularText'
import Arrow from '../molecules/Arrow'
import { CircularButtonContainer } from './styles/style'

export default function CircularButton(): JSX.Element {
  return (
    <CircularButtonContainer>
      <CircularText />
      <Arrow />
    </CircularButtonContainer>
  )
}
