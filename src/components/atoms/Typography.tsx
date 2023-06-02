import React from 'react'
import { TypographyVariant } from './types'
import { SubStyled, TitleStyled, Vertical } from './styles/style'

export default function Typography({
  content,
  variant,
}: {
  content: string
  variant: TypographyVariant[number]
}): JSX.Element {
  switch (variant) {
    case 'h1':
      return <TitleStyled>{content}</TitleStyled>
    case 'h2':
      return <SubStyled>{content}</SubStyled>
    case 'p':
      return <p>{content}</p>
    case 'vertical':
      return <Vertical>{content}</Vertical>
    default:
      return <p>{content}</p>
  }
}
