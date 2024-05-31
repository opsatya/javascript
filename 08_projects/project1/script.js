const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

// Using forEach because buttons is a NodeList which is array-like
buttons.forEach((button) => {
    //console.log(button);
    button.addEventListener('click', (event) => {
        console.log(event);
        console.log(event.target);

        // if (event.target.id === 'grey') {
        //     body.style.backgroundColor = 'gray';
        // }
        //  else if (event.target.id === 'white') {
        //      body.style.backgroundColor = event.target.id;
        //  }
        //  else if (event.target.id === 'blue') {
        //     body.style.backgroundColor = event.target.id;
        // }
        // else if (event.target.id === 'yellow') {
        //     body.style.backgroundColor = event.target.id;
        // }
    });
});

