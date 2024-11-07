import { Router } from 'express';
const router = Router();

import {
  getCurrentUser,
  getApplicationStats,
  updateUser,
} from '../controllers/user.js';
import { validateUpdateUserInput } from '../middlewares/validationMiddleware.js';
import { authorizePermissions } from '../middlewares/authMiddleware.js';

router.get('/current-user', getCurrentUser);
router.patch('/update-user',validateUpdateUserInput, updateUser);
router.get('/admin/app-stats', [
    authorizePermissions('admin'),
    getApplicationStats,
  ]);
export default router;