import { callFunctionXTimes } from './main.js'

const cells = document.querySelectorAll('.carousel-cell')
const carousel = document.querySelector('.carousel')

const DELEY_TRANSFORM_ALL_CELLS = 300
const DELEY_TRANSFORM_EACH_CELL = 100
const SCROLL_ROTATE_SPEED = 3

let rotateValue = 0

export function BuildCarousel() {
  buildCarouselCells()
  animateEnterCarousel()
}

function animateEnterCarousel() {
  carousel.style.animation = `spin 5s cubic-bezier(1, -0.01, .64, 1) forwards`
  carousel.addEventListener('animationend', () => {
    carousel.style.animation = ''
    carousel.addEventListener('wheel', scrollCarousel)
  }, { once: true })
}

function scrollCarousel(e) {
  const delta = e.deltaY > 0 ? 1 : -1;
  delta > 0 ? rotateValue = rotateValue + SCROLL_ROTATE_SPEED : rotateValue -= SCROLL_ROTATE_SPEED
  carousel.style.transform = `rotateY(${rotateValue}deg)`
}

function buildCarouselCells() {
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
