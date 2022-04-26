import { Request, Response } from "express";
import { createSignup } from "../services/signupService";

export const handleCreateSignup = async (req: Request, res: Response) => {
  const newSignUp = createSignup({
    email: req.body.email,
    commitment: req.body.commitment,
  });

  res.json(newSignUp);
};

export const handleCreateSignupRequest = (req: Request, res: Response) =>
  res.send("Join commitment: Not yet implemented.");
