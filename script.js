
function like(id){
    increment(id);
}

function changeColors(){
    var cardArr = document.querySelectorAll(".class-card");
    var colorArr = ["red", "blue", "yellow", "green", "silver"]
    for(var i = 0; i < cardArr.length; i++){
        cardArr[i].style.backgroundColor = colorArr[i+1];
    }
}

function join(button, cntId){
    // remove the button - going to need access to the button
    remove(button);
    // increment a counter - going to need the counter's id
    increment(cntId);
}

function remove(element){
    element.remove();
}

function increment(id){
    document.getElementById(id).innerText++;
}

function subjChange(){
    var subjValue = document.querySelector("#subjects").value;
    var tempList = document.querySelectorAll(".temperature")

}
