const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://localhost:27017/sohan').on('open', ()=>{
    console.log('Mongodb connected successfully');
}).on('error', ()=>{
    console.log('Mongodb not connected');
});
module.exports = connection;