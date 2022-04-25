import mongoose from "mongoose";
import { Schema } from "mongoose";

var commitmentSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: String,
  threshold: { type: Number, required: true },
  expires: { type: Date, required: true },
});

commitmentSchema.virtual("expired").get(function () {
  const expires: Date = this.expires;
  return Date.now() > expires.getDate();
});

export default mongoose.model("Commitment", commitmentSchema);
