const slides = document.querySelectorAll(".slide")

const prevBtn = document.querySelector(".prev");

const nextBtn = document.querySelector(".next");

var counter = 0;

console.log(slides);

slides.forEach(

    (slide, index) => {

        slide.style.left = `${index * 100}%`;

    }

)

const slideImage = () => {

    slides.forEach(

        (slide) => {

            slide.style.transform = `translateX(-${counter * 100}%)`

        }

    )

}

const updateNextPrevBtns = () => {

    console.log(counter);

    if(counter == 3)
    {

        nextBtn.disabled = true;

    }else{

        nextBtn.disabled = false;

    }

    if(counter == 0)
    {

        prevBtn.disabled = true;

    }else{

        prevBtn.disabled = false;

    }

}

const gotToNext = () => {

    counter++;

    slideImage();

    updateNextPrevBtns()

}

const gotToPrev = () => {

    counter--;

    slideImage();

    updateNextPrevBtns();

}