function createLayout() {
    const elem = document.querySelector('.grid');
    new Masonry( elem, {
      itemSelector: '.grid-item',
      gutter: 10
    });
}

const cache = {}
const errorElement = document.querySelector('p')

function setGridItemsCount(){
    let count = Number(document.getElementById('count').value)
    
    if (!Number.isInteger(count) || count < 0) {
        return errorElement.innerText = 'Введите валидное число'
    }

    if (errorElement.innerText) errorElement.innerText = ''
    if (cache.lastCount === count) return

    if (cache[count]) {
        document.querySelector('.grid').innerHTML = cache[count]
    } else {
        let template = ''
        for (let i = 0; i < count; i++) {
            template += `
            <div class="grid-item"></div>`
        }
        cache[count] = template
        document.querySelector('.grid').innerHTML = template
    }
    
    cache.lastCount = count
    createLayout()
}
