const qTxt = document.getElementById('result');
const hideThis = document.getElementById('hide-after');
qBtn = document.getElementById('gen');

//debug n stuff
//console.log(document.getElementById('l1').textContent);

let currClicked = 'love';
console.log(currClicked);

let love = document.getElementById('l1');
let inspi = document.getElementById('l2');
let life = document.getElementById('l3');
let succ = document.getElementById('l4');
let friend = document.getElementById('l5');
let happi = document.getElementById('l6');
let fam = document.getElementById('l7');
let sad = document.getElementById('l8');

//categories clicked
love.addEventListener("click", function(event){
    currClicked = love.textContent;
    console.log(currClicked);
});

inspi.addEventListener("click", function(event){
    currClicked = 'motivational';
    console.log(currClicked);
});

life.addEventListener("click", function(event){
    currClicked = life.textContent;
    console.log(currClicked);
});

succ.addEventListener("click", function(event){
    currClicked = succ.textContent;
    console.log(currClicked);
});

friend.addEventListener("click", function(event){
    currClicked = friend.textContent;
    console.log(currClicked);
});

happi.addEventListener("click", function(event){
    currClicked = happi.textContent;
    console.log(currClicked);
});

fam.addEventListener("click", function(event){
    currClicked = fam.textContent;
    console.log(currClicked);
});

sad.addEventListener("click", function(event){
    currClicked = sad.textContent;
    console.log(currClicked);
});
//gen
function rQuote(){
    fetch("http://api.quotable.io/random?tags="+currClicked).then(response => response.json()).then(result => {
        console.log(result.content);
        console.log(result.author);
        qTxt.innerText = '\"'+ result.content + '\" \n ─ '+result.author;
    });
    hideThis.style.display = "none";
}

function toggleActive(li) {
    var liCount = document.getElementsByClassName("active");
    for (var i = 0; i < liCount.length; i++) {
      liCount[i].classList.remove("active");
    }
    li.classList.add("active");
  }
  

qBtn.addEventListener("click", rQuote);