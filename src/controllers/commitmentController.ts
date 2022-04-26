import { Response, Request } from "express";
import commitmentRepository from "../models/commitment";
import { createCommitment, getCommitment } from "../services/commitmentService";

export const handleCommitmentList = (req: Request, res: Response) => {
  commitmentRepository.find().exec((err, list) => {
    res.json(list);
  });
};

export const handleGetCommitment = async (req: Request, res: Response) => {
  const commitment = await getCommitment(req.params.id);
  res.json(commitment);
};

export const handleCreateCommitment = (req: Request, res: Response) => {
  const newCommitment = createCommitment({
    name: req.body.name,
    threshold: req.body.threshold,
    expires: req.body.expires,
  });
  res.json(newCommitment);
};
