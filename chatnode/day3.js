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

// const crypto = require("crypto");

// const password = "musab123";
// const salt = crypto.randomBytes(16).toString("hex");

// const hash = crypto
//   .pbkdf2Sync(password, salt, 1000, 64, "sha512")
//   .toString("hex");

// console.log("Salt:", salt);
// console.log("Hash:", hash);


// hashing example using signup login

// auth-server.js
// const express = require("express");
// const crypto = require("crypto");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(bodyParser.json());

// // --- Simple in-memory "database" ---
// const users = {}; // { email: { salt, hash } }

// // --- Helpers ---
// function createSalt() {
//   return crypto.randomBytes(16).toString("hex");
// }

// function hashPassword(password, salt) {
//   // pbkdf2Sync(password, salt, iterations, keylen, digest)
//   return crypto
//     .pbkdf2Sync(password, salt, 100000, 64, "sha512")
//     .toString("hex");
// }

// // --- Signup route ---
// app.post("/signup", (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) return res.status(400).json({ error: "Email + password required" });
//   if (users[email]) return res.status(409).json({ error: "User already exists" });

//   const salt = createSalt();
//   const hash = hashPassword(password, salt);

//   // store salt + hash (never store raw password)
//   users[email] = { salt, hash };

//   return res.status(201).json({ message: "User created" });
// });

// // --- Login route ---
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) return res.status(400).json({ error: "Email + password required" });

//   const user = users[email];
//   if (!user) return res.status(401).json({ error: "Invalid credentials" });

//   const hash = hashPassword(password, user.salt);

//   if (hash === user.hash) {
//     // In real app -> return JWT / session cookie. Here: simple success.
//     return res.json({ message: "Login successful" });
//   } else {
//     return res.status(401).json({ error: "Invalid credentials" });
//   }
// });

// // --- For debugging: list users (salt+hash only) ---
// app.get("/_debug/users", (req, res) => {
//   return res.json(users);
// });

// app.listen(3000, () => console.log("Auth server running on http://localhost:3000"));
