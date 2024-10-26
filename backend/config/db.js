const mongoose = require("mongoose")

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(process.env.MONGO_URI)

        console.log("Conectou ao banco!")

        return dbConn
    } catch (error) {
        console.log(error)
    }
}

conn()

module.exports = conn