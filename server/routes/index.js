import express from "express";
import userRoutes from "./userRoutes.js";
import taskRoutes from "./taskRoutes.js";

const router = express.Router();

router.use("/user", userRoutes); 
router.use("/task", taskRoutes);

router.get("/", (req, res) => {
    res.json({ message: "API is working!" });
  });

export default router;