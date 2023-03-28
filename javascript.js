
//set container to flex and row wrap
const containerdiv = document.querySelector(".container");
containerdiv.style.display = "flex";
containerdiv.style.flexFlow = "row wrap";

let squares = 16;
drawsquares(squares);

function drawsquares(squares) {
    let squared = squares * squares;
    let horizontalsize = "calc(100% / " + squares + ")";
    let horizontalsizeappend = horizontalsize + "%";
    for (let i = 0; i < squared; i++) {
        let xdivs = document.createElement("div");
        xdivs.classList.add("xdiv");
        xdivs.style.flexBasis = horizontalsize;
        //xdivs.style.height = horizontalsize; Unsure if I need this or not
        xdivs.style.padding = 0;
        xdivs.style.margin = 0;
        xdivs.style.backgroundColor = "White";
        xdivs.addEventListener("mouseover", () => {
            xdivs.style.backgroundColor = randomcolor();
        })
        containerdiv.appendChild(xdivs);
        
    }
}

//queryselector for setsquares button
const setsquaresbtn = document.querySelector(".button");
//eventListener onto set squares button to set squares
setsquaresbtn.addEventListener("click", () => {
    let userinput = Number(prompt("How many squares horizontally? Max 100!"));

    if (Number.isInteger(userinput) && userinput > 0 && userinput < 101) {
        squares = userinput;
        reset();
        drawsquares(squares);
    }
    else {
        return;
    }
})

//queryselector for reset button
const resetbtn = document.querySelector(".reset")
//eventListener on resetbtn
resetbtn.addEventListener("click", () => {
    reset();
    drawsquares(squares);
})


function reset() {
   containerdiv.innerHTML = ''; 
}


//generates a random color
function randomcolor() {
    let randomcolor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomcolor;
}