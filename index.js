const cont = document.querySelector('.container')
const five = document.querySelector('.btn_one')
const all = document.querySelector('.btn_two')
const menu = document.querySelector('.btn_three')
const close = document.querySelector('.close')
const dialog = document.querySelector('.dialog')
const btn_cloth = document.querySelector('.btn_cloth')
const cart_cont = document.querySelector('.box_basket')
let cart_total = 0
let cart = []

reload(arr, cont, Product)
reload(cart, cart_cont, CartItem)
five.onclick = () => {
    reload(arr.slice(0,5), cont, Product)
}
all.onclick = () => {
    reload(arr, cont, Product)
}
menu.onclick = () => {
    dialog.show()
}
close.onclick = () => {
    dialog.close()
}
