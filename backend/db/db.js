const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.connect("mongodb://0.0.0.0:27017/expenses", { useNewUrlParser: true })
        const con = mongoose.connection

        con.on('open', () => {
            console.log('connected...')
        })
    } catch (error) {
        console.log('DB Connection Error');
    }
}

module.exports = { db }