const mongoose = require("mongoose")

async function Connectdb() {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_UNAME}:${process.env.DB_PASS}@cluster0.nzprvur.mongodb.net/Amazon`)
        console.log("DB Connected")

    } catch (error) {
        console.log(error)
        console.log("DB Connection Loss")
    }
}

module.exports = Connectdb;
