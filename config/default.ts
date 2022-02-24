import "dotenv/config";

export default {
  port: 1337,
  dbUrl: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_NAME}.ovene.mongodb.net`,
  saltWorkFactor: 10,
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY,
  assessTokenTTL: "15m",
  refreshTokenTTL: "1y",
};