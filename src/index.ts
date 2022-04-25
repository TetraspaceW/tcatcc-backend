import express from 'express';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello Tetraspace!');
});

app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});