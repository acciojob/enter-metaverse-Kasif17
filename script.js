//your JS code here. If required.
function change() {
	let ptags = document.getElementById("ptag")
	let htags = document.createElement("h1");
	htags.textContent = ptags.textContent;     
    ptags.replaceWith(htags); 
}