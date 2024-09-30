require('dotenv').config();
const mongoose = require('mongoose');
const mongodbUrl = process.env.MONGO_URL;

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {    
    console.log(`database connected securely`);
}).catch((err) => {
    console.log(err);
});
