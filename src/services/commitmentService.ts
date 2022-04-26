import commitment, { CommitmentRequest } from "../models/commitment";

export const createCommitment = (commitmentData: CommitmentRequest) => {
  const newCommitment = new commitment({ ...commitmentData, signups: [] });
  newCommitment.save();
  return newCommitment;
};
