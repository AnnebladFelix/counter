//document.getElementById("count-el").innerText = 5;

// let lap1 = 32
// let lap2 = 31
// let lap3 = 31
// function laptimes(){
//     console.log(`lap 1 has a time of ${lap1} seconds!`)
//     console.log(`lap 2 has a time of ${lap2} seconds!`)
//     console.log(`lap 3 has a time of ${lap3} seconds!`)
// }

// laptimes();
/*-------------------------------------------------------------------------*/
//document.getElementById("count-el").innerText = ;
let countEl = document.getElementById("count-el")
let count = 0

function incriment() {
    count += 1;
    countEl.textContent = count;
    
}

let saveEl = document.getElementById("save-el")
function save(){
    //let countStr = ` ${count} - `
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

