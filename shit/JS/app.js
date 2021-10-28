const signUp = document.querySelector('.sign-up');
const exit = document.querySelector('.exit');
const signUpModal = document.querySelector('.sign-up-modal-container');
const body = document.querySelector('body');
const signUpExit = document.querySelector('.sign-up-exit');
const head = document.getElementsByTagName('HEAD')[0];
const link = document.createElement('link');
const settings = document.getElementById('gear');
const settingsExit = document.querySelector('.settings-exit')
const settingsModal = document.querySelector('.settings-container')
const signIn = document.querySelector('.sign-in');



$(document).ready(() => {


    $('.sign-in').click(function() {
        // modal.classList.add('sign-in-show');
        $('.sign-in-modal-container').toggle('slow');
    });

    $('.exit').click(function() {
        $('.sign-in-modal-container').hide('slow');;
    });

    $('#gear').click(function() {
        $('.settings-container').slideDown('slow');
    });

    $('.settings-exit').click(function() {
        $('.settings-container').slideUp('slow');
    });

    $('.sign-up').click(function() {
        $('.sign-up-modal-container').slideDown('slow');
        body.classList.add('overflow');
        signUp.classList.add('hide');
        signIn.classList.add('hide');
    });

    $('.not-a-member').click(function() {
        $('.sign-up-modal-container').slideDown('slow');
        body.classList.add('overflow');
        signUp.classList.add('hide');
        signIn.classList.add('hide');
    });

    $('.sign-up-exit').click(function() {
        $('.sign-up-modal-container').slideUp('slow');
        body.classList.remove('overflow');
        signUp.classList.remove('hide');
        signIn.classList.remove('hide');
    });
})

// signUp.addEventListener('click', () => {
//     signUpModal.classList.add('show');
//     body.classList.add('overflow');
//     signUp.classList.add('hide');
// });

// signUpExit.addEventListener('click', () => {
//     signUpModal.classList.remove('show');
//     body.classList.remove('overflow');
//     signUp.classList.remove('hide');
// });


// settingsExit.addEventListener('click', () => {
//     settingsModal.classList.add('hide');
// });

// settings.addEventListener('click', () => {
//     settingsModal.classList.remove('hide');
// });

link.rel = 'stylesheet'
link.href = 'styles-dark.css'