import express from "express";
import pkg from 'express-validator';
const {check} = pkg;
import {
  addPlayer,
  getPlayerByName,
  getPlayers,

} from "../controllers/players-controller.js";
const router = express.Router();
//:anything, here pid or playerid
//maybe pn for player name cus idk how to get id
//order of route matters like in react except we dont have 'exact' prop here
router.get("/all",
getPlayers);

router.get("/:name", [
    check("name").not().isEmpty()
],
getPlayerByName);

router.post(
  "/",
  [check("name").not().isEmpty(), check("teamName").isLength({ min: 1 })],
  addPlayer
); //will use post for adding and updating player info
//chain middlewares from left to right
//router.patch("/:names", updatePlayer);
//for get requests we return error if we cant find it
//for post and patch, we need to validate what we send

export default router;
