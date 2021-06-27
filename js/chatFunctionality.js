// function checkUsername() {
// 	if ()
// 	document.getElementById("content").innerHTML = 
// 	document.getElementById("username").value;
// }

function createConvoFile(A, B) {
	var blob = new Blob([A, B], {type: 'text/plain'}); 
	console.log(blob); 
}

createConvoFile("alex", "robert"); 
// document.getElementById("username")
// 	.addEventListener("change", getUsername);  
