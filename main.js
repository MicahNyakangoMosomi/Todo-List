
const nameElement = document.querySelector('.name');
const dateElement  = document.querySelector('.date');

const todo=[];



let captureUserInput = () =>
{
    
    const name = nameElement.value;
    const date = dateElement.value;

    if(name && date){

        todo.push({name:name,date:date});
    
        document.querySelector('.name').value = '';
        document.querySelector('.date').value = '';
    
        console.log("Input captured");

        console.log(todo);

        displayFunction();

    }else if(!date){
        alert('Enter the date of your Task')
    
    }else if(!name){
        alert('Enter Task')
    }else{
        alert('Enter task and date')
    }

    

 
}

document.querySelector('.add').addEventListener('click',captureUserInput)

let displayFunction = () => {
    const displayElement = document.querySelector('.display');
    displayElement.innerHTML = ''; 

    todo.forEach((userInputObject, index) => {
        displayElement.innerHTML += `
            
            <p>${userInputObject.name}</p>
            <p>${userInputObject.date}</p>
            <button class="delete" onclick="deleteFunction(${index})">Delete</button>
        
        `;
    });
};

const deleteFunction = (index) => {
    todo.splice(index,1);
    displayFunction();

}
