interface SliderState {
    currentSlide: number,
    lastSlide: number | undefined,
    firstSlide: number
}

interface SliderAction {
    type: string,
    state: SliderState
}

const slidesContainer: HTMLDivElement | null = document.querySelector('.slides_container');
const nextSlideButton: HTMLButtonElement | null = document.querySelector('.next_slide-button');
const prevSlideButton: HTMLButtonElement | null = document.querySelector('.prev_slide-button');

const state: SliderState = {
    currentSlide: 0,
    lastSlide: slidesContainer?.children.length,
    firstSlide: 0
}

if (nextSlideButton) {
    nextSlideButton.onclick = () => {
        let nextSlideButtonAction: SliderAction = {
            type: "NEXT",
            state
        }
        changeCurrentSlide(nextSlideButtonAction)
    }
}

if (prevSlideButton) {
    prevSlideButton.onclick = () => {
        let prevSlideButtonAction: SliderAction = {
            type: "PREV",
            state
        }
        changeCurrentSlide(prevSlideButtonAction);
    }
}

function changeCurrentSlide(action: SliderAction): void {
    let type = action.type;
    if (action.state.lastSlide) {
        switch (type) {
            case "NEXT":
                action.state.currentSlide++;
                if (action.state.lastSlide === action.state.currentSlide) {
                    action.state.currentSlide = action.state.firstSlide
                }


                break;
            case "PREV":
                action.state.currentSlide--;
                if (action.state.currentSlide < action.state.firstSlide) {
                    action.state.currentSlide = action.state.lastSlide - 1
                }

                break;

        }
    }

    changeSlide(action.state.currentSlide);
}

function changeSlide(currentSlide: number): void {
    if (slidesContainer) {
        slidesContainer.style.marginLeft = `${currentSlide * -100}%`
    }
}