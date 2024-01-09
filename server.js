import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: 'public'});
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});