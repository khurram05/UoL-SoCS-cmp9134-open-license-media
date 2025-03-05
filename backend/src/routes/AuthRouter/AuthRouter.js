import { Router } from "express";
import AuthValidator from "../../validators/AuthValidator/AuthValidator.js";
import AuthController from "../../controllers/AuthController/AuthController.js";

const AuthRouter = Router();

AuthRouter.post(
  "/register",
  AuthValidator.registerUser,
  AuthController.registerUser
);

AuthRouter.post("/login", AuthValidator.loginUser, AuthController.loginUser);

export default AuthRouter;
