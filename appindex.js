// alert('hello');
// a('Enter your age');
var age = prompt('Please Verify your age');
console.log(age);
if(age <15){
	alert('you cant use this application');
}
else{
	alert("Welcome here");
}
let addToDoButton = document.getElementById('addtodo');
let toDoContainer = document.getElementById('todocontainer');
let inputField = document.getElementById('inputfield');


addToDoButton.addEventListener('click', function(){
	var paragraph = document.createElement('p');
	paragraph.classList.add('paragraph_styling');
	paragraph.innerText = inputfield.value;
	toDoContainer.appendChild(paragraph);
	inputfield.value = "";
	paragraph.addEventListener('click',function(){
		paragraph.style.textDecoration = "line-through";
	})
	paragraph.addEventListener('dblclick',function(){
	toDoContainer.removeChild(paragraph);
	})
	paragraph.addEventListener('onkeypress',function(){
			toDoContainer.editChild(paragraph);
	 })
});