//document.getElementById("count").innerText=5;

let counts = 0
let countEl = document.getElementById("count")

function increment()
{
    counts = counts + 1
    countEl.innerText = counts
}

let saveEl = document.getElementById("saveon")

function save()
{
   let countstr = " " + counts + " - "
   saveEl.innerText += countstr
   countEl.innerText = 0
   counts = 0
}