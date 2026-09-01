let btn=document.querySelector("button");
let input=document.querySelector("#taskInput");
let ul=document.querySelector("#taskList");




const Add = new Audio(
   " https://www.myinstants.com/media/sounds/pop-button.mp3"
);
const Remove = new Audio(
   " https://www.myinstants.com/media/sounds/sonic-error-sound.mp3"
);

const clickSound = new Audio(
   " https://www.myinstants.com/media/sounds/roblox-laser-gun.mp3"
);

input.addEventListener("keydown",function(event){
    if (event.key.length === 1) {
        clickSound.currentTime = 0;
        // clickSound.play();
        clickSound.play();
    }
});


btn.addEventListener("click",function(){
    
    let item=document.createElement("li");
    item.innerText=input.value;

    let delBtn=document.createElement("span");
    delBtn.innerText="❌";
    delBtn.classList.add("del");


    item.appendChild(delBtn);
    ul.appendChild(item);
    Add.play();

    
    console.log(input.value);
    input.value="";
    
    
});
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="SPAN"){
       let listItem=event.target.parentElement;
       listItem.remove();
       Remove.play();
       console.log("Yes");
       
        
    }
    
    console.log("click");
    
})



