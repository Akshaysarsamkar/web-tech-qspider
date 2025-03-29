let btn = document.forms[0];
let add = document.getElementById('addSection')

console.log(add)



btn.addEventListener('submit', (e) => {
    e.preventDefault()
    let data = document.getElementById('data')
    console.log(data.value)

    let section = document.createElement('section');
    section.setAttribute('class', 'showdata');

    let div = document.createElement('div')
    div.setAttribute('class', 'inputdata')

    let input = document.createElement('input')
    input.placeholder = data.value;

    let btn = document.createElement('button');
    btn.innerHTML = 'Remove'


    btn.addEventListener('click',()=>{
        section.remove();
    })


    div.append(input,btn)
    section.append(div);
    add.append(section)

    data.value = '';
})