import mongoose from "mongoose";
import { Schema } from "mongoose";

var commitmentSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: String,
  threshold: { type: Number, required: true },
  expires: { type: Date, required: true },
  signups: [{ type: Schema.Types.ObjectId, ref: "SignUp" }],
});

commitmentSchema.virtual("expired").get(function () {
  const expires: Date = this.expires;
  return Date.now() > expires.getDate();
});

commitmentSchema.virtual("thresholdMet").get(function () {
  return this.signups.length >= this.threshold;
});

export type CommitmentRequest = {
  name: string;
  description?: string;
  threshold: string;
  expires: string;
};

export default mongoose.model("Commitment", commitmentSchema);
