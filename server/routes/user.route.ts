import express from "express";
import {
  activateUser,
  loginUser,
  registrationUser,
  logoutUser,
  updateAccessToken,
  getUserInfo,
  socialAuth,
  updateUserInfo,
  updatePassword,
  updateProfilePicture,
  getAllUsers,
  updateUserRole,
  deleteUser,
} from "../controllers/user.controller";
import { isAuthenticated, authorizeRoles } from "../middleware/auth";

const userRouter = express.Router();

userRouter.post("/registration", registrationUser);
userRouter.post("/activation", activateUser);
userRouter.post("/loginuser", loginUser);
userRouter.get("/logoutuser", isAuthenticated, logoutUser);
userRouter.get("/refreshtoken", updateAccessToken);
userRouter.get("/me", isAuthenticated, getUserInfo);
userRouter.post("/socialAuth", socialAuth);
userRouter.put("/updateuserinfo", isAuthenticated,updateUserInfo);
userRouter.put("/updatepassword", isAuthenticated, updatePassword);
userRouter.put("/updateavatar", isAuthenticated, updateProfilePicture);
userRouter.get("/getusers", isAuthenticated, authorizeRoles("admin"),getAllUsers);
userRouter.put("/updateuserstatus",isAuthenticated,authorizeRoles("admin"),updateUserRole)
userRouter.delete("/deleteuser/:id",isAuthenticated,authorizeRoles("admin"),deleteUser)








export default userRouter;
