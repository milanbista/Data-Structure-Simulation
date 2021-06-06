
var sizeOfStack = 0;


var stackList = document.getElementById("stack__list")
var submitButton = document.getElementById("push__button")
const popButton = document.getElementById("pop__button")
var info = document.getElementById("info")

console.log(stackList)

submitButton.addEventListener("click", ()=>{
    var li = document.createElement("li")
    var inputVAlue = document.querySelector('input').value
    console.log(inputVAlue)
    li.appendChild(document.createTextNode(inputVAlue))
    stackList.prepend(li)
    info.textContent=" A new element added with string value = " + " '" + inputVAlue+ " '"
    info.style.color="green"
    sizeOfStack++
    if( sizeOfStack > 10){
        info.textContent=" By the way stackoverflow.com is awesome!!"
        info.style.color='red'
    }
    else{
        info.style.color="green"
        info.style.backgroundColor=""
    }
    
})

popButton.addEventListener("click", ()=>{
    if(sizeOfStack == 0){
        info.textContent="The stack is empty. You can push element to the stack!"
        info.style.color="red"
    }
    else{
        info.textContent="An element removed with string value = " + " ' " +    stackList.firstChild.textContent + " '"
        info.style.color="red"
        stackList.removeChild(stackList.firstChild)
        sizeOfStack--
    }
   

})

