// ------------------- gsap.from() -----------------------
// In from method you don't have to specify the inital State, (it will figure out by itself)



gsap.from(".box1", {
    y: -200,
    duration: 3,
    ease: 'linear',
    repeat: -1,
    yoyo: true,//imp-> isse back and forth jaane lagegi elemnts
})












// ------------------- gsap.fromTo() -----------------------
// In fromTo method you HAVE to specify the default value, and also the new animation state (from where your animation should start and where should it end)

gsap.fromTo(".box2", {
    y: 200, opacity: 0,//initial state of the animation
}, {
    //imp->second curly braces is for final state of the animation
    opacity: 1,
    y: -200,
    duration: 3,
    ease: "linear",
    borderRadius: 0,
    repeat: -1,
    yoyo: true,

})