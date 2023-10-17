import express from "express";
import { findSummary } from "../controllers/findController.js";
const router = express.Router();
router.get("/wikipedia", findSummary);
export default router;
//# sourceMappingURL=routes.js.map