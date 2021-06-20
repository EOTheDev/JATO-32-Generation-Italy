var toDoWrapper= document.getElementById("toDoWrapper");

var whatsInTheHtml="";


function toDoList(title){
    this.titolo=title;
    this.tasks=["lorem ipsum dolor sit amet consectur","Lorem ipsum"];
    
    this.addTask = function(newTask) {
         this.tasks.push(newTask);
    }
    
}
var lists=[ new toDoList("arguments test")]

function load() {
    whatsInTheHtml="";
    for (let index = 0; index < lists.length; index++) {
        whatsInTheHtml+='<div class="listWrapper" ><h2 class="listTitle">'+lists[index].titolo+'</h2><ul>';
        for (let indiceLi = 0; indiceLi <lists[index].tasks.length; indiceLi++) {
            whatsInTheHtml+='<li><input type="checkbox"  onchange="getDone()">'+lists[index].tasks[indiceLi]+'</li>';
        }
        whatsInTheHtml+='</ul><div class="addWrapper"><input id="toDoList'+index+'" type="text" placeholder="new task"><button class="add" onclick="newToDo('+index+')">add</button></div></div>';        
    }
    whatsInTheHtml+='<div class="listWrapper"><div class="addWrapper"><input  id="newList" type="text" placeholder="new list"><button class="add" onclick="newList()">add</button></div></div>'
    toDoWrapper.innerHTML=whatsInTheHtml;
}

function newToDo(indiceLista) {
    var toDo=document.getElementById("toDoList"+indiceLista).value;    
    if (toDo!=""){
        lists[indiceLista].addTask(toDo);
        load();
    }
}
function newList() {
    var title=document.getElementById("newList").value;
    if (title!=""){
        lists.push(new toDoList(title));
        load();
    }
}