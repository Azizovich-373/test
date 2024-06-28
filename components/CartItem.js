function CartItem(item) {
    let quantity = 1
    cart_total += Number((item.price * quantity).toFixed(2))
    const basket = document.createElement('div')
    const left_basket = document.createElement('div')
    const right_basket = document.createElement('div')
    const img_basket = document.createElement('img')
    const nav_left = document.createElement('div')
    const name_prod = document.createElement('h3')
    const grid_prod = document.createElement('div')
    const mines = document.createElement('button')
    const many = document.createElement('div')
    const plus = document.createElement('button')
    const price = document.createElement('p')
    const remove = document.createElement('button')

    basket.className = 'basket'
    left_basket.className = 'left_basket'
    right_basket.className = 'right_basket'
    img_basket.className = 'img_basket'
    nav_left.className = 'nav_left'
    name_prod.className = 'name_prod'
    grid_prod.className = 'grid_prod'
    mines.className = 'mines'
    many.className = 'many'
    plus.className = 'plus'
    price.className = 'price'
    remove.className = 'remove'
    name_prod.innerHTML = item.title.length > 30 ? item.title.slice(0, 30) + "..." : item.title
    mines.innerHTML = '-'
    many.innerHTML = quantity
    plus.innerHTML = '+'
    price.innerHTML = item.price  
    remove.innerHTML = 'Remove'
    img_basket.src = item.image
    basket.append(left_basket,right_basket)
    left_basket.append(img_basket,nav_left)
    nav_left.append(name_prod,grid_prod)
    grid_prod.append(mines,many,plus)
    right_basket.append(price,remove)

    mines.onclick = () => {
        if (quantity > 0) {
            quantity--
            many.innerHTML = quantity
            calc_total_amount('mines')
        }
    }
    plus.onclick = () => {
        if (quantity < item.rating.count) {
            quantity++
            many.innerHTML = quantity
            calc_total_amount('plus')
            return
        }

        alert('B наличии больше нет!')
    }
    remove.onclick = () => {
        const idx = cart.indexOf(item)
        const total_view = document.querySelector('#total_view')
        const product_div = document.querySelector(`#selector_${item.id}`)
        const btn = product_div.querySelector('.btn_cloth')
        
        btn.innerHTML = 'В избранное'
        btn.classList.remove('active-btn')

        cart.splice(idx,1)
        basket.remove()
        total_view.innerHTML = cart.length
    }

    function calc_total_amount(param) {
        const total_all = document.querySelector('.total') 
        price.innerHTML = (item.price * quantity).toFixed(2)
        if (param === 'plus') {
            cart_total += Number(item.price.toFixed(2)) 
        } else {
            cart_total -= Number(item.price.toFixed(2)) 
        }
        total_all.innerHTML = Number(cart_total.toFixed(2))
    }
    
    return basket
}