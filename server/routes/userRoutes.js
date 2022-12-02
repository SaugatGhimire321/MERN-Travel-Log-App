import express from 'express'
import UserController from '../controllers/userController.js'

const router = express.Router()
const userController= new UserController();

router.post('/signup',userController.addUser);
router.post('/login',userController.loginUser);
router.get('/',userController.getAllUsers);
router.get('/:id',userController.getSingleUser);
router.put('update/:id',userController.updateUser);
router.delete('delete/:id',userController.deleteUser);

// router.post('/login',user.login);

export default router;