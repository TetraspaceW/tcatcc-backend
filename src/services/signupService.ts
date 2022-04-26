import { SignUpRequest } from "../models/signup";
import signupRepository from "../models/signup";
import { getCommitment } from "./commitmentService";

export const createSignup = async (signUpData: SignUpRequest) => {
  const newSignUp = new signupRepository(signUpData);

  let commitment = await getCommitment(signUpData.commitment);

  if (commitment.thresholdMet) {
    ("Threshold has been met; not sending any new signups.");
  } else {
    newSignUp.save();

    commitment.signups.push(newSignUp._id);

    if (commitment.thresholdMet) {
      console.log("Sending emails to all people who have signed up.");
    }

    commitment.save();

    return newSignUp;
  }
};
