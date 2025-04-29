import EventEmitter from "events"


//  Creating Instance
const customEmitter = new EventEmitter();

// We have two useful objects, in that object
// 1. on 👉 listen/register for an event
// 2. ONCE : listen/register for an event
// 3. emit 👉 emit/call an event

// customEmitter.on("response", (name, id) => {
customEmitter.once("response", (name, id) => {//imp-> once kroge toh niche vaale sirf ek baar hi chalega line -> 18-19-20
  console.log(`data recieved user ${name} with:${id}`);
});


customEmitter.emit("response", "john", 39);
customEmitter.emit("response", "golu", 57);
customEmitter.emit("response", "molu", 45);

// 1. We can create as many events as we want.
// 2. The order "really" matters
// 3. We can pass the arguments, when we're emitting the arguments.
// customEmitter.on("response", () => {
//   console.log("some other logic here");
// });