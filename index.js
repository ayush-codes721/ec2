// server.js
import express from 'express';
import fs from 'fs';

const app = express();
const PORT = 9000;

app.use(express.json()); // Middleware to parse JSON

app.get('/',(req,res)=>{
    return res.json({msg:"hello"})
    
})

app.post('/webhook', (req, res) => {
  const body = req.body;

  console.log('Received webhook:', body);

  // Save some part of body to file (just an example)
  fs.appendFileSync('log.txt', JSON.stringify(body) + '\n');

  res.status(200).json({ message: 'Webhook received' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
