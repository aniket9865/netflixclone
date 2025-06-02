// import jwt from 'jsonwebtoken';
// import { ENV_VARS } from '../config/envVars.js';


// export const generateTokenAndSetCookie = (id) => {
//     const token = jwt.sign({ id }, ENV_VARS.JWT_SECRET, {   expiresIn: '15d', });
    
//     resizeBy.cookie("jwt-netflix", token, {
//         maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
//         httpOnly: true, // JavaScript cannot access this cookie and it is only sent to the server preventing XSS attacks
//         sameSite : "strict",
//         secure: ENV_VARS.NODE_ENV !== "develoment", // Set to true if using HTTPS
//     });

//     return token;
// };
import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/envVars.js";

export const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: "15d" });

	res.cookie("jwt-netflix", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in MS
		httpOnly: true, // prevent XSS attacks cross-site scripting attacks, make it not be accessed by JS
		sameSite: "strict", // CSRF attacks cross-site request forgery attacks
		secure: ENV_VARS.NODE_ENV !== "development",
	});

	return token;
};