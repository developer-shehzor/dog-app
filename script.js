// https://dog.ceo/api/breeds/image/random

const dogImg = document.getElementById('dogImage')
const dogButton = document.getElementById('dogButton')

const getNewDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(json => {
    dogImg.innerHTML = `<img src='${json.message}' height=300 width=300/>`
})
}



dogButton.onclick = () => getNewDog()

 