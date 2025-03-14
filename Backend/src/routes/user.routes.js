import { Router } from 'express'
import { loginUser, registerUser} from '../Controllers/user.controller.js'

const router = Router();

router.post("/signup", registerUser);
router.post("/signin", loginUser);

export default router