import 'dotenv/config'

export default {
    port: 1337,
    dbUrl: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_NAME}.ynhpw.mongodb.net`,
}