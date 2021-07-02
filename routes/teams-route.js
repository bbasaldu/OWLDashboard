import express from "express";
import pkg from 'express-validator';
const {check} = pkg;
const router = express.Router();
import { getTeamColors } from "../controllers/teams-controller.js";


router.get("/colors/:name", [
    check("name").not().isEmpty()
],
getTeamColors);
export default router