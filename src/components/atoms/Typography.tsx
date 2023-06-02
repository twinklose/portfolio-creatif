import React from 'react'
import { TypographyVariant } from './types'
import { Vertical } from './styles/style'

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
      return <Vertical>{content}</Vertical>
    default:
      return <p>{content}</p>
  }
}
