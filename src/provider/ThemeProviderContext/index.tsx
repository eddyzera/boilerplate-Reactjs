import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../../styles/global'
import { ThemeProviderProps } from './types'
import theme from '../../styles/theme'

const ThemeProviderContext: React.FC<ThemeProviderProps> = ({
  children
}: ThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default ThemeProviderContext
