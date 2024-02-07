const db = {};
function takeInput(){
    const input = document.getElementById("input").value;
    db[input] = input;
    renderList();
}
function renderList(){
document.getElementById('todo').innerHTML = '';
        for(let el in db){
            var todo = document.createElement("li"); 
            todo.innerText = el;
            console.log(todo)
            document.getElementById('todo').appendChild(todo);
        }
}



