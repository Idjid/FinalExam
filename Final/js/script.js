let task_box = ['task1', 'task2', 'task2', 'tska2']

document.addEventListener("DOMContentLoaded", () => {
    // Array of colors for background change
    const colors = ['#F0E68C', '#FFDAB9', '#FFE4B5', '#D8BFD8', '#B0E0E6', '#AFEEEE', '#E0FFFF', '#98FB98', '#FFDEAD', '#F5DEB3'];

    let index = 0;

    // Function to change background color with a gradient effect
    const changeBackgroundColor = () => {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length; // Loop back to the start
    };

    // Change color every 2 seconds with a smooth transition
    setInterval(changeBackgroundColor, 2000);
});

let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function listLength() {
    return item.length;
}

function createListElement() {
    let li = document.createElement("li"); // creates an element "li"
    li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
    ul.appendChild(li); //adds li to ul
    input.value = ""; //Reset text input field


    //START STRIKETHROUGH
    // because it's in the function, it only adds it for new items
    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);
    //END STRIKETHROUGH


    // START ADD DELETE BUTTON
    let dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
}


function addListAfterClick() {
    if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) { //this now looks to see if you hit "enter"/"return"
        //the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
        createListElement();
    }
}


enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);








//My new functions starts here
function createListElements(new_task) {
    //you will not believe it, BUT... I WAS TRYING TO DO THIS SO MANY TIMES! I SPENT MINIMUM 30 MINUTES IN THIS!!!
    let li = document.createElement("li"); 
    li.appendChild(document.createTextNode(new_task)); 
    ul.appendChild(li);

    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);
  
    let dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
}


function asd_task() {
    let input_field = document.getElementById('userInput');
    let new_task = input_field.value.trim();

    if (new_task === "") {
        alert('Dude, It is empty. Write something. We alredy know that your head is empty');
        return;
    }
    
    else if (task_box.includes(new_task)) {
        alert("This task already exists, man! Enter a new task or you are gonna be disqalified.");
    }

    else {
        task_box.push(new_task);
        alert(`The "${new_task}" have been added. Good job, my boy`);
        update_task_list(new_task);
    }

    input_field.value = "";
}


function ask_user() {
    let new_task = prompt("Please enter a new task:");

    while (new_task === "" || task_box.includes(new_task)) {
        if (new_task === "") {
            alert("Task cannot be empty, dude!");
        } 
        else if (task_box.includes(new_task)) {
            alert("This task already exists, man! Enter a new task or you are gonna be disqalified.");
        }
        new_task = prompt("Enter a new task:");
    }

    if (new_task) {
        task_box.push(new_task); 
        alert(`The "${new_task}" have been added. Good job, my boy`);
        createListElements(new_task);
    }
}
