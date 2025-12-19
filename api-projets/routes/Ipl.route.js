import express from "express";

import { 
    iplIndex,
    iplCreator,
    iplUpdate,
    iplDetails,
    iplDelete
 } from "../controller/iplController.js";

const router = express.Router();

router.get("/", iplIndex)

router.get("/team/:teamId", iplDetails)

router.post("/", iplCreator)

router.put("/team/:teamId", iplUpdate)

router.delete("/team/:teamId", iplDelete)

export default router