import React from 'react'
import moon from '../../assets/moon.png'
import sun from '../../assets/sun.png'
import { ToggleImage, ToggleMode } from './styles/style'

interface ThemeTogglerProps {
  themeToggler: () => void
}

function TogglerButton({ themeToggler }: ThemeTogglerProps): JSX.Element {
  return (
    <>
      <ToggleMode onClick={themeToggler}>
        {window.localStorage.getItem('theme') !== 'light' ? (
          <ToggleImage
            src={sun}
            alt="Soleil permettant d'activer le mode jour"
          />
        ) : (
          <ToggleImage
            src={moon}
            alt="Lune permettant d'activer le mode sombre"
          />
        )}
      </ToggleMode>
    </>
  )
}

export default TogglerButton
