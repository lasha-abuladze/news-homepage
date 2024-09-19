`use strict`


const menuBtn = document.querySelector(`.menu-btn`);
const cancelBtn = document.querySelector(`.cancel-btn`);

const nav = document.querySelector(`.nav`);
const backgroudnBlur = document.querySelector(`.blur`)


menuBtn.addEventListener(`click`, () => {
    nav.classList.add(`navAnimationShow`)
    nav.classList.remove(`navAnimationHide`)

    backgroudnBlur.classList.add(`display-block`)

})

cancelBtn.addEventListener(`click`, () => {
    nav.classList.remove(`navAnimationShow`)
    nav.classList.add(`navAnimationHide`)

    backgroudnBlur.classList.remove(`display-block`)
})