'use strict'

const openMenuBtn = document.getElementById('openMenu')
const closeMenuBtn = document.getElementById('closeMenu')
const menu = document.getElementById('menu')
const bodyChange = document.getElementById('body')

const openMenu = function () {
    menu.classList.add('active')
    bodyChange.classList.add('change')
}

const closeMenu = function () {
    menu.classList.remove('active')
    bodyChange.classList.remove('change')
}

openMenuBtn.addEventListener('click', openMenu)
closeMenuBtn.addEventListener('click', closeMenu)