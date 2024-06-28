function reload(array, place, component) {
    place.innerHTML = ""

    for (let item of array) {
        const box_cloth = component(item)
        place.append(box_cloth)
    }
}
