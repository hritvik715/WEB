//in javsscript , we can achieve encapsulation by using closures to create private members



function Counter() {
    let _count = 0;//private varaible

    //public method that can access and modify the private variable


    this.increment = function () {
        _count++;
    }


    this.decrement = function () {
        _count--;
    }

    this.getCount = function () {
        return _count;
    }
}

const counter = new Counter();
console.log(counter._count)//imp-> undefined bcz it is private and hiding the implementaion details


console.log(counter.getCount())
counter.increment();//1
counter.increment();//2
counter.increment();//3
console.log(counter.getCount())//3
counter.decrement();
console.log(counter.getCount())