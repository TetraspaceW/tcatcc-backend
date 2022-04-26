import { Request, Response } from "express";
import signupRepository, { SignUpRequest } from "../models/signup";
import { getCommitment } from "../services/commitmentService";

export const handleCreateSignup = async (req: Request, res: Response) => {
  const signupData: SignUpRequest = {
    email: req.body.email,
    commitment: req.body.commitment,
  };

  const newSignUp = new signupRepository(signupData);

  newSignUp.save();

  let commitment = await getCommitment(req.body.commitment);
  commitment.signups.push(newSignUp._id);
  commitment.save();

  res.json(newSignUp);
};

export const handleCreateSignupRequest = (req: Request, res: Response) =>
  res.send("Join commitment: Not yet implemented.");
