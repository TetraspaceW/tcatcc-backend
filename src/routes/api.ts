import express from "express";
import {
  handleCommitmentList,
  handleCreateCommitment,
  handleGetCommitment,
} from "../controllers/commitmentController";
import {
  handleCreateSignup,
  handleCreateSignupRequest,
} from "../controllers/signupController";

const router = express.Router();

router.get("/commitment", handleCommitmentList);
router.get("/commitment/:id", handleGetCommitment);
router.post("/commitment/create", handleCreateCommitment);
router.post("/signup/verify", handleCreateSignup);
router.post("/signup/create", handleCreateSignupRequest);

export default router;
