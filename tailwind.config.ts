import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans'],
        'agdasima': ['Agdasima']
      },
      colors: {
        'sig-green': '#425d44',
        'sig-accent': '#ffc01e',
        'sig-grey': '#373737',
        'sig-placeholder': '#ababab',
        'sig-whiteish': 'rgb(243, 243, 243)',
      },
      width: {
        '13': '3.25rem'
      }
    },
  },
}
