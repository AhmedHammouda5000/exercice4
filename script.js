function addComment() {
    let Name = document.querySelector("#Name").value.trim();
    let Content = document.querySelector("#Content").value.trim();

    if (Name.length === 0) {
        alert("Please enter your name");
        return;
    }
    if (Content.length === 0) {
        alert("Please enter your content");
        return;
    }


    let reset = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    reset.setAttribute("width", "16");
    reset.setAttribute("height", "16");
    reset.setAttribute("fill", "currentColor");
    reset.setAttribute("viewBox", "0 0 16 16");
    reset.classList.add("bi", "bi-trash3-fill");
    reset.style.cursor = "pointer";

    reset.innerHTML = `<path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>`;


    reset.onclick = function () {
        this.closest("tr").remove();
    };

    let tab = document.querySelector("#tab");
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");

    td1.textContent = Name;
    td2.textContent = Content;
    td3.appendChild(reset);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);  // Append the delete icon column
    tab.appendChild(tr);

    // Clearing input fields
    document.querySelector("#Name").value = "";
    document.querySelector("#Content").value = "";
}
