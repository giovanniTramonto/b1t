export const state = () => ({
  slides: [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ]
})

export const getters = {
  portfolioSlides: state =>
    state.slides.map(name => ({
      default: `images/portfolio/${name}.jpg`
    }))
}
