import React from 'react'
import { CirculatContainer, SvgContainer, SvgText } from './styles/style'
import { motion } from 'framer-motion'

export default function CircularText(): JSX.Element {
  return (
    <CirculatContainer>
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          ease: 'linear',
          duration: 15,
          repeat: Infinity,
        }}
      >
        <SvgContainer viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <path
              fill="#1E1E1E"
              id="circlePath"
              d="M 50, 50 m -50, 0 a 50,50 0 1,0 100,0 a 50,50 0 1,0 -100,0"
            />
          </defs>
          <text
            fill={
              window.localStorage.getItem('theme') !== 'light'
                ? '#F4F5F1'
                : '#1E1E1E'
            }
          >
            <SvgText xlinkHref="#circlePath">
              Github - Linkedin - Bento -
            </SvgText>
          </text>
        </SvgContainer>
      </motion.div>
    </CirculatContainer>
  )
}
