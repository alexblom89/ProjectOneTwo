//JavaScript File

let addButton = document.getElementById('addButton');
addButton.addEventListener('click', newListItem);

function newListItem() {
    //Get value from user input, create text node and add input text to node. Create list element and append text node.
    let input = document.getElementById('textInput').value;
    let textNode = document.createTextNode(input);
    let ul = document.getElementById('taskList');
    let li = document.createElement('li');
    ul.appendChild(li);
    li.appendChild(textNode);

    //Create checkbox control and append to list element.
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.className = 'checkbox';
    checkBox.id = 'checkbox';
    li.appendChild(checkBox);


    let deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'delete';
    deleteButton.id = 'delete';
    deleteButton.innerHTML = "Delete";
    li.appendChild(deleteButton);

    //Attach event listeners for change and click of checkbox and delete button, respectively.
    //let checkItem = document.getElementById('checkbox');
    let checkItem = document.getElementsByClassName('checkbox');
    checkItem.onchange = toggleCheck;

    //let deleteItem = document.getElementById('delete');
    let deleteItem = document.getElementsByClassName('delete');
    deleteItem.onclick = remove;
}

function toggleCheck(e){
    let checkbox = e.target;
    let li = checkbox.closest('li');
    li.classList.toggle('checked');
    let div = document.getElementById('container');
    div.appendChild(li);
}

function remove(e){
    let del = e.target;
    let parent = del.parentElement;
    parent.remove();
}
