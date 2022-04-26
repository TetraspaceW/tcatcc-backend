import { Response, Request } from "express";
import commitment from "../models/commitment";
import { createCommitment } from "../services/commitmentService";

export const handleCommitmentList = (req: Request, res: Response) => {
  commitment.find().exec((err, list) => {
    res.json(list);
  });
};

export const handleCreateCommitment = (req: Request, res: Response) => {
  const newCommitment = createCommitment({
    name: req.body.name,
    threshold: req.body.threshold,
    expires: req.body.expires,
  });
  res.json(newCommitment);
};
