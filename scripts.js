function createSquares() {
    document.querySelector('.screen').innerHTML = ''
    for (let i = 0; i < (size*size); i++) {
        let square = document.createElement('div')
        square.classList = 'inner-square ' + square_size
        square.id = `square${i}`
        square.style.backgroundColor = 'rgb(255, 255, 255)'
        document.querySelector('.screen').appendChild(square)
    }
    return document.querySelectorAll('.inner-square')
}


function flip(){
    squares.forEach((square) => {
        square.addEventListener("mouseover", function(e) {
            if (e.target.style.backgroundColor == 'black') {
                e.target.style.backgroundColor = 'rgb(255,255,255)'
            }
            else {
                e.target.style.backgroundColor = 'black'
            }
            
        })
    })
}


function darken(){
    squares.forEach((square) => {
        square.addEventListener("mouseover", function(e) {
            let color = parseInt(e.target.style.backgroundColor.substring(4, 7))
            color -= 25.5
            e.target.style.backgroundColor = `rgb(${color}, ${color}, ${color})`
            })                
    })
}


function crazy() {
    squares.forEach((square) => {
        square.addEventListener("mouseover", function(e) {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            e.target.style.backgroundColor = "#" + randomColor
            })                
    })
}


function updateButtons() {
    btns = document.querySelectorAll('button')
    btns.forEach((btn) => {
        if (btn.id == '#' + color_selection || btn.id == '#' + size_selection) {
            btn.classList = 'selected'
        }
        else{
            btn.classList = ''
        }
    })
    
}

function buttonPress(btnPressed) {
    switch (btnPressed) {
        case '#darken':
            color_selection = 'darken'
            break;
        case '#crazy':
            color_selection = 'crazy'
            break;
        case '#flip':
            color_selection = 'flip'
            break;
        case '#low':
            size_selection = 'low'
            square_size = 'large-square'
            size = 12
            break;
        case '#med':
            size_selection = 'med'
            square_size = 'med-square'
            size = 24
            break;
        case '#high':
            size_selection = 'high'
            square_size = 'small-square'
            size = 48
            break;
    }
}


let square_size = 'med-square'
let size = 24
let size_selection = 'med'
let color_selection = 'flip'
let squares = createSquares() 
flip()
updateButtons()
let buttons = document.querySelectorAll('button')
    
buttons.forEach((btn) => {
    console.log(btn.id)
    btn.addEventListener("click", function(e) {
        buttonPress(e.target.id)
        squares = createSquares()
        switch (color_selection) {
            case 'darken':
                darken()
                break;
            case 'crazy':
                crazy()
                break;
            case 'flip':
                flip()
                break;
        }
        updateButtons()
    })
})



