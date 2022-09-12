document.querySelector("form").addEventListener("submit", toDo);
var todoArr = JSON.parse(localStorage.getItem("todoList")) || [];
displayList(todoArr);
var ungId = todoArr.length;

function toDo() {
    event.preventDefault();
    var obj = {
        id: ungId++,
        task: document.getElementById("task").value,
        prio: document.getElementById("priority").value
    }
    todoArr.push(obj);
    localStorage.setItem("todoList", JSON.stringify(todoArr));
    displayList(todoArr);
}




function displayList(data) {
    document.querySelector("tbody").innerText = "";
    data.map(function(ele) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerText = ele.task;
        var td2 = document.createElement("td");
        td2.innerText = ele.prio;
        if (ele.prio == "High") {
            td2.style.backgroundColor = "red";
        } else {
            td2.style.backgroundColor = "green";
        }

        var td3 = document.createElement("td");
        td3.innerText = "Delete";
        td3.addEventListener("click", function() {
            deletetr(ele.id);
        });
        tr.append(td1, td2, td3);
        document.querySelector("tbody").append(tr);
    })
}

function deletetr(rowId) {
    // event.target.parentNode.remove();
    todoArr = todoArr.filter(function(ele) {
        return ele.id != rowId;
    });
    localStorage.setItem("todoList", JSON.stringify(todoArr));
    displayList(todoArr);
}