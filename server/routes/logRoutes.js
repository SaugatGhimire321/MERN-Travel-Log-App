import express from 'express'
import LogController from '../controllers/logController.js';
const router = express.Router()

const logController = new LogController();

router.post('/',logController.createLog);
router.get('/',logController.getAllLogs);
// router.get('/:id',logController.getSingleLog);
// router.put('update/:id',logController.updateLog);
// router.delete('delete/:id',logController.deleteLog);

export default router;