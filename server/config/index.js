const mongoose = require('mongoose');

module.exports = {
    connect () {
        mongoose.connect(process.env.DB_URL);
        mongoose.set('debug', true);
        mongoose.set('useNewUrlParser', true);

        mongoose.connection.on('connected', () => {
            console.log('\x1b[33m%s\x1b[0m', '\nMongoose default connection is open to ', process.env.DB_URL, '\n', '\x1b[0m')
        });

        mongoose.connection.on('error', function(err){
            console.log(error('\x1b[31m%s\x1b[0m', "\nMongoose default connection has occured "+err+" error"), '\n', '\x1b[0m');
        });

        mongoose.connection.on('disconnected', () => {
            console.log('\x1b[35m%s\x1b[0m', '\nMongoose default connection is disconnected', '\n', '\x1b[0m');
        });

        process.on('SIGINT', () => {
            mongoose.connection.close(function(){
                console.log('\x1b[31m%s\x1b[0m', "\nMongoose default connection is disconnected due to application termination", '\n', '\x1b[0m');
                process.exit(0)
            });
        });
    },


}