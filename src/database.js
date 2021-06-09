import mongoose from 'mongoose';

(async () => {
    try {
        const db = await mongoose.connect(process.env.MONGODB_URL, {
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
