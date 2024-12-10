require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.port || 3000;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})