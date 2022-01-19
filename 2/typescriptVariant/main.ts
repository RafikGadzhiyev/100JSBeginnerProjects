interface CounterState {
    total: number;
}

interface ButtonActionType {
    type: string,
    state: CounterState;
}

const counterTotal: HTMLSpanElement | null = document.querySelector('.counter_total-text');
const addOneButton: HTMLButtonElement | null = document.querySelector('.counter_add-one_button');
const lowerOnebutton: HTMLButtonElement | null = document.querySelector('.counter_lower-one_button');

const state: CounterState = {
    total: 0
}

if (addOneButton) {
    addOneButton.onclick = () => {
        const addButtonAction: ButtonActionType = {
            type: "INCREMENT",
            state
        }
        updateCounterValue(addButtonAction);
    }
}

if (lowerOnebutton) {
    lowerOnebutton.onclick = () => {
        const lowerButtonAction: ButtonActionType = {
            type: "DICREMENT",
            state
        }
        updateCounterValue(lowerButtonAction);
    }
}

function updateCounterValue(action: ButtonActionType) {
    let actionType: string = action.type;

    switch (actionType) {
        case "INCREMENT":
            action.state.total++;
            break;
        case "DICREMENT":
            action.state.total--;
            break;
    }

    setUpdatedValue(action.state.total);

}

function setUpdatedValue(updatedValue: number) {
    if (counterTotal == null) return;
    counterTotal.textContent = `${updatedValue}`

    let updatedTotalClasses = getClasses(updatedValue);
    setClasses(updatedTotalClasses);
}

function getClasses(n: number): string {
    if (n > 0) return 'counter_total-text positive_integer';
    else if (n < 0) return "counter_total-text negative_integer";

    return 'counter_total-text zero'
}

function setClasses(classes: string): void {
    if (counterTotal === null) return;
    counterTotal.setAttribute('class', `${classes}`)
}