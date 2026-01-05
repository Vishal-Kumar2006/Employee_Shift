import mongoose from "mongoose";

const shiftSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    startTime: {
      type: Number,
      required: true,
    },
    endTime: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      require: true,
    },
  },
  { timestamps: true }
);

export const Shift = mongoose.model("Shift", shiftSchema);
