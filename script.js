function newElement() {
    let list = document.getElementById("list");

    if (list.value === '') {
        alert("You must write something!");
        return;
    }

    let li = document.createElement("li");
    li.innerText = list.value;
    list.value = "";

    li.addEventListener("click", function() {
        li.style.textDecoration = "line-through";
    });

    li.addEventListener("dblclick", function() {
        li.remove();
    });

    let ul = document.getElementById("ul");
    ul.prepend(li);
}

document.getElementById("list").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        newElement();
    }
});
