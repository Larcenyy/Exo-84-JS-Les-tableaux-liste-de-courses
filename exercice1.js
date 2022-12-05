
let send = document.getElementById("send");
let item = document.getElementById("item");
let del = document.getElementById("del");

let myList = document.getElementById("listeCourse") // UL
let myFilter = document.getElementById("filter") // UL

let link = document.createElement("span")


let articles = [
    "Orangina",
    "Creme Fraiche",
    "Tartiflette",
    "Emmental",
    "Bananes",
    "Chips",
    "Bieres",
    "Pizza"
];


myFilter.addEventListener("click", function (){
    articles.sort();
    console.log(articles);
    myFunc()
})

myFunc()

send.addEventListener("click", function (){
    articles.push(item.value)
    myFunc()
})

del.addEventListener("click", function (){
    articles.pop()
    myFunc()
})

function myFunc() {
    myList.innerHTML  = "";

    for (let obj of articles){
        let list = document.createElement('li')
        list.innerHTML = obj;
        myList.appendChild(list)
        list.addEventListener("click", function (){
            list.remove()
        })
    }
}
