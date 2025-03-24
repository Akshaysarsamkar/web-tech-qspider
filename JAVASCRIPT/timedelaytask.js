
let arr = ['../ASSEST/image (1).png', '../ASSEST/zomato-card1.avif', '../ASSEST/zomato-card2.avif', '../ASSEST/web-development1.png', '../ASSEST/mobile.avif', '../ASSEST/project1.jpg', '../ASSEST/vk.avif', 'https://cdn.pixabay.com/photo/2016/03/31/15/41/art-1293482__480.png', 'https://th.bing.com/th/id/R.ed5d008462783c1011e56658b5ab5c0e?rik=gXUotHUBkuvcwQ&riu=http%3a%2f%2fcliparts.co%2fcliparts%2fLcd%2fj8b%2fLcdj8bo9i.png&ehk=hPViabXZY4ZXA3K8WzH5vNKUfLssJo9dM7Heqjz718Q%3d&risl=&pid=ImgRaw&r=0'];
// // console.log(arr.length)
// let choiceRamdomImg = Math.trunc(Math.random() * arr.length) + 1;
// console.log(choiceRamdomImg)

// // let element = document.getElementById('images');

setInterval(() => {

    let choiceRamdomImg = Math.trunc(Math.random() * arr.length) + 1;
    console.log(choiceRamdomImg)

    let element = document.querySelector('img');
    console.log(element)
    element.src = arr[choiceRamdomImg];


}, 2000)

