module.exports = {
  important: true,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  mode: 'layers',
  purge: {
    mode: 'layers',
    content: ['./src/**/*.html', './src/**/*.js'],
    layers: ['utilities'],
  },
  theme: {
    extend: {
      opacity: {
        '10': '.1',
        '20': '.2',
        '30': '.3',
        '40': '.4',
        '60': '.6',
        '70': '.7',
        '80': '.8',
        '90': '.9',
      },
      transformOrigin: {
        "0": "0%",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {borderColor: ["responsive", "hover", "focus", "focus-within"]},
  plugins: [],
}
