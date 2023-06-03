import React from 'react'
import { SvgArrow } from './styles/style'

export default function Arrow(): JSX.Element {
  return (
    <SvgArrow
      href="https://bento.me/mathieudchx"
      target="_blank"
      rel="noreferrer"
    >
      <svg
        width="60"
        height="60"
        viewBox="0 0 43 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.1193 13.7942L28.9232 13.7942L28.9232 24.5981"
          stroke={
            window.localStorage.getItem('theme') !== 'light'
              ? '#F4F5F1'
              : '#1E1E1E'
          }
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          width={60}
        />
        <path
          d="M13.7941 28.9232L28.7719 13.9454"
          stroke={
            window.localStorage.getItem('theme') !== 'light'
              ? '#F4F5F1'
              : '#1E1E1E'
          }
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          width={60}
        />
      </svg>
    </SvgArrow>
  )
}
