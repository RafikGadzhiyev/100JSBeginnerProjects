var slidesContainer = document.querySelector('.slides_container');
var nextSlideButton = document.querySelector('.next_slide-button');
var prevSlideButton = document.querySelector('.prev_slide-button');
var state = {
    currentSlide: 0,
    lastSlide: slidesContainer === null || slidesContainer === void 0 ? void 0 : slidesContainer.children.length,
    firstSlide: 0
};
if (nextSlideButton) {
    nextSlideButton.onclick = function () {
        var nextSlideButtonAction = {
            type: "NEXT",
            state: state
        };
        changeCurrentSlide(nextSlideButtonAction);
    };
}
if (prevSlideButton) {
    prevSlideButton.onclick = function () {
        var prevSlideButtonAction = {
            type: "PREV",
            state: state
        };
        changeCurrentSlide(prevSlideButtonAction);
    };
}
function changeCurrentSlide(action) {
    var type = action.type;
    if (action.state.lastSlide) {
        switch (type) {
            case "NEXT":
                action.state.currentSlide++;
                if (action.state.lastSlide === action.state.currentSlide) {
                    action.state.currentSlide = action.state.firstSlide;
                }
                break;
            case "PREV":
                action.state.currentSlide--;
                if (action.state.currentSlide < action.state.firstSlide) {
                    action.state.currentSlide = action.state.lastSlide - 1;
                }
                break;
        }
    }
    changeSlide(action.state.currentSlide);
}
function changeSlide(currentSlide) {
    if (slidesContainer) {
        slidesContainer.style.marginLeft = "".concat(currentSlide * -100, "%");
    }
}
