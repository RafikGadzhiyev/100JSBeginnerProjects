const slidesContainer = document.querySelector('.slides_container');
const nextSlideButton = document.querySelector('.next_slide-button');
const prevSlideButton = document.querySelector('.prev_slide-button');

const state = {
    currentSlide: 0,
    lastSlide: slidesContainer.children.length,
    firstSlide: 0
}

nextSlideButton.onclick = () => {
    changeSlide({
        type: "NEXT",
        state
    })
}

prevSlideButton.onclick = () => {
    changeSlide({
        type: "PREV",
        state
    })
}

function changeSlide({type, state}){
    switch(type){
        case 'NEXT':
            if(state.currentSlide == state.lastSlide - 1){
                state.currentSlide = state.firstSlide;
            }else{
                state.currentSlide ++;
            }
            break;
        case "PREV": 
            if(state.currentSlide < state.firstSlide){
                state.currentSlide = state.lastSlide - 1;
            }else{
                state.currentSlide--;
            }
            break;
    }

    changeCurrentSlide(state.currentSlide);
}

function changeCurrentSlide(currentSlide){
    slidesContainer.style.marginLeft = `${currentSlide * -100}%`
}