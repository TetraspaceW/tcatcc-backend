import { Request, Response } from "express";
import commitment from "../models/commitment";
import signup, { SignUpRequest } from "../models/signup";

export const createSignup = (req: Request, res: Response) => {
  const signupData: SignUpRequest = {
    email: req.body.email,
    commitment: req.body.commitment,
  };

  const newSignUp = new signup(signupData);

  newSignUp.save();

  commitment
    .findByIdAndUpdate(signupData.commitment, {
      $push: { signups: newSignUp._id },
    })
    .exec();

  res.json(newSignUp);
};

export const createSignupRequest = (req: Request, res: Response) =>
  res.send("Join commitment: Not yet implemented.");
