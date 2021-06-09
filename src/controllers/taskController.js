import { getPagination } from '../libs/getPagination';
import Task from '../models/tasks.model';

const tasksController = {
    /*******************/
    /**** GET TASKS ****/
    /*******************/
    getTasks: async (req, res) => {
        try {
            const { size, page, title } = req.query;
            const { limit, offset, condition } = getPagination(
                page,
                size,
                title
            );

            const data = await Task.paginate(condition, { offset, limit });
            res.status(200).json({
                totalItems: data.totalDocs,
                tasks: data.docs,
                totalPages: data.totalPages,
                currentPage: data.page - 1,
                nextPage: data.nextPage ? data.nextPage - 1 : data.nextPage,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Something went wrong',
            });
        }
    },

    /********************/
    /** GET TASK BY ID **/
    /********************/
    getTaskById: async (req, res) => {
        try {
            const task = await Task.findById(req.params.id);
            if (!task) {
                return res.status(404).json({
                    message: 'Task not found',
                });
            }
            res.status(200).json({
                task,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Something went wrong',
            });
        }
    },

    /********************/
    /*** CREATE TASKS ***/
    /********************/
    createTask: async (req, res) => {
        try {
            const newTask = await Task.create(req.body);

            res.status(201).json({
                message: 'Task created',
                task: newTask,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Something went wrong',
            });
        }
    },

    /********************/
    /*** DELETE TASKS ***/
    /********************/
    deleteTaskById: async (req, res) => {
        try {
            const deletedTask = await Task.findByIdAndDelete(req.params.id);
            if (!deletedTask) {
                return res.status(404).json({
                    message: 'Task not found',
                });
            }

            res.status(200).json({
                message: 'Task deleted successfully',
            });
        } catch (error) {
            res.status(500).json({
                message: 'Something went wrong',
            });
        }
    },

    /********************/
    /* UPDATE TASK BY ID /
    /********************/
    updateTaskById: async (req, res) => {
        try {
            await Task.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({
                message: 'Task Updated seccessfully',
            });
        } catch (error) {
            res.status(500).json({
                message: 'Something went wrong',
            });
        }
    },
};

export default tasksController;
