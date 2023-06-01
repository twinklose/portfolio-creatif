import React from 'react'

interface ThemeTogglerProps {
  themeToggler: () => void
}

function TogglerButton({ themeToggler }: ThemeTogglerProps): JSX.Element {
  return (
    <>
      <label htmlFor="checkbox" className="switch">
        <input
          id="checkbox"
          type="checkbox"
          onClick={themeToggler}
          onChange={() => false}
          checked={window.localStorage.getItem('theme') === 'light'}
        />
        <div>
          {window.localStorage.getItem('theme') !== 'light' ? (
            <>
              <button
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                dark
              </button>
            </>
          ) : (
            <>
              <button
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                light
              </button>
            </>
          )}
        </div>
      </label>
    </>
  )
}

export default TogglerButton
