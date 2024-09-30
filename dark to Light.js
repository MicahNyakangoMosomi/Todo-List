//dark to light theme 
let btnElement = document.querySelector('.dark-to-light');

console.log(document.querySelector('.dark-to-light').innerHTML);

let darkToLight =() =>{

    if(btnElement.innerText === 'Dark Mode'){
        document.getElementById('dark-to-light').innerText = 'Light Mode';
        document.body.classList.add('body-dark');
        document.querySelector('.dark-to-light').classList.add('dark-to-light-dark');
        document.querySelector('.name').classList.add('name-dark');
        document.querySelector('.date').classList.add('date-dark');
        document.querySelector('.display').classList.add('display-dark');


    }

    else {

        document.getElementById('dark-to-light').innerText = 'Dark Mode';
        document.body.classList.remove('body-dark');
        document.querySelector('.dark-to-light').classList.remove('dark-to-light-dark');
        document.querySelector('.name').classList.remove('name-dark');
        document.querySelector('.date').classList.remove('date-dark');
        document.querySelector('.display').classList.remove('display-dark');

    }

}

btnElement.addEventListener('click', darkToLight);

//end of the dark mode and light mode code