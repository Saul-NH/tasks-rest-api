import mongoose from 'mongoose';
import config from 'config';

(async () => {
    try {
        const db = await mongoose.connect(config.get('mongoDb.url'), {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        console.log('Database is connected to: ', db.connection.name);
    } catch (error) {
        console.error('Something was wrong: ' + error);
    }
})();
