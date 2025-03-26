
let text = document.getElementById('Text');
function ChangeBackgroundColorAndTextColor() {
    let background_color = ['red', 'green', 'blue', 'pink', 'darkred', 'salmon', 'lime', 'silver', 'brown', 'orange', 'peru', 'yellow', 'gold', 'aqua', 'violet', 'orchid', 'plum']
    let text_color = ['white', 'black', 'gray']

    let choiceColor = Math.trunc(Math.random() * background_color.length)
    console.log(background_color[choiceColor])


    let choiceTextColor = Math.trunc(Math.random() * text_color.length)
    console.log(text_color[choiceTextColor])
    document.body.style.backgroundColor = background_color[choiceColor];
    text.style.color = text_color[choiceTextColor];
}