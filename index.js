require('dotenv').config();
const express = require('express');
const app = express();

// use either the .env port (for local) OR Render's port
const PORT = process.env.PORT || 4000;

const jokes = [
  { id: 1, joke: "Why don’t skeletons fight each other? They don’t have the guts." },
  { id: 2, joke: "What do you call fake spaghetti? An impasta!" },
  { id: 3, joke: "Why did the scarecrow win an award? Because he was outstanding in his field." },
  { id: 4, joke: "I told my computer I needed a break, and it said: 'No problem, I’ll go to sleep.'" },
  { id: 5, joke: "Why can’t your nose be 12 inches long? Because then it would be a foot!" },
  { id: 6, joke: "I used to play piano by ear, but now I use my hands." },
  { id: 7, joke: "What did one wall say to the other wall? I’ll meet you at the corner." },
  { id: 8, joke: "Parallel lines have so much in common. It’s a shame they’ll never meet." },
  { id: 9, joke: "Why don’t eggs tell jokes? They’d crack each other up." },
  { id: 10, joke: "I only know 25 letters of the alphabet. I don’t know y." }
];


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/secPage', (req, res) => {
  res.send('Hello we!');
});

app.get('/jokes',(req,res)=>{
  res.json(jokes)
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
