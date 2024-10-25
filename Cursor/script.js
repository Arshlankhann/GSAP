var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var image = document.querySelector("#image")

main.addEventListener("mousemove", function (val) {
    gsap.to(cursor, {
        x: val.x,
        y: val.y,
        ease: "back.out",
       
    })
})
image.addEventListener("mouseenter", function () {
    cursor.innerHTML = "view more"
    gsap.to(cursor, {
        scale: 3,
         backgroundColor: "#ffffff5c"
    })
})
image.addEventListener("mouseleave", function () {
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
         backgroundColor: "white"
    })
})