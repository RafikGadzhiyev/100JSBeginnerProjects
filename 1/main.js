// HARD SOLUTION

const SYMBOLS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
const generateColorButton = document.querySelector('.change_background-color-button');

const COLORLENGTH = 3;

try{

    if(SYMBOLS.length !== 16 || new Set(SYMBOLS).size !== 16){
        throw new SyntaxError('Expected array that contains 16 unique items');
    }

    if(COLORLENGTH !== 6 && COLORLENGTH !== 3){
        throw  new SyntaxError('Expected number that is valid for hex color!');
    }

    if(generateColorButton[Symbol.toStringTag] !== 'HTMLButtonElement'){
        throw new SyntaxError(`It's not a button node!`);
    }

    let generatedColor = '#';

    if(generatedColor.length === 0){
        generatedColor += '#';
    }

    generateColorButton.onclick = () => {
        generateColor();
        resetColor();
    }

    function generateColor(){
        for(let i = 0 ; i < COLORLENGTH; ++i){
            let generatedIndex = Math.floor(Math.random() * SYMBOLS.length);
            generatedColor += SYMBOLS[generatedIndex];
        }
        setColor();
    }

    function resetColor(){
        generatedColor = '#';
    }

    function setColor(){
        if(generatedColor.length === (1 + COLORLENGTH)){
            document.body.style.backgroundColor = generatedColor;
        }
    }
}catch(e){
    console.error(e);
}

// EASY SOLUTION

// const SYMBOLS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
// const COLORLENGTH = 6;
//
// const generateColorButton = document.querySelector('.change_background-color-button');
//
// let generatedColor = '#';
//
// generateColorButton.onclick = () => {
//     generateColor();
//     resetColor();
// }
//
// function generateColor(){
//     for(let i = 0 ; i < COLORLENGTH; ++i){
//         let generatedIndex = Math.floor(Math.random() * SYMBOLS.length);
//         generatedColor += SYMBOLS[generatedIndex];
//     }
//     setColor();
// }
//
// function resetColor(){
//     generatedColor = '#';
// }
//
// function setColor(){
//     if(generatedColor.length === 7){
//         document.body.style.backgroundColor = generatedColor;
//     }
// }
