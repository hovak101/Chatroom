document.getElementById("sent_messages").addEventListener("change", function dosom () {
	var info = document.getElementById("sent_messages").value; 
	document.getElementById("received_messages").innerHTML = info;
});