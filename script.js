//year functionality
let date = document.querySelector('#date')
let currentYear = new Date().getFullYear()
date.textContent = currentYear

let menuBar = document.querySelector('.menu-bar')
let closeBar = document.querySelector('.close-bar')
let menuContainer = document.querySelector('.menu-container')
let navbar = document.querySelector('.navbar')

menuBar.addEventListener('click', () => {
  let menuHas = menuContainer.classList.contains('show-menu-container')
  if (!menuHas) {
    menuContainer.classList.add('show-menu-container')
    menuContainer.style.top = window.scrollY + 'px'
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    navbar.classList.remove('fixed-nav')
  } else {
    menuContainer.classList.remove('show-menu-container')
    document.body.style.overflow = 'auto'
    document.documentElement.style.overflow = 'auto'
  }
})

closeBar.addEventListener('click', () => {
  menuContainer.classList.remove('show-menu-container')
  document.body.style.overflow = 'auto'
  document.documentElement.style.overflow = 'auto'
})

window.addEventListener('scroll', () => {
  console.log(window.pageYOffset)
  let menuHas = menuContainer.classList.contains('show-menu-container')

  let pageHeight = window.pageYOffset
  if (pageHeight > 884 && !menuHas) {
    navbar.classList.add('fixed-nav')
  } else {
    navbar.classList.remove('fixed-nav')
  }
})
