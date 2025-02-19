const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async () => {
    try {
        // Check if DB_CONNECT is defined in environment variables
        if (!process.env.DB_CONNECT) {
            throw new Error('DB_CONNECT environment variable is not defined.');
        }

        const connect = await mongoose.connect(process.env.DB_CONNECT);
        console.log('DB connected');
    } catch (err) {
        console.error('Database connection error:', err.message || err);
    }
};

// To prevent unhandled promise rejections in Node.js
process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
    process.exit(1); // Exit the process to avoid unexpected behavior
});

module.exports = dbConnect;