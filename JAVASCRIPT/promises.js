// // Promise

// // mock ------ pending
// // true ------ fulfilled
// // false ----- rejected

// let myPromise = new Promise((res,rej)=>{
//     let mock = false 
//     if(mock === true){
//         res('ThankYou For Attending the mock')
//     }else{
//         rej('Do Attend The Mock Without Fail')
//     }
// })

// console.log(myPromise) 

// // consuming the promise 
// // resolves
// myPromise.then((data)=>{console.log(data)})

// // reject 
// myPromise.catch((err)=>{console.log(data)}) 

// // finally
// myPromise.finally(()=>{console.log('All the Best.......')})


// async and await 

// async makes the function to return a promise 
// async function demo(){
//     return 'Hello';
// }

// console.log(demo()) 


// await makes a function to wait for the promise settlement 
async function getdata() {
     let res = await fetch('https://fakestoreapi.com/products')
     console.log(res)
     let data = await res.json()
     // console.log(data) 

     // let obj1 = data[0];
     // console.log(obj1) 
     // console.log(data[0].category)  

     for (let obj of data) {
          console.log(obj)

          // create div tag
          let div = document.createElement('div')

          // create h1 tag
          let h1 = document.createElement('h1');

          h1.innerHTML = obj.category;
          h1.setAttribute('class', 'h1')


          // create img tag
          let img = document.createElement('img')
          img.src = obj.image


          // create title 
          let h2 = document.createElement('h2')
          h2.innerHTML = obj.title


          // create id 
          let id = document.createElement('h1')
          id.innerHTML = obj.id 

          // description 
          let p = document.createElement('p')
          p.innerHTML = obj.description;

          // price
          let price = document.createElement('h3')

          price.innerHTML = obj.price

          document.body.appendChild(div);
          div.append(id)
          div.append(h1)
          div.append(h2)
          div.append(img)
          div.append(price)
          div.append(p)


     }
}

getdata()

