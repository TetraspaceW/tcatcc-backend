import express from "express";
import {
  handleCommitmentList,
  handleCreateCommitment,
} from "../controllers/commitmentController";
import {
  createSignup,
  createSignupRequest,
} from "../controllers/signupController";

const router = express.Router();

router.get("/commitment", handleCommitmentList);
router.post("/commitment/create", handleCreateCommitment);
router.post("/signup/verify", createSignup);
router.post("/signup/create", createSignupRequest);

export default router;
