import express from "express";
import {
  commitmentList,
  createCommitment,
} from "../controllers/commitmentController";
import {
  createSignup,
  createSignupRequest,
} from "../controllers/signupController";

const router = express.Router();

router.get("/commitment/", commitmentList);
router.get("/commitment/create", createCommitment);
router.get("/signup/verify", createSignup);
router.get("/signup/create", createSignupRequest);
