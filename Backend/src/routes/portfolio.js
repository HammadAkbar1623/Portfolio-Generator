import express from "express";
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

// Middleware to check if userId is provided
const checkUserId = (req, res, next) => {
  if (!req.params.userId) return res.status(400).json({ error: "User ID is required" });
  next();
};

//  Get Complete Portfolio Data
router.get("/:userId", checkUserId, async (req, res) => {
  try {
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

//  Update or Create Basic Info
router.put("/:userId/basic-info", checkUserId, async (req, res) => {
  try {
    const basicInfo = await BasicInfo.findOneAndUpdate(
      { userId: req.params.userId },
      req.body,
      { new: true, upsert: true }
    );
    res.json(basicInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//  Update or Create Contact Info
router.put("/:userId/contact-info", checkUserId, async (req, res) => {
  try {
    const contactInfo = await ContactInfo.findOneAndUpdate(
      { userId: req.params.userId },
      req.body,
      { new: true, upsert: true }
    );
    res.json(contactInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//  Update or Create Education
router.put("/:userId/education", checkUserId, async (req, res) => {
  try {
    const education = await Education.findOneAndUpdate(
      { userId: req.params.userId },
      req.body,
      { new: true, upsert: true }
    );
    res.json(education);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//  Update or Create Services
router.put("/:userId/services", checkUserId, async (req, res) => {
  try {
    const services = await Services.findOneAndUpdate(
      { userId: req.params.userId },
      req.body,
      { new: true, upsert: true }
    );
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//  Update or Create Skills
router.put("/:userId/skills", checkUserId, async (req, res) => {
  try {
    const skills = await Skills.findOneAndUpdate(
      { userId: req.params.userId },
      req.body,
      { new: true, upsert: true }
    );
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//  Update or Create Projects
router.put("/:userId/projects", checkUserId, async (req, res) => {
  try {
    const projects = await Projects.findOneAndUpdate(
      { userId: req.params.userId },
      req.body,
      { new: true, upsert: true }
    );
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//  Update or Create Color Palette
router.put("/:userId/color-palette", checkUserId, async (req, res) => {
  try {
    const colorPalette = await ColorPalette.findOneAndUpdate(
      { userId: req.params.userId },
      req.body,
      { new: true, upsert: true }
    );
    res.json(colorPalette);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

