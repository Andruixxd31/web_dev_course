
//Primer ejemplo
var button = document.getElementsByTagName("button")[0]; 
//By accessing elements by tags js returns an array.
button.addEventListener("click", function(){
	console.log("Click!!!!")
})


var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputlength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick(){
	if (inputlength() > 0){
		createListElement();
	}
}

function addListAfterKeyPress(event){
	if (inputlength() > 0 && event.KeyCode === 13){
		console.log("Hey");
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);

//shows informatation of the event 
input.addEventListener("keypress", function(event) {
	console.log(event);
})
