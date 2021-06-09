import { Router } from 'express';
import tasksController from '../controllers/taskController';
import taskController from '../controllers/taskController';
const router = Router();

router.get('/', taskController.getTasks);

router.post('/', taskController.createTask);

router.get('/:id', tasksController.getTaskById);

router.delete('/:id', tasksController.deleteTaskById);

router.put('/:id', tasksController.updateTaskById);

export default router;
