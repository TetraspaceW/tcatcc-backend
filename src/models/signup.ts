import mongoose from "mongoose";
import { Schema } from "mongoose";

var signupSchema: Schema = new Schema({
  email: { type: String, required: true },
  commitment: {
    type: Schema.Types.ObjectId,
    ref: "Commitment",
    required: true,
  },
});

export type SignUpRequest = {
  email: string;
  commitment: string;
  nonce: string;
};

export default mongoose.model("SignUp", signupSchema);
