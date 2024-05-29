url = "https://fakestoreapi.com/products"
let container = document.getElementsByClassName('container')[0]
async function getData () {
    let res = await fetch(url)
    json = await res.json()
    json.forEach(product => {
        let div = document.createElement('div')
        let productName = document.createElement('h2')
        let productImg = document.createElement('img')
        let productPrice = document.createElement('p')
        productName.innerText = product.title
        productImg.src = product.image
        productPrice.innerText = product.price +"$"
        div.append(productName,productImg,productPrice)
        container.append(div)
    });
    console.log(json);
}
getData ()