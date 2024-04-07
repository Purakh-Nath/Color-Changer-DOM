const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body");

buttons.forEach(function (button){

  //  console.log(button);
    button.addEventListener('click',function(eve){

      //  console.log(eve);
     //   console.log(eve.target);

        if(eve.target.id === 'Azure'){
            body.style.backgroundColor = 'aqua';
        }

        if(eve.target.id === 'Blue'){
            body.style.backgroundColor = eve.target.id;
        }

        if(eve.target.id === 'Chocolate'){
            body.style.backgroundColor = eve.target.id;
        }

        if(eve.target.id === 'Daffodil'){
            body.style.backgroundColor = 'darkviolet';
        }

        if(eve.target.id === 'greenyellow'){
            body.style.backgroundColor = 'greenyellow';
        }

        if(eve.target.id === 'Flame'){
            body.style.backgroundColor = 'firebrick';
        }

        if(eve.target.id === 'Gold'){
            body.style.backgroundColor = eve.target.id;
        }

        if(eve.target.id === 'Honeydew'){
            body.style.backgroundColor = eve.target.id;
        }

        if(eve.target.id === 'Indigo'){
            body.style.backgroundColor = eve.target.id;
        }

        if(eve.target.id === 'Jet'){
            body.style.backgroundColor = 'skyblue';
        }

        if(eve.target.id === 'Khaki'){
            body.style.backgroundColor = eve.target.id;
        }

        if(eve.target.id === 'Lavender'){
            body.style.backgroundColor = eve.target.id;
        }

        if(eve.target.id === 'Magenta'){
            body.style.backgroundColor = eve.target.id;
        }

        if(eve.target.id === 'Navy'){
            body.style.backgroundColor = eve.target.id;
        }

        if(eve.target.id === 'Orange'){
            body.style.backgroundColor = eve.target.id;
        }


        if(eve.target.id === 'peachpuff'){
            body.style.backgroundColor = eve.target.id;
        }

        if(eve.target.id === 'Queen'){
            body.style.backgroundColor = 'rebeccapurple';
        }

        if(eve.target.id === 'Red'){
            body.style.backgroundColor = eve.target.id;
        }

        if(eve.target.id === 'Silver'){
            body.style.backgroundColor = eve.target.id;
        }

        if(eve.target.id === 'Tan'){
            body.style.backgroundColor = eve.target.id;
        }

        if(eve.target.id === 'Ultramarine'){
            body.style.backgroundColor = 'mediumaquamarine';
        }

        if(eve.target.id === 'Violet'){
            body.style.backgroundColor = eve.target.id;
        }

        if(eve.target.id === 'white'){
          
            body.style.backgroundColor = eve.target.id;
        }
        if(eve.target.id === 'Xanadu'){
            body.style.backgroundColor = 'aquamarine';
        }

        if(eve.target.id === 'Yellow'){
            body.style.backgroundColor = eve.target.id;
        }

        if(eve.target.id === 'Zaffre'){
            body.style.backgroundColor = 'burlywood';
        }
        

    })
})