//year functionality
let date = document.querySelector('#date')
let currentYear = new Date().getFullYear()
date.textContent = currentYear

let menuBar = document.querySelector('.menu-bar')
let closeBar = document.querySelector('.close-bar')
let menuContainer = document.querySelector('.menu-container')

menuBar.addEventListener('click', () => {
  menuContainer.classList.add('show-menu-container')
})
closeBar.addEventListener('click', () => {
  menuContainer.classList.remove('show-menu-container')
})

let navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
  let pageHeight = window.pageYOffset
  // console.log(pageHeight)
  if (pageHeight > 466) {
    navbar.classList.add('fixed-nav')
  } else {
    navbar.classList.remove('fixed-nav')
  }
  // console.log(window.pageYOffset)
})
