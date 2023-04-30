const first_href = document.getElementById('first__href');
const second_href = document.getElementById('second__href');

first_href.addEventListener('click', checkHTTPforGoogle);
second_href.addEventListener('click', checkHTTPforSinoptik);

function checkHTTPforGoogle(event) {
    if(event.target.href.indexOf('https') === -1) {
        event.preventDefault();
        //Хотел написать event.target.href = 'https:\\' + event.target.href, но тогда происходит локальная ошибка :(
        event.target.href = 'https://www.google.com/' ;
        console.dir(event.target.href)
    }
}

function checkHTTPforSinoptik(event) {
    if(event.target.href.indexOf('https') === -1) {
        event.preventDefault();
        //Аналогично
        event.target.href = 'https:\\sinoptik.ua' ;
        console.dir(event.target.href)
    }
}