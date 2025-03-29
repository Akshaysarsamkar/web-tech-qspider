let products = document.getElementById('productLists');
let showDesc = document.getElementById('productDescription');
let img = document.getElementById('img')
let info = document.getElementById('otherDetails')
let category = document.getElementById('category')
let price = document.getElementById('price')
let rating = document.getElementById('rating')
let desc = document.getElementById('desc')


async function SetProductList() {

    let res = await fetch('https://fakestoreapi.com/products')
    let data = await res.json()



    for (let obj of data) {
        console.log(obj)
        let li = document.createElement('li')
        li.innerHTML = obj.title




        li.addEventListener('click', () => {
            img.src = obj.image
            category.innerHTML = 'Category : ' + obj.category
            price.innerHTML = 'Price : ' + obj.price
            rating.innerHTML = 'Rating : ' + obj.rating.rate
            desc.innerHTML = 'Description : '+obj.description

        })


        products.append(li)


    }


}

SetProductList()