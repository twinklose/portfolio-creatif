import React from 'react'
import { TypographyVariant } from './types'

export default function Typography({
  content,
  variant,
}: {
  content: string
  variant: TypographyVariant[number]
}): JSX.Element {
  switch (variant) {
    case 'h1':
      return <h1>{content}</h1>
    case 'p':
      return <p>{content}</p>
    case 'vertical':
      return (
        <p
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'upright',
            fontSize: '1rem',
          }}
        >
          {content}
        </p>
      )
    default:
      return <p>{content}</p>
  }
}
