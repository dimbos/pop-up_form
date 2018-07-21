document.addEventListener('DOMContentLoaded', function(){
    let userInput = document.getElementsByClassName('userInput');

    for(let i=0; i < userInput.length; i++){
        userInput[i].onfocus = function(){
            this.parentNode.classList.add('focus');
        }
    }

    for(let i=0; i < userInput.length; i++){
        
        if(userInput[i].value === ''){
            userInput[i].onblur = function(){ 
                if(userInput[i].value == ''){  
            this.parentNode.classList.remove('focus');  
            }
        }
    }
    }
})