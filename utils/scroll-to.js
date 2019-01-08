import animateScrollTo from 'animated-scroll-to'

export default function(event) {
  const to = event.target.hash ? document.querySelector(event.target.hash) : 0
  animateScrollTo(to)
}
