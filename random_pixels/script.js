
console.log("Height: " + window.screen.availHeight);
console.log("Width: " + window.screen.availWidth);

how_many_px = window.screen.availWidth * window.screen.availHeight;

console.log("JS have to generate " + how_many_px + " pixels.");

for(i=0; i<how_many_px; i++) {
    console.log(i);
}