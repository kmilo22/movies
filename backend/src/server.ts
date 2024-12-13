import app from './app';
import connectDB from './utils/db';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000; //User port 5000

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});