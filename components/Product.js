function Product(item) {
    const box_cloth = document.createElement('div')
    const box_white = document.createElement('div')
    const img = document.createElement('img')
    const h1 = document.createElement('h1')
    const h6 = document.createElement('h6')
    const cost = document.createElement('div')

    const elem_one = document.createElement('div')
    const elem_two = document.createElement('div')
    const elem_three = document.createElement('div')

    const dollar = document.createElement('img')
    const star = document.createElement('img')
    const box = document.createElement('img')

    const dollar_a = document.createElement('a')
    const star_a = document.createElement('a')
    const box_a = document.createElement('a')

    const button = document.createElement('button')

    box_cloth.id = `selector_${item.id}`

    box_cloth.className = 'box_cloth'
    box_cloth.id = 'item.id'
    box_white.className = 'box_white'
    h1.className = 'h1'
    h6.className = 'h6'
    h1.innerHTML = item.category
    h6.innerHTML = item.description.length > 100 ? item.description.slice(0, 100) + "..." : item.description
    h6.title = item.description
    cost.className = 'cost'
    dollar.src = './public/svg/dollar.svg'
    star.src = './public/svg/star.svg'
    box.src = './public/svg/box.svg'
    dollar_a.className = 'a'
    star_a.className = 'a'
    box_a.className = 'a'
    dollar_a.innerHTML = item.price
    star_a.innerHTML = item.rating.rate
    box_a.innerHTML = item.rating.count
    button.className = 'btn_cloth'
    button.innerHTML = 'В избранное'
    img.src = item.image
    img.className = 'img_cloth'
    dollar.className = 'img_svg'
    star.className = 'img_svg'
    box.className = 'img_svg'
    box_cloth.append(box_white, h1, h6, cost, button)
    box_white.append(img)
    cost.append(elem_one, elem_two, elem_three)
    elem_one.append(dollar, dollar_a)
    elem_two.append(star, star_a)
    elem_three.append(box, box_a)
    
    button.onclick = () => {
        const selected = Boolean(cart.find(el => el.id === item.id))

        if (selected) {
            let idx = cart.indexOf(item)
            cart.splice(idx , 1)

            button.classList.remove('active-btn')
            button.innerHTML = 'В избрвнное'
        } else {
            button.classList.toggle('active-btn')
            button.innerHTML = 'Добавлено'
            cart.push(item)
        }
        total_view.innerHTML = cart.length
        cart_total = 0
        reload(cart, cart_cont, CartItem)
    }

    return box_cloth
}