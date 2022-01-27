
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

// for Drag & Drop Logic

function drop(ev) {
   ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
   ev.target.appendChild(document.getElementById(data));
   document.getElementById("heading-content").innerHTML = "Dragged & Dropped Successfully !!!";
   document.getElementById("heading-content").style.color = "green";
} 


// for Drag & Copy Logic
/* 
function drop(ev) {
  ev.preventDefault();
  var data=ev.dataTransfer.getData("text");
  var nodeCopy = document.getElementById(data).cloneNode(true);
  nodeCopy.id = "newId";
  ev.target.appendChild(nodeCopy);
  document.getElementById("heading-content").innerHTML = "Dragged & Copied Successfully !!!";
  document.getElementById("heading-content").style.color = "green";
}
*/
