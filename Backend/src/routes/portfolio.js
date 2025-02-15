import express from "express";
import authMiddleware from '../middlewares/auth.js'
import {
  BasicInfo,
  ContactInfo,
  Education,
  Services,
  Skills,
  Projects,
  ColorPalette,
} from '../models/Portfolio.model.js'

const router = express.Router();

// Middleware to check user access
router.use(authMiddleware);

//  Get Complete Portfolio Data (Protected)
router.get("/:userId", async (req, res) => {
  try {
    if (req.user.userId !== req.params.userId) {
      return res.status(403).json({ error: "Unauthorized access." });
    }

    const userId = req.params.userId;
    const portfolio = {
      basicInfo: await BasicInfo.findOne({ userId }),
      contactInfo: await ContactInfo.findOne({ userId }),
      education: await Education.findOne({ userId }),
      services: await Services.findOne({ userId }),
      skills: await Skills.findOne({ userId }),
      projects: await Projects.findOne({ userId }),
      colorPalette: await ColorPalette.findOne({ userId }),
    };
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
