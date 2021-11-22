const { colors } = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["components/**/*.tsx", "lib/**/*.tsx", "pages/**/*.tsx"],
  theme: {
    colors: { ...colors, primary: colors.orange },
    fontFamily: {
      sans: ["Fira Code", "monospace"],
      // serif: ['Merriweather', 'serif'],
    },
  },
  variants: {},
  plugins: [],
}
