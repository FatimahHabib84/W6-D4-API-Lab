let url = "https://665736bb9f970b3b36c86669.mockapi.io/login"
let imgName = document.getElementById('imgName')
let imgSrc = document.getElementById('imgSrc')
let btn = document.getElementById('btn')
let container = document.getElementById('container')

async function postMethod(){
    let res = await fetch(url ,
    {
        method: 'POST',
        body: JSON.stringify({
            imageName: imgName.value,
            imageSrc: imgSrc.value
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await res.json()
}
async function getMethod(){
    let res = await fetch(url)
    let data = await res.json()
    data.forEach(element => {
    let imgContainer = document.createElement('div')
    let img = document.createElement('img')
    let deletebtn = document.createElement('button')
    imgContainer.setAttribute('class','imgContainer')
    deletebtn.setAttribute('class','deletebtn')
    deletebtn.innerText='delete this image'
    img.alt = element.imageName
    img.src = element.imageSrc
    container.append(imgContainer)
    imgContainer.append(img)
    imgContainer.append(deletebtn)

    // delete button
    deletebtn.addEventListener('click',async()=>{
        let res = await fetch(`https://665736bb9f970b3b36c86669.mockapi.io/login/${element.id}`, {
            method: 'DELETE',
        });
        console.log(res);
        let data = await res.json()
        // data.remove()
        window.location.reload()
        console.log(data)
    }
)
    
    })
}
getMethod()

// let deletebtn = document.getElementsByClassName('deletebtn')
// deletebtn.forEach((btn)=>{
//     btn.
//     console.log(btn);
// })
// for(let i=0 ; i<deletebtn.length ; i++){
    
    // newUrl = url+'/'+i
    







// let uname = document.getElementById('uname')
// let img = document.getElementById('img')
// let btn = document.getElementById('btn')

// async function postMethod(){
//     let res = await fetch('https://64ec45a2f9b2b70f2bfa0612.mockapi.io/logIn' , {
//         method: 'POST',
//         body: JSON.stringify({
//             username: uname.value,
//             image: img.src
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//           },
//     })
//     console.log(res);

//     let data = await res.json()
//     uname.innerText = data.username
//     img.src = data.image
//     console.log(data);
// }