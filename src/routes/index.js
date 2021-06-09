import { Router } from 'express';
import taskRoutes from './tasks.routes';

const router = Router();

router.get('/api/', (req, res) => {
    res.send('Wellcome to the API');
});

router.use('/api/tasks', taskRoutes);

export default router;
