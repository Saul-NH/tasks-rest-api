import app from './app';
import './database';

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port: ${process.env.PORT || 3000}`);
});
