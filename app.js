// todo app

var list=document.getElementById("list")
function todo(){

    var todoItem=document.getElementById("todoItem")
    
    var li=document.createElement('li')
    var liText=document.createTextNode(todoItem.value)
    li.appendChild(liText)
    list.appendChild(li)
    todoItem.value=null
    console.log(li)


}
