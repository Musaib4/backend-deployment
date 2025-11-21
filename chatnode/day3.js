// // os


// // const os = require("os");

// // console.log(os.totalmem());
// // console.log(os.freemem());
// // console.log(os.cpus());
// // console.log(os.type());
// // console.log(os.homedir());



// // eventEmitter

// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// // // 1. Listen for an event
// // emitter.on("greet", () => {
// //   console.log("Hello Musab!");
// // });

// // 2. Emit (trigger) the event
// // emitter.emit("greet");


// // emitter.on("message", (name, age) => {
// //     console.log(`User: ${name}, Age: ${age}`);
// // });

// // emitter.emit("message", "Musab", 20);

// // multiple listeners for same event

// // emitter.on("login", () => console.log("User logged in"));
// // emitter.on("login", () => console.log("Send welcome email"));
// // emitter.on("login", () => console.log("Log activity"));

// // emitter.emit("login");

// // custom event

// // class MyEmitter extends EventEmitter {}

// // const myEmitter = new MyEmitter();

// // myEmitter.on("water", () => {
// //   console.log("Please turn off the motor!");
// // });

// // myEmitter.emit("water");


// // diff.between custom and simple events

// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// // 1. Listeners
// emitter.on("userRegistered", (user) => {
//   console.log(`Welcome email sent to ${user}`);
// });

// emitter.on("userRegistered", (user) => {
//   console.log(`Activity logged for ${user}`);
// });

// emitter.on("userRegistered", (user) => {
//   console.log(`Analytics updated for ${user}`);
// });

// // 2. Emit event
// emitter.emit("userRegistered", "Musab");


// // custom event

// const EventEmitter = require("events");

// class UserEmitter extends EventEmitter {
//   registerUser(name) {
//     console.log(`User ${name} registered`);
//     this.emit("userRegistered", name);
//   }
// }

// const userEvents = new UserEmitter();

// // 1. Listeners
// userEvents.on("userRegistered", (user) => {
//   console.log(`Welcome email sent to ${user}`);
// });

// userEvents.on("userRegistered", (user) => {
//   console.log(`Activity logged for ${user}`);
// });

// userEvents.on("userRegistered", (user) => {
//   console.log(`Analytics updated for ${user}`);
// });

// // 2. Use class method
// userEvents.registerUser("Musab");


// crypto hashing

// basic hashing

// const crypto = require("crypto");

// const password = "musab123";

// const hash = crypto
//   .createHash("sha256")
//   .update(password)
//   .digest("hex");

// console.log(hash);


// salt hashing

const crypto = require("crypto");

const password = "musab123";
const salt = crypto.randomBytes(16).toString("hex");

const hash = crypto
  .pbkdf2Sync(password, salt, 1000, 64, "sha512")
  .toString("hex");

console.log("Salt:", salt);
console.log("Hash:", hash);
