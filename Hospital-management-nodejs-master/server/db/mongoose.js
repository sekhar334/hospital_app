var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb://admin:admin123@ds145220.mlab.com:45220/nhs-app", {
  useNewUrlParser: true, // To avoid deprecation warning
  useUnifiedTopology: true, // To use the new Server Discover and Monitoring engine
});

module.exports = {mongoose};
