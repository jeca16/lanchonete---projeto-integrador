'use strict'

const openMenuBotao = document.getElementById('openMenu')
const closeMenuBtn = document.getElementById('close-menu-btn')
const menu = document.getElementById('menu')
const bodyChange = document.getElementById('body')


const openMenu = function () {
    menu.classlist.add('active')
    bodyChange.classlist.add('change')
}

const closeMenu = function () {
    menu.classList.remove('active')
    bodyChange.classList.remove('change')
}

openMenuBotao.addEventListener('click', openMenu)
closeMenuBtn.addEventListener('click', closeMenu)