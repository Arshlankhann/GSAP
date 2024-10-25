function breakText(){

var h1 = document.querySelector("h1")
var h1Text = h1.textContent

var splittedText = h1Text.split("")
var halfValue = Math.floor(splittedText.length/2)

var clutter = ""

splittedText.forEach(function (val,idx) {
    if(idx<halfValue){
        clutter = clutter + `<span class = "a">${val}</span>`
    }else{
        clutter = clutter + `<span class = "b">${val}</span>`
    }
})

h1.innerHTML = clutter
}

breakText()

gsap.from("h1 .a",{
    y:70,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:0.15
})
gsap.from("h1 .b",{
    y:70,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:-0.15
})