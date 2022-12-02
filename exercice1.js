let elem = document.getElementById('listeCourse');
let send = document.getElementById("send");
let item = document.getElementById("item");
let del = document.getElementById("del");


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


for (let obj of articles){

    let list = document.createElement('li')

    list.innerHTML = obj;
    elem.appendChild(list)

    send.addEventListener('click', function (){
        let add = document.createElement('li');
        list.lastChild(add)
        add.innerHTML = item.value
    })


    del.addEventListener("click", function (){
        list.innerHTML += "test"
    })
}
