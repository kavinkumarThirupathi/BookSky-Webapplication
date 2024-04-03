// select popup-box, popup-overlay
var popupoverlay =document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton =document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
popupoverlay.style.display="block"
popupbox.style.display="block"
})

//select cancel button 
var cancelbutton= document.getElementById("cancel-popup")
cancelbutton.addEventListener("click", function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
popupbox.style.display="none"
})

//select ADD book,book title,author,disciptuon
var container= document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdiscriptioninput=document.getElementById("book-disctiption-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div =document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=` <h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdiscriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
popupbox.style.display="none"
})
function deletebook(event){
    event.target.parentElement.remove()
}
