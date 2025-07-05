// server.js
import express from 'express';
import fs from 'fs';

const app = express();
const PORT = 9000;

app.use(express.json()); // Middleware to parse JSON

app.get('/',(req,res)=>{
const apology = "I'm Truly Sorry PALAK 💔\n\n" +
"I know I’ve hurt you, and for that, I’m genuinely sorry from the bottom of my heart. " +
"You mean more to me than words can ever explain. I never wanted to be the reason behind your tears or silence.\n\n" +
"You’ve always been there for me — with your kindness, your smile, and your heart — and I feel terrible knowing I let you down.\n\n" +
"Please forgive me. I’m not perfect, but my intentions were never to hurt you. I miss our talks, our laughs, and everything that made our bond so special.\n\n" +
"I’ll wait, I’ll make things right — just don’t let this be the end of \"us.\"\n" +
"You’re truly one of a kind, and I’m really, deeply sorry. 💫";

    return res.send(apology)
    
})

app.post('/webhook', (req, res) => {
  const body = req.body;

  console.log('Received webhook:', body);

  // Save some part of body to file (just an example)
  fs.appendFileSync('log.txt', JSON.stringify(body) + '\n');

  res.status(200).json({ message: 'Webhook received' });
});

app.listen(PORT,'0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
