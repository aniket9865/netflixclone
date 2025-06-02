import express from 'express';
import { authCheck, login, logout, signup } from '../controllers/auth.controller.js'
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();


router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/authCheck", protectRoute, authCheck);

export default router;

// router.get("/signup", (req,res) => {
//     res.send("Signup route");
// });
// mongodb+srv://deulaaniket4:Cu6nrpiZQHKIIPxB@cluster0.ivycuzd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
