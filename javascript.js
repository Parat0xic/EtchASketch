

// Prompt user for  X number of squares wide when they press a button at the top of the screen
//Base site should be 16x16 and only change if user clicks button
//generate X divs horizontal filled with X divs vertical (or opposite might work better)
//place a hover event listener on each div that changes color of div
//adjust div spacing and margins and borders and stuff
//changing size should not change area used just density

//Generates 16 x 16 base grid of divs



const containerdiv = document.querySelector(".container");
containerdiv.style.display = "flex";
containerdiv.style.flexFlow = "row wrap";
let squares = 4;
let squared = squares*squares;
let horizontalsize = "calc(100% / " + squares + ")";
let horizontalsizeappend = horizontalsize + "%";
let xdivs;

for (let i = 0; i < squared; i++) {
    xdivs = document.createElement("div");
    xdivs.classList.add("xdiv");
    xdivs.style.flexBasis = horizontalsize;
    xdivs.style.height = horizontalsize;
    xdivs.style.padding = 0;
    xdivs.style.margin = 0;
    xdivs.style.backgroundColor = "Red";
    containerdiv.appendChild(xdivs);
  
}




