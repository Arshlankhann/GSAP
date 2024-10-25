gsap.from("#page3 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotation:360,
    
})
gsap.from("#page1 h1",{
    opacity:0,
    duration:2,
    // rotation:360,
    x:500,
    scrollTrigger:{
        trigger:"#page1 h1",
        scroll:"body",
        markers:true,
        start:"top 60%"
    }
    
})
gsap.from("#page1 h2",{
    opacity:0,
    duration:2,
    // rotation:360,
    x:-500,
    scrollTrigger:{
        trigger:"#page1 h2",
        scroll:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub: 5,
        pin:true,
    }
    
})

gsap.to("#page 2 h1",{
    Transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",

    }
})



// gsap.from("#page3 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotation:360,
    
// })