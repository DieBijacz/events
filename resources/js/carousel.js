import { callFunctionXTimes } from './utilities.js'

const DELEY_TRANSFORM_ALL_CELLS = 300
const DELEY_TRANSFORM_EACH_CELL = 100
const SPIN_SPEED = 200

export function carousel() {
  const cells = document.querySelectorAll('.carousel-cell')
  const carousel = document.querySelector('.carousel')
  const carouselContainer = document.querySelector('.carousel-container')
  let rotateValue = 0

  animateEnterCarousel()

  function animateEnterCarousel() {
    carousel.style.animation = `spin 5s cubic-bezier(1, -0.01, .64, 1) forwards`
    carousel.addEventListener('animationend', () => {
      carousel.style.animation = ''
      carousel.addEventListener('mouseenter', handleMouseEnter)
    }, { once: true })
  }

  function handleMouseEnter() {
    carousel.addEventListener('wheel', scrollCarousel)
  }

  function handleMouseLeave() {
    carousel.removeEventListener('wheel', scrollCarousel)
  }

  function scrollCarousel(e) {
    const delta = e.deltaY > 0 ? 1 : -1;
    delta > 0 ? rotateValue = rotateValue + 2 : rotateValue -= 2
    carousel.style.transform = `rotateY(${rotateValue}deg)`
  }

  buildCarouselCells(cells)
}

function buildCarouselCells(cells) {
  const CELLS_COUNT = cells.length
  const CELL_SIZE = 150
  const CELL_ANGLE = 360 / CELLS_COUNT
  const radius = Math.round((CELL_SIZE / 2) / Math.tan(Math.PI / CELLS_COUNT))

  if (cells.length > 3) {
    setTimeout(() => {
      callFunctionXTimes(transformCell, cells.length, DELEY_TRANSFORM_EACH_CELL)
    }, DELEY_TRANSFORM_ALL_CELLS);
  }

  function transformCell(index) {
    const cell = cells[index]
    const angle = CELL_ANGLE * (index + 2)
    cell.style.transform = `rotateY(${angle}deg) translateZ(${radius}px) rotateZ(-90deg)`
  }
}
