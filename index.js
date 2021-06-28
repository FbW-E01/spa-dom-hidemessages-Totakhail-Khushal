
const parent=document.getElementById("container");
const child=document.getElementById("pane");


parent.addEventListener("click",(e) => {
    
    let child = e.target.closest(".pane")
    child.remove();
});