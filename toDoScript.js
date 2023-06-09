const list = document.getElementById("list");
const b = document.querySelector('button');

b.addEventListener("click", check)

document.addEventListener('DOMContentLoaded', showUs)



function check(){
  const neww = this.previousElementSibling.value.trim();
  if (neww){
    create(neww);
    this.previousElementSibling.value = "";
    addInLs(neww);
  }
  else{
    alert("alarm empty");
  }
}

function showUs() {
  const todo = JSON.parse(localStorage.getItem('tasks'));
  if (todo){
todo.forEach(todos => create(todos)) 
}}

function create(text){
  const li = document.createElement('li')
  li.innerText = text;
  li.className = "toDo";
  li.addEventListener("click", del)
  list.append(li);
}

function del(value) {
  this.removeEventListener("click", del)
  this.remove() 
  remFromLs(value)
}

function addInLs(neww) {
 const todo = JSON.parse(localStorage.getItem('tasks')) || [];
  localStorage.setItem('tasks', JSON.stringify([...todo, neww]))
}

function remFromLs(item) {
  let todo = JSON.parse(localStorage.getItem('tasks'));
  const targ = item.target.innerText;
  console.log(item.target.innerText);
todo.splice(todo.findIndex(n => n === targ), 1)
  localStorage.setItem('tasks', JSON.stringify(todo))

}