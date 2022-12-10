import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    black: '#000000',
    white: '#ffffff',
  },
  bg: {
    black: '#000000',
    white: '#ffffff',
    button: 'blue.400',
  },
  fonts: {
    body: '"Helvetica Neue",Arial,"Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-seri',
    text: 'YuMincho',
  },
  lineHeights: {
    taller: 1.8,
  },
  shadows: {
    outline: '0 0 0 3px var(--chakra-colors-blue-200)',
  },
  styles: {
    global: {
      body: {
        lineHeight: 'var(--chakra-lineHeights-taller)',
        overflowY: 'scroll',
      },
    },
  },
  breakpoints: {
    sm: '375px',
    md: '520px',
    lg: '960px',
    xl: '',
  },
})
export default theme
