import mongoose from "mongoose";

const TeamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  techStack: {
    type: [String], // e.g. ["React", "Node.js"]
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

export default mongoose.models.TeamMember || mongoose.model("TeamMember", TeamMemberSchema);
