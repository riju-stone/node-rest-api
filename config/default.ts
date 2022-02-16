import 'dotenv/config'

export default {
    port: 1337,
    dbUrl: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@rest-api-node.ynhpw.mongodb.net`,
}