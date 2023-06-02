const list = document.getElementById("list");
const b = document.querySelector('button');

b.addEventListener("click", check)

function check(){
  const neww = this.previousElementSibling.value.trim();
  if (neww){
    create(neww);
    this.previousElementSibling.value = "";
  }
  else{
    alert("alarm empty");
  }
}

function create(text){
  const li = document.createElement('li')
  li.innerText = text;
  li.className = "toDo";
  li.addEventListener("click", del)
  list.append(li);
}

function del() {
  this.removeEventListener("click", del)
  this.remove()
}