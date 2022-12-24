require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user') 

mongoose.set('strictQuery', false); // evita el mensaje Mongoose Deprecation Warning


const app = express()
const port = process.env.PORT || 9000 // Toma el puerto del servicio de hosting o el 9000


// middleware
app.use(express.json())
app.use('/api', userRoutes);


// routes
app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

// mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) => console.error(error));

app.listen(port, () => {
    console.log('server listening on port', port)
});