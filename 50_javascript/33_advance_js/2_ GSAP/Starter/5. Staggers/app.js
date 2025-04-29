gsap.set(".box", {
    borderRadius: 0,
})

gsap.to(".box", {
    borderRadius: 100,
    duration: 1,
    y: -200,
    ease: "power1",
    // ease: "bounce",
    // ease: "elastic",
    yoyo: true,
    repeat: -1,
    stagger: {
        amount: 4,//imp-> it is total amount of time in seconds that gets split among all of the satggers
        each: 0.5,
        from: 0,

    }
})