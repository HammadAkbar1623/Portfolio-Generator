import mongoose, { Schema } from "mongoose";

//  Basic Info Schema
const BasicInfoSchema = new Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    name: { type: String, default: "", required: true },
    role: { type: String, default: "", required: true },
    about: { type: String, default: "", required: true },
    languages: { type: [String], default: [] },
    profilePic: { type: String, default: "" },
    colorPalette: { type: Schema.Types.ObjectId, ref: "ColorPalette" }, //  Reference to ColorPalette
  },
  { timestamps: true }
);

//  Contact Info Schema
const ContactInfoSchema = new Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true }, //  Link to User
    email: { type: String, required: true },
    phone: { type: String, default: "" },
    residence: { type: String, default: "" },
    linkedin: { type: String, default: "" },
    github: { type: String, default: "" },
  },
  { timestamps: true }
);

//  Education Schema
const EducationSchema = new Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true }, //  Link to User
    university: { type: String, required: true },
    batch: { type: Number, required: true },
    field: { type: String, required: true },
    gpa: { type: Number, required: true },
    college: { type: String, required: true },
    collegeMarks: { type: Number, required: true },
    additionalInfo: { type: String, default: "" },
  },
  { timestamps: true }
);

//  Services Schema
const ServicesSchema = new Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true }, //  Link to User
    services: [
      {
        name: { type: String, required: true },
        about: { type: String, required: true }, //  Each service has a description
      },
    ],
  },
  { timestamps: true }
);

//  Skills Schema
const SkillsSchema = new Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true }, // 🔥 Link to User
    softSkills: { type: [String], default: [] },
    techSkills: [
      {
        skill: { type: String, required: true },
        about: { type: String, default: "" }, //  Each tech skill has a description
      },
    ],
  },
  { timestamps: true }
);

//  Projects Schema
const ProjectsSchema = new Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true }, //  Link to User
    projects: [
      {
        title: { type: String, required: true },
        aboutTheProject: { type: String, required: true },
        link: { type: String, default: "" },
      },
    ],
  },
  { timestamps: true }
);

//  Color Palette Schema
const ColorPaletteSchema = new Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true }, //  Link to User
    name: { type: String, required: true, trim: true },
    primary: { type: String, required: true }, // Hex code
    secondary: { type: String, required: true }, // Hex code
    text: { type: String, required: true }, // Hex code
  },
  { timestamps: true }
);

export const BasicInfo = mongoose.model("BasicInfo", BasicInfoSchema);
export const ContactInfo = mongoose.model("ContactInfo", ContactInfoSchema);
export const Education = mongoose.model("Education", EducationSchema);
export const Services = mongoose.model("Services", ServicesSchema);
export const Skills = mongoose.model("Skills", SkillsSchema);
export const Projects = mongoose.model("Projects", ProjectsSchema);
export const ColorPalette = mongoose.model("ColorPalette", ColorPaletteSchema);
