const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () =>{
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () =>{
    wrapper.classList.toggle('active');
});