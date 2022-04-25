import mongoose from "mongoose";
import { Schema } from "mongoose";

var signupRequestSchema: Schema = new Schema({
  email: { type: String, required: true },
  commitment: {
    type: Schema.Types.ObjectId,
    ref: "Commitment",
    required: true,
  },
  nonce: { type: String, required: true },
});

export default mongoose.model("SignUpRequest", signupRequestSchema);
