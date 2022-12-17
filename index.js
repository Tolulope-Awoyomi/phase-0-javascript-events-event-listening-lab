const input = document.getElementById ('button');
function addingEventListener() {
    alert("Hee wee, ticklish!");
    input.addEventListener('click', addingEventListener);
}
