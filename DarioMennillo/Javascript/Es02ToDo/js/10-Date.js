var toDoWrapper= document.getElementById("toDoWrapper");

var whatsInTheHtml="";


function Task(title){
    this.titolo=title;
    this.isDone=false;
    this.getDone=function() {
        this.isDone=true;
    }
    this.getUndone=function() {
        this.isDone=false;
    }
}
function toDoList(title){
    this.titolo=title;
    this.tasks=[new Task("lorem ipsum dolor sit amet consectur"),new Task("Lorem ipsum")];
    
    this.addTask = function(newTask) {
         this.tasks.push(new Task(newTask));
    }
    
}


var lists=[ new toDoList("arguments test")]

function load() {
    whatsInTheHtml="<h1>Es ToDoList Orta</h1><div id='listsWrapper'>";
    for (let index = 0; index < lists.length; index++) {
        whatsInTheHtml+='<div class="listWrapper" ><h2 class="listTitle">'+lists[index].titolo+'</h2><ul>';
        for (let indiceLi = 0; indiceLi <lists[index].tasks.length; indiceLi++) {
            if(lists[index].tasks[indiceLi].isDone==false){
                whatsInTheHtml+='<li><input type="checkbox"  onchange="getDone('+indiceLi+', '+index+')">'+lists[index].tasks[indiceLi].titolo+'</li>';
            } else {
                whatsInTheHtml+='<li class="scored"> <input type="checkbox" checked onchange="getUnDone('+indiceLi+', '+index+')">'+lists[index].tasks[indiceLi].titolo+'</li>';
            }
        }
        whatsInTheHtml+='</ul><div class="addWrapper"><input id="toDoList'+index+'" type="text" placeholder="new task"><button class="add" onclick="newToDo('+index+')">✚</button></div></div>';        
    }
    whatsInTheHtml+='<div class="listWrapper"><div class="addWrapper"><input  id="newList" type="text" placeholder="new list"><button class="add" onclick="newList()">➤</button></div></div></div>'
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
function getDone(ITask, IList) {
    lists[IList].tasks[ITask].getDone();
    load();
}
function getUnDone(ITask, IList) {
    lists[IList].tasks[ITask].getUndone();
    load();
}
// function getUnDone(ITask, IList) {
//     whatsInTheHtml="<h1>Nome del Progetto</h1><div id='listsWrapper'>";
//     for (let index = 0; index < lists.length; index++) {
//         whatsInTheHtml+='<div class="listWrapper" ><h2 class="listTitle">'+lists[index].titolo+'</h2><ul>';
//         for (let indiceLi = 0; indiceLi <lists[index].tasks.length; indiceLi++) {
//             if ((index==IList)&&(indiceLi==ITask)){
//                 whatsInTheHtml+='<li><input type="checkbox"  onchange="getDone('+indiceLi+', '+index+')">'+lists[index].tasks[indiceLi]+'</li>';
                
//             } else {
//                 whatsInTheHtml+='<li class="scored"> <input type="checkbox" checked onchange="getUnDone('+indiceLi+', '+index+')">'+lists[index].tasks[indiceLi]+'</li>';
//             }
//         }
//         whatsInTheHtml+='</ul><div class="addWrapper"><input id="toDoList'+index+'" type="text" placeholder="new task"><button class="add" onclick="newToDo('+index+')">add</button></div></div>';        
//     }
//     whatsInTheHtml+='<div class="listWrapper"><div class="addWrapper"><input  id="newList" type="text" placeholder="new list"><button class="add" onclick="newList()">add</button></div></div></div>'
//     toDoWrapper.innerHTML=whatsInTheHtml;
    

// }