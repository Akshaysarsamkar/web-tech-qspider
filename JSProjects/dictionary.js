const word = document.getElementById('word');
const partOfSpeech = document.getElementById('noun');
const meaning = document.getElementById('meaning')
const example = document.getElementById('example')
const antonym = document.getElementById('antonym')
const moreinfo = document.querySelector('#moreinfo')
let notFound = document.querySelector('#notFound')
const btn = document.getElementById('searchBtn')
console.log(btn)

let show = document.querySelector('.show-meaning')

async function searchMeaning() {



    const inputText = document.querySelector('.input-box').value
    console.log(inputText)

    let api = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputText}`

    let searchWord = await (await fetch(api)).json()

    console.log(searchWord)

    if (searchWord.title == 'No Definitions Found') {
        show.style.display = 'none';
    } else {
        let def = searchWord[0].meanings[0].definitions[0];
        word.innerHTML = `Word:  ${searchWord[0].word}`
        partOfSpeech.innerHTML = `partOfSpeech:  ${searchWord[0].meanings[0].partOfSpeech}`
        meaning.innerHTML = `Meaning:  ${def.definition === undefined ? "Not Found" : def.definition}`

        example.innerHTML = `Example:  ${def.example === undefined ? "Not Found" : def.example}`

        if (def.antonyms.length != 0) {
            for (let i = 0; i < def.antonyms.length; i++) {
                antonym.innerHTML += `${def.antonyms[i]}, `
            }
        } else {
            antonym.innerHTML = 'Antonyms: Not Found'
        }

        moreinfo.innerHTML = ` <a href="${searchWord[0].sourceUrls}" id="moreinfo" target="_blank">Read More</a>`
        show.style.display = 'flex';
    }

}


btn.addEventListener('click', () => {
    searchMeaning()
})
