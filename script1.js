
var tl = gsap.timeline();

tl.to("#loader", {
    top: "-110%",
    duration: 1,
    delay: 1
});

tl.from("#nav img, #nav h1, #nav button", {
    y: -100,
    opacity:0,
    duration:0.5,
    stagger:0.2
})

tl.from("#hr",{
    y:80,
    opacity:0,
    duration:1,
})

var a = gsap.timeline();

a.from("#left h1", {
    x:-100,
    opacity:0,
    duration:0.5,
    delay:1,
    stagger:0.3
})

a.from("#hr1", {
    x:100,
    opacity:0
})

gsap.from("#right img", {
    scale:0.3,
    delay:1
})

tl.from("#left1 button", {
    x:-100,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#left1 button",
        scroller:"body",
        scrub:true
    }
})

tl.from("#box", {
    scale: 0.3,
    scrollTrigger:{
        trigger:"#box",
        scroller:"body",
        scrub:true
    }
})


tl.to("#page1 h1", {
    transform: "translatex(-310%)",
    fontWeight: 100,
    scrollTrigger:{
        trigger: "#page1",
        scroller: "body",
        start:"top 0",
        end:"top -200%",
        scrub:1.5,
        pin: true
    }
})