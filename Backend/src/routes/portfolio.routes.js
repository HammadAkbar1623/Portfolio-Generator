import express from 'express'
import { saveProfile } from '../Controllers/portfolio.controller.js'

const router = express.Router();

router.post("/save", saveProfile);

export default router;