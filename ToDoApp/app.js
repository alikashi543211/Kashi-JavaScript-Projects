// Get element of html by targetting the item ID
const item = document.querySelector("#item");

// Grap the element of HTML by targetting the to-do-box ID
// query Selector is better than getElementById due to much helping chaining functions
const toDoBox = document.querySelector("#to-do-box");

// Arrow function saving in saveToDo variable then call by this variable name with parenthesis
const saveToDo = () => {
    
    // Get all span elements as array inside li element
    const toDoList = document.querySelectorAll("#to-do-box li span")

    // Initalize the data array to push the text of each span
    const data = [];

    // All span list and every span will be one by one in forEach
    toDoList.forEach(

        // Foreach toDo span one by one
        (toDo) => {

            // Every span that is coming one by one push span innerText into data array
            data.push(toDo.innerText);

        }

    )

    // print array of span texts in console
    console.log(data)

    // If All to do elements are deleted and toDoList is empty then data array will be empty then remove todo_list in LocaleStorage
    if(data.length == 0)
    {

        // Remove todo_list item in local Storage
        localStorage.removeItem('todo_list')

    }else{

        // Add data array in localStorage
        localStorage.setItem('todo_list', JSON.stringify(data))

    }

    

}

// Input element item targetted by querySelector and passing item ID
// Event handling on item input
item.addEventListener(
    // First parameter
    "keyup",

    function(event){

        // event provides each key that I have entered
        // console.log(event)

        // If I press Enter in the input then output of event.key is "Enter"

        if(event.key == 'Enter')
        {
            
            // If key is Enter then add the text in toDo list
            console.log(this.value)

            // addToDo constant named arrow function is defined above
            addToDo(this.value);

            // When toDo is added then fetch all toDo text and save in localStorage as array todo_list
            saveToDo();

            // When text inside item is toDo added and saved in the localStorage then Empty the textbox
            this.value = '';

        }

    }

)   

// Constant variable contains arrow function named as addToDo
const addToDo = (item) => {

    // Creating the li element of HTML
    const listItem = document.createElement('li');

    // Adding the innerHTML inside li, innerHTML is text and cross fa icon
    listItem.innerHTML = `
        
        <span>${item}</span>

        <i class="fas fa-times"></i>
    `;

    // When task is Done then click on listItem then Toggle Class done
    listItem.addEventListener(

        'click',

        function() {

            // In jquery we add class by this way $(this).addClass("done") but in javascript we add class in this below way this.classList.toggle
            this.classList.toggle("done")

        }

    )

    // New list item added then adding the Click event on this new listItem
    listItem.querySelector("i").addEventListener(

        "click",

        function() {

            // On cross icon click remove the to Do Task
            listItem.remove();

            // When to do task will be removed then call saveToDo to update data in localStorage
            saveToDo();

        }

    )

    // append ListItem in toDoBox
    toDoBox.appendChild(listItem)

}

// Self calling Function 

(

    function () {

        // Convert the string array into actual array by fetching from localStorage
        const todo_list = JSON.parse(localStorage.getItem('todo_list'));

        // Apply forEach on todo_list array
        todo_list.forEach(

            (toDo) => {

                // On every todo_list array element one by one call addToDo by passing the text
                addToDo(toDo);

            }

        )

    }

)();