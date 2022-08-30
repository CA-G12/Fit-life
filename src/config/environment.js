require('dotenv').config();

const { NODE_ENV, DATABASE_URL, PORT } = process.env;

module.exports = {
    database: {
        url: DATABASE_URL
    },
    port: PORT || 3000,
    nodeEnv: NODE_ENV || "development",
};
