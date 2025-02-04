const mongoose = require('mongoose')
//mongoose.connect('mongodb://localhost/Twitter', {useNewUrlParser: true})
const connectionString = process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost:27017/Twitter';
// 'mongodb://mongodb:27017/Twitter'
// const uri = 'mongodb://localhost:27017/Twitter';
/*
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('we are connected to mongodb!')
});
*/

mongoose.set('debug', true)

// Connect to MongoDB
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
    //useCreateIndex: true
  });

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });