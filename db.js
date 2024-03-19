
const mongoose = require('mongoose')

module.exports = () => {
    const connectionParams = {
        useNewurlParser:true,
        useUnifiedTopology:true,
    };
    try {
        mongoose.connect('mongodb+srv://shaikarshad8221://Arshad123#@cluster0.mmjytte.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        mongoose.connect(process.env.DB, connectionParams);
        console.log("Connected to database successfully");
    } catch(error) {
        console.log(error);
        console.log("could not connect to database!");
    }
};