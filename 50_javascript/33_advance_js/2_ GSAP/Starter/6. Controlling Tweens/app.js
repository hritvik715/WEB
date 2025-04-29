let play = document.querySelector(".play")
let pause = document.querySelector(".pause")
let restart = document.querySelector(".restart")


let tween = gsap.to(".box1", {
    y: -200,
    duration: 1,
    backgroundColor: "teal",
    repeat: -1,
})

play.addEventListener('click', () => tween.play())//imp-> play method is built in mtd of gsap animation


pause.addEventListener('click', () => tween.pause())//pause method is built in mtd of gsap animation
restart.addEventListener('click', () => tween.restart())//restart method is built in mtd of gsap animation


