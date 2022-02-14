import mongoose from 'mongoose';
import config from 'config'
import logger from './logger';

async function connect() {
    const dbUrl = config.get<string>('dbUrl');
    try{
        await mongoose.connect(dbUrl)
        logger.info('Connected to mongoDB');
    } catch(error){
        logger.error("Error connecting to database");
        process.exit(1);
    }
}

export default connect