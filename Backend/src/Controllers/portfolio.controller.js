import { BasicInfo } from "../models/portfolio.model.js";
import { ContactInfo } from "../models/portfolio.model.js";
import { Education } from "../models/portfolio.model.js";
import { Services } from "../models/portfolio.model.js";
import { Skills } from "../models/portfolio.model.js";
import { Projects } from "../models/portfolio.model.js";
import { ColorPalette } from "../models/portfolio.model.js";


// Save Complete Profile Info 

export const saveProfile = async (req, res) => {
  try {
    const { userId, basicInfo, contactInfo, education, services, skills, projects, colorPalette } = req.body;

    // Save Basic Info
    if (basicInfo) {
      await BasicInfo.findOneAndUpdate({ userId }, basicInfo, { upsert: true, new: true });
    }

    // Save Contact Info
    if (contactInfo) {
      await ContactInfo.findOneAndUpdate({ userId }, contactInfo, { upsert: true, new: true });
    }

    // Save Education
    if (education) {
      await Education.findOneAndUpdate({ userId }, education, { upsert: true, new: true });
    }

    // Save Services
    if (services) {
      await Services.findOneAndUpdate({ userId }, { userId, services }, { upsert: true, new: true });
    }

    // Save Skills
    if (skills) {
      await Skills.findOneAndUpdate({ userId }, skills, { upsert: true, new: true });
    }

    // Save Projects
    if (projects) {
      await Projects.findOneAndUpdate({ userId }, { userId, projects }, { upsert: true, new: true });
    }

    // Save Color Palette
    if (colorPalette) {
      await ColorPalette.findOneAndUpdate({ userId }, colorPalette, { upsert: true, new: true });
    }

    res.status(201).json({ message: "Profile saved successfully!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
