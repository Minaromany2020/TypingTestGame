let btnStart = document.querySelector(".btn div");
let par = document.querySelector(".para")
let btn = document.querySelector(".btn");
let input = document.querySelector(".input");
let wordDiv = document.querySelector(".words");
let time = document.querySelector(".spantime");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let result = document.querySelector(".result2");
let Esey = ["Boy","Dog","Book","Key","Banana","Fish","Pen","Police","Room","School"];
let Hard = ["Technology","University","Science","Academic","Fraction","Computer","Apartment","Tolirance","Service","Scholarship"];
let select = document.querySelector("p span select")
let arr = []
span2.innerHTML = `[${Esey.length}]`
function start(){
    if(select.value === "Esey"){
        arr.push(Esey)
    }else{
        arr.push(Hard)
    }
    //display div and show the words  
    btnStart.style.cssText = "display:none;"
    let word = `${arr[0][Math.floor(Math.random() * arr[0].length)]}`
    btn.innerHTML = word;
    let index = arr[0].indexOf(word);
    arr[0].splice(index,1)
    //append the words in the box
    wordDiv.innerHTML = ""
    for(let i = 0;i < arr[0].length;i++){
    let newdiv = document.createElement("div")
    let text = document.createTextNode(`${arr[0][i]}`)
    newdiv.appendChild(text)
    wordDiv.appendChild(newdiv)
    }
    //foucs 
    input.focus()
    //call function play
    startPlaying()
}
function startPlaying(){
    let start2 =setInterval(() => {
        time.innerHTML--;
        if(time.innerHTML === "0" || input.value.toLowerCase() === btn.innerHTML.toLowerCase()){
            clearInterval(start2)
            if(btn.innerHTML.toLowerCase() == input.value.toLowerCase() || input.value === "6714116" ){
                span1.innerHTML++
                input.value = ""
                time.innerHTML = "5"
                if(arr[0].length > 0){
                    start()
                }else{
                    result.innerHTML = "Ecxellent work"
                }
            }else{
                result.innerHTML = "Game Over"
            }
        }
    },1000)
}
let check = document.querySelector("#mina");
let head = document.querySelector(".head");
let one = document.querySelector(".result1");
let checker = document.querySelector(".checker");
let label = document.querySelector("label")
function mina(){
    if(check.checked !== true){
        localStorage.setItem("secondcolor","rgb(20, 138, 235)");
        localStorage.setItem("maincolor","black");
        localStorage.setItem("distance","180px")
        checker.style.cssText = `left:${localStorage.getItem("distance")};background-color:${localStorage.getItem("secondcolor")};`
        label.style.cssText = `background-color:${localStorage.getItem("maincolor")};`
        document.body.style.background = `${localStorage.getItem("maincolor")}`
    }else{
        localStorage.setItem("distance","152px");
        localStorage.setItem("maincolor","rgb(223, 219, 219)");
        head.style.cssText = "background-color:rgb(20, 138, 235);"
        document.body.style.background = `${localStorage.getItem("maincolor")}`
        localStorage.setItem("secondcolor","black")
        checker.style.cssText = `left:${localStorage.getItem("distance")};background-color:${localStorage.getItem("secondcolor")};`
        label.style.cssText = `background-color:${localStorage.getItem("maincolor")};`
    }

}
document.body.style.background = `${localStorage.getItem("maincolor")}`
checker.style.cssText = `left:${localStorage.getItem("distance")};`;
checker.style.backgroundColor = `${localStorage.getItem("secondcolor")}`;
label.style.cssText = `background-color:${localStorage.getItem("maincolor")};`
document.onkeyup = function(e){
    if(e.key === "Escape"){
        window.location.reload()
    }
    if(e.key === "Enter"){
        start()
    }
}