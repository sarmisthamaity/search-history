require('dotenv').config();
const express = require('express');
const cors = require('cors');
const indexRoute = require("./routes/index");
const port = process.env.PORT;
require("./db/connection");

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', indexRoute);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});
