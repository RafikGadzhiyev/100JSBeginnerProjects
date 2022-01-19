var counterTotal = document.querySelector('.counter_total-text');
var addOneButton = document.querySelector('.counter_add-one_button');
var lowerOnebutton = document.querySelector('.counter_lower-one_button');
var state = {
    total: 0
};
if (addOneButton) {
    addOneButton.onclick = function () {
        var addButtonAction = {
            type: "INCREMENT",
            state: state
        };
        updateCounterValue(addButtonAction);
    };
}
if (lowerOnebutton) {
    lowerOnebutton.onclick = function () {
        var lowerButtonAction = {
            type: "DICREMENT",
            state: state
        };
        updateCounterValue(lowerButtonAction);
    };
}
function updateCounterValue(action) {
    var actionType = action.type;
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
function setUpdatedValue(updatedValue) {
    if (counterTotal == null)
        return;
    counterTotal.textContent = "".concat(updatedValue);
    var updatedTotalClasses = getClasses(updatedValue);
    setClasses(updatedTotalClasses);
}
function getClasses(n) {
    if (n > 0)
        return 'counter_total-text positive_integer';
    else if (n < 0)
        return "counter_total-text negative_integer";
    return 'counter_total-text zero';
}
function setClasses(classes) {
    if (counterTotal === null)
        return;
    counterTotal.setAttribute('class', "".concat(classes));
}
