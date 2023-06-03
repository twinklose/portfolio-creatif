import React from 'react'
import { CirculatContainer, SvgText } from './styles/style'

export default function CircularText(): JSX.Element {
  return (
    <CirculatContainer>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <path
            fill="#1E1E1E"
            id="circlePath"
            d="M 50, 50 m -50, 0 a 50,50 0 1,0 100,0 a 50,50 0 1,0 -100,0"
          />
        </defs>
        <text fill="#1E1E1E">
          <SvgText xlinkHref="#circlePath">Github - Linkedin - Bento -</SvgText>
        </text>
      </svg>
    </CirculatContainer>
  )
}
