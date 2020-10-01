
module.exports = {
    google: {
        clientID: process.env.ID,
        clientSecret: process.env.Sec
    },
    mongodb: {
        dbURI: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/task1'
    },
    session: {
        cookieKey: 'randomString'
    }
};