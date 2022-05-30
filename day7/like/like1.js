var btn1 = document.querySelector("#btn1")
btn1.addEventListener("click", like)

function like(){
    var likee = document.querySelector("#likee")
    likee.innerText = parseInt(likee.innerText)+1
}

var btn1 = document.querySelector("#btn2")
btn1.addEventListener("click", like2)

function like2(){
    var likee2 = document.querySelector("#likee2")
    likee2.innerText = parseInt(likee2.innerText)+1
}

var btn1 = document.querySelector("#btn3")
btn1.addEventListener("click", like3)

function like3(){
    var likee3 = document.querySelector("#likee3")
    likee3.innerText = parseInt(likee3.innerText)+1
}