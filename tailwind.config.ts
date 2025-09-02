import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans'],
        'agdasima': ['Agdasima']
      },
      colors: {
        'sig-yellow': '#ffd700',
        'sig-green': '#425d44',
        'sig-accent': '#ffc01e',
        'sig-grey': '#f3f3f3'
      },
    },
  },
}
