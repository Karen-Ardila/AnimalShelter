const express = require('express');
const app = express();
const port = 8000;
const router = require('./routers/pet.router');
const cors = require('cors');

require('./config/mongoose.config');

app.use(express.json());
app.use(cors());

app.use('/api/pets', router);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});