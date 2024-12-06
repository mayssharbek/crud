let container=document.querySelector(".container");
const addform=document.querySelector(".add");
const title=document.querySelector("#title") ;

let tasks=localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks")): []


const updateStatus =(id)=>{
   let updatetask=tasks.find(task=>task.id==id)
   updatetask={
      id: updatetask.id,
      title: updatetask.title,
      status: (updatetask.status=="doing") ? "done": "doing"
   }
   tasks=tasks.map(task=>{
   if(task.id==id){
      task=updatetask;
   }
    return task;
   })

   read()

}
const showUpdateForm=(id)=>{
const title=document.querySelector(`#card${id} h1`)
const form=document.querySelector(`#card${id} form`)
title.style.display="none"
form.style.display="block"

}


 const updateTitle=(id,event)=>{
   event.preventDefault()
   const newtitle=document.querySelector(`#card${id} form input`).value;
   tasks=tasks.map(task=>{
      if(task.id==id){
         task.title=newtitle
      }
       return task;
      })
   
      read()
   
 }

 const deleteTask=(id) => {
    tasks=tasks[i].filter(tasks=>tasks[i].id != id )
    read()
 }


const read =()=>{
container.innerHTML=" "
for(let i=0; i<tasks.length;i++){
    container.innerHTML+=`
     <div class="card ${(tasks[i].status=="doing") ?"doing": "done"}" id= "card${tasks[i].id}">
       <h1>${tasks[i].title}</h1>   
       <form style= "display: none;"  onsubmit="updateTitle(${tasks[i].id} , event)">
         <input type="text" placeholder="task title" id="titleInput${tasks[i].id}" value="${tasks[i].title}"> 
         <input type="submit" value="update"> 
       </form>

       <div class="btn">
        <button  onclick= "updateStatus(${tasks[i].id})"> edit status </button>
        <button  onclick= "showUpdateForm(${tasks[i].id})">edit title</button>
        <button onclick="deleteTask(${tasks[i].id})">delete task</button>
     </div>
    </div>`
}
localStorage.setItem("tasks",JSON.stringify(tasks))
}


addform.addEventListener("submit",(e)=>
{ let id=parseInt(localStorage.getItem("id")? localStorage.getItem("id"):0)
  e.preventDefault();
  let newtitle={
   id: id+1,
   title: title.Value,
   status:"doing"
  }
 tasks.push(newtitle);
 localStorage.setItem("id",newtitle.id)
 read();


})
   
read()



