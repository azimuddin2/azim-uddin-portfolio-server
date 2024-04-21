const express = require('express');
const app = express();
const port = 5000;



app.get('/', (req, res) => {
    res.send('AU Portfolio Server Running!')
});

app.listen(port, () => {
    console.log(`AU Portfolio app listening on port ${port}`)
});