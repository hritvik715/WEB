//imp-> gsap.method(Element(class,ID,elmnt tag), vars obj)


gsap.to(".box", {//imp-> to 👉 target karega uss elemnt/class/id  ko 
    // y:100,
    x: 100,//imp-> it means transformX(100)
    y: 200,

    duration: 2,//imp->u dont have to use (s) for second (ye apne aap dekh leta hai)

    // repeat: -1//imp->inifinite repeat hogi
    repeat: 2,//imp->only two times it will be repeated

})