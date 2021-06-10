import config from 'config';
import app from './app';
import './database';

app.listen(config.get('server.port'), () => {
    console.log(`Server started on port: ${config.get('server.port')}`);
});
