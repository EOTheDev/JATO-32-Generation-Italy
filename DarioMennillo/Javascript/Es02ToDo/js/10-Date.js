var toDoWrapper= document.getElementById("toDoWrapper");

var whatsInTheHtml="";


function toDoList(titolo){
    this.titolo=titolo;
    this.tasks=["Task 1", "task 2", "task3"],
    
    this.addTask(newTask)= function() {
         this.tasks.push(newTask);
    }
    
}
var lists=[new toDoList("titolo uno"), new toDoList("titolo 2"), new toDoList("titolo tre")]

function load() {
    for (let index = 0; index < lists.length; index++) {
        whatsInTheHtml+='<div class="listWrapper" id="toDoList'+index+'"><h2 class="listTitle">'+lists[index]+'</h2><ul>';
        for (let indiceLi = 0; indiceLi <lists[index].tasks.length; indiceLi++) {
            whatsInTheHtml+='<li><input type="checkbox"  onchange="getDone()">'+elemento lista+'</li>';
        }
        whatsInTheHtml+='</ul><input type="text" placeholder="new task"><button class="+" onclick="newToDo('+index+')">+</button></div>';        
    }
    whatsInTheHtml+='<div class="listWrapper"><input class="+" type="text" placeholder="new list"><button onclick="newList()">+</button></div>'
    toDoWrapper.innerHTML=whatsInTheHtml;
}

