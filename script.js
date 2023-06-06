// DOG API
// https://dog.ceo/api/breeds/image/random

// .then - promises
// This makes our code - Asynchronous Programming
// as it takes time for these API calls to return, so meanwhile rest of the code gets executed
// means no longer linear

/*
console.log("Run First")

fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => console.log("Run Second", json))

console.log("Run Third")
*/

const image = document.getElementById("main_img")
const btn = document.getElementById("btn")

const replace = (input) =>
{
    image.src = input
}

const getNewDog = () =>
{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => replace(json.message))
}

// for the initial image
getNewDog()

//for when the button is clicked
btn.onclick = () => getNewDog()

