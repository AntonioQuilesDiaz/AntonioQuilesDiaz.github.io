module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        bordeimage: '#ffeac7'
      },
      keyframes:{

        fadeSlideRight: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeSlideRight: 'fadeSlideRight 3s',
      },
      /*boxShadow: {
        'lateral-h3': '0px 1px 0px #393d3f, 1px 2px 0px #393d3f, 2px 3px 0px #393d3f, 3px 4px 0px #393d3f'
      }*/
      },
      height:{
        'formulario': '400px',
        'input': '50px'
      },
      boxShadow: {
        'sombra': '10px 10px 40px -0px #1DF1F1)',
        'sombrahome': '0px 0px 25px -0px #1DF1F1'
      }
    },
  variants: {
    extend: {
      animation: ['responsive', 'hover', 'group-hover'],
      fontSize:['responsive', 'hover', 'group-hover'],
      transform:['responsive', 'hover', 'group-hover'],
      scale:['responsive', 'hover', 'group-hover'],
      borderColor: ['responsive', 'hover', 'group-hover','focus'],
    },
  },
  plugins: [],
}
