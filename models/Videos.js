import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      unique: true,
      required: true,
    },
    title: {
      type: String,
      unique: true,
      required: true,
    },
    desc: {
      type: String,
      unique: true,
      required: true,
    },
    imgUrl: {
      type: String,
      unique: true,
      required: true,
    },
    videoUrl: {
      type: String,
      unique: true,
      required: true,
    },
    views: {
      type: number,
      default: 0,
    },
    tags: {
      type: [String],
      default: [],
    },
    likes: {
      type: String,
      default: [],
    },
    dislikes: {
      type: String,
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Video", VideoSchema);
