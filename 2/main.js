const counterTotal = document.querySelector('.counter_total-text'); // @type { HTMLSpanElement }
const addOneButton = document.querySelector('.counter_add-one_button'); // @type { HTMLButtonElement }
const lowerOneButton = document.querySelector('.counter_lower-one_button'); // @type { HTMLButtonElement }
const state = {
    total: 0
}

addOneButton.onclick = () => {
    changeState({
        type: 'INCREMENT', 
        state
    })
}
lowerOneButton.onclick = () => {
    changeState({
        type: 'DICREMENT', 
        state
    })
}


function changeState({type, state}){
    switch(type){
        case 'INCREMENT':
            state.total++;
            break;
        case "DICREMENT":
            state.total--;
            break;
    }

    setUpdatedValue(state.total);
}

function setUpdatedValue(updatedValue){
    if(typeof updatedValue !== 'number') return;

    counterTotal.textContent = updatedValue;
    let counterTotalUpdatedClasses = checkNumber(updatedValue);
    setNewClasses(counterTotalUpdatedClasses);
}

function setNewClasses(classes){
    counterTotal.classList = classes;
};

function checkNumber(number){
    if(number > 0) return 'counter_total-text positive_integer';
    else if(number < 0) return 'counter_total-text negative_integer'

    return 'counter_total-text zero'
}